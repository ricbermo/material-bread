import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Animated, I18nManager, ScrollView, View } from 'react-native';
import Tab from './Tab/Tab';
import Underline from './Underline/Underline';
import withTheme from '../../Theme/withTheme';
import styles from './Tabs.styles';
export const TabsContext = React.createContext();

class Tabs extends Component {
  static propTypes = {
    actionItems: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
    ),
    selectedIndex: PropTypes.number,
    backgroundColor: PropTypes.string,
    underlineColor: PropTypes.string,
    scrollEnabled: PropTypes.bool,
    handleChange: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    testID: PropTypes.string,
    fixedTabWidth: PropTypes.number,
  };

  static defaultProps = {
    selectedIndex: 0,
    underlineColor: '#fff',
    scrollEnabled: false,
  };

  state = {
    tabWidth: null,
    barWidth: null,
    indicatorPosition: null,
  };

  componentDidUpdate(prevProps) {
    const { actionItems } = this.props;

    if (actionItems.length !== prevProps.actionItems.length && this.container) {
      this.container.measure((_, b, width) => {
        this.getTabWidth(width);
      });
    }

    this.selectTab();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { actionItems, selectedIndex } = this.props;
    const { tabWidth, barWidth } = this.state;

    const didActionsLengthChange =
      actionItems.length !== nextProps.actionItems.length;

    const didIndexChange =
      selectedIndex !== nextProps.selectedIndex &&
      nextProps.selectedIndex < nextProps.actionItems.length &&
      nextProps.selectedIndex >= 0;

    const didWidthChange =
      tabWidth !== nextState.tabWdith || barWidth !== nextState.barWidth;

    return didActionsLengthChange || didIndexChange || didWidthChange;
  }

  getAnimateValues() {
    const {
      selectedIndex,
      scrollEnabled,
      actionItems,
      fixedTabWidth,
    } = this.props;
    const { tabWidth, barWidth } = this.state;

    if ((!scrollEnabled && tabWidth == null) || barWidth == null) return false;

    const index = selectedIndex;
    let scrollValue = !scrollEnabled ? tabWidth : barWidth * 0.4;
    if (scrollValue < 90) scrollValue = 90;

    if (!scrollEnabled && scrollValue > 90) {
      return {
        indicatorPosition: index === 0 ? 0 : index * scrollValue,
        scrollPosition: 0,
      };
    }

    const fixedIndicatorPosition = index * scrollValue;
    switch (index) {
      case 0: // First tab
        return {
          indicatorPosition: 0,
          scrollPosition: 0,
        };
      case 1: // Second tab
        return {
          indicatorPosition: fixedTabWidth
            ? fixedIndicatorPosition
            : barWidth * 0.5 - scrollValue / 4,
          scrollPosition: scrollValue * 0.25,
        };
      case actionItems.length - 1: // Last tab
        return {
          indicatorPosition: fixedTabWidth
            ? fixedIndicatorPosition
            : scrollValue * (index - 1) + (barWidth * 0.5 - scrollValue / 4),
          scrollPosition: scrollValue * (index - 1) + scrollValue * 0.5,
        };
      default:
        // Any tabs between second and last
        return {
          indicatorPosition: fixedTabWidth
            ? fixedIndicatorPosition
            : scrollValue * (index - 1) + (barWidth * 0.5 - scrollValue / 4),
          scrollPosition: scrollValue * 0.25 + scrollValue * (index - 1),
        };
    }
  }

  selectTab() {
    const animatedValues = this.getAnimateValues();
    const hasIndicatorPosition = !!this.state.indicatorPosition;

    if (animatedValues) {
      const { indicatorPosition, scrollPosition } = animatedValues;

      if (!hasIndicatorPosition) {
        this.setState({
          indicatorPosition: new Animated.Value(indicatorPosition),
        });
      } else {
        Animated.spring(this.state.indicatorPosition, {
          toValue: I18nManager.isRTL ? -indicatorPosition : indicatorPosition,
          tension: 300,
          friction: 20,
          useNativeDriver: true,
        }).start();
      }

      if (this.scrollView) {
        this.scrollView.scrollTo({ x: scrollPosition });
      }
    }
  }

  getTabWidth(width) {
    const { scrollEnabled, actionItems, fixedTabWidth } = this.props;
    const fixedWidth = fixedTabWidth * actionItems.length;
    const barWidth = fixedTabWidth ? fixedWidth : width;

    if (!scrollEnabled) {
      const tabWidth = fixedTabWidth || width / actionItems.length;

      this.setState({ tabWidth });
    }

    this.setState({ barWidth });
  }

  getColor() {
    const { backgroundColor, theme } = this.props;

    return backgroundColor || theme.primary.main;
  }

  _renderTabs() {
    const {
      scrollEnabled,
      actionItems,
      handleChange,
      selectedIndex,
      fixedTabWidth,
    } = this.props;
    const { tabWidth, barWidth } = this.state;

    const selectedTabWidth = fixedTabWidth ? fixedTabWidth : tabWidth;
    const selectedBarWidth = fixedTabWidth
      ? fixedTabWidth * actionItems.length
      : barWidth;

    let tabWidthImplemented = !scrollEnabled
      ? selectedTabWidth
      : selectedBarWidth * 0.4;
    if (tabWidthImplemented < 90) tabWidthImplemented = 90;

    return actionItems.map((item, index) => {
      if (!item.props) {
        return (
          <Tab
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => {
              handleChange(index);
              if (item.onPress) item.onPress();
            }}
            active={index === selectedIndex}
            tabWidth={tabWidthImplemented}
          />
        );
      } else {
        return React.cloneElement(item, {
          key: index,
          active: index === selectedIndex,
          tabWidth: tabWidthImplemented,
          onPress: () => {
            handleChange(index);
            if (item.props.onPress) item.onPress();
          },
        });
      }
    });
  }

  _renderContent() {
    const {
      scrollEnabled,
      underlineColor,
      fixedTabWidth,
      actionItems,
    } = this.props;
    const { tabWidth, indicatorPosition, barWidth } = this.state;

    const selectedTabWidth = fixedTabWidth ? fixedTabWidth : tabWidth;
    const selectedBarWidth = fixedTabWidth
      ? fixedTabWidth * actionItems.length
      : barWidth;

    let tabWidthImplemented = !scrollEnabled
      ? selectedTabWidth
      : selectedBarWidth * 0.4;
    if (tabWidthImplemented < 90) tabWidthImplemented = 90;

    return (
      <Fragment>
        <View style={styles.tabsWrapper}>{this._renderTabs()}</View>
        {indicatorPosition && (
          <Underline
            color={underlineColor}
            value={indicatorPosition}
            tabWidth={tabWidthImplemented}
          />
        )}
      </Fragment>
    );
  }

  _renderScrollView() {
    const { scrollEnabled } = this.props;
    const { tabWidth, barWidth } = this.state;

    const tabWidthImplemented = !scrollEnabled ? tabWidth : barWidth * 0.4;

    if (scrollEnabled || tabWidthImplemented < 90) {
      return (
        <ScrollView
          horizontal
          ref={ref => {
            this.scrollView = ref;
          }}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps={'never'}
          scrollEnabled={scrollEnabled || tabWidthImplemented < 90}>
          {this._renderContent()}
        </ScrollView>
      );
    } else {
      return this._renderContent();
    }
  }

  render() {
    const { style, testID } = this.props;

    return (
      <TabsContext.Provider>
        <View
          style={[
            styles.container,
            {
              backgroundColor: this.getColor(),
            },
            style,
          ]}
          testID={testID}
          ref={ref => {
            this.container = ref;
          }}
          onLayout={event => this.getTabWidth(event.nativeEvent.layout.width)}>
          {this._renderScrollView()}
        </View>
      </TabsContext.Provider>
    );
  }
}

export default withTheme(Tabs);
