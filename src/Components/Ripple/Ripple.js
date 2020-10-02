import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

export default class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableOpacity.defaultProps,

    rippleColor: 'rgba(0, 0, 0, .87)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    displayUntilPressOut: true,

    onRippleAnimation: (animation, callback) => animation.start(callback),
    testID: 'mb-ripple',
  };

  static propTypes = {
    ...Animated.View.propTypes,
    ...TouchableOpacity.propTypes,

    rippleColor: PropTypes.string,
    rippleOpacity: PropTypes.number,
    rippleDuration: PropTypes.number,
    rippleSize: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
    rippleCentered: PropTypes.bool,
    rippleSequential: PropTypes.bool,
    rippleFades: PropTypes.bool,
    disabled: PropTypes.bool,
    displayUntilPressOut: PropTypes.bool,

    onRippleAnimation: PropTypes.func,
    testID: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.onLayout = this.onLayout.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);

    this.unique = 0;
    this.mounted = false;

    this.rippleFades =
      this.props.rippleFades && !this.props.displayUntilPressOut;
    this.isPressingIn = false;
    this.animationWaitingForEnd = false;

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLayout(event) {
    let { width, height } = event.nativeEvent.layout;
    let { onLayout } = this.props;

    if ('function' === typeof onLayout) {
      onLayout(event);
    }

    this.setState({ width, height });
  }

  onPress(event) {
    let { onPress } = this.props;

    if ('function' === typeof onPress) {
      onPress(event);
    }
  }

  onLongPress(event) {
    let { onLongPress, disabled } = this.props;
    if (disabled) return;
    if ('function' === typeof onLongPress) {
      onLongPress(event);
    }
  }

  onPressIn(event) {
    const { onPressIn, disabled } = this.props;
    if (disabled) return;

    if (onPressIn) {
      onPressIn(event);
    }
  }

  onPressOut(event) {
    let { onPressOut } = this.props;

    if ('function' === typeof onPressOut) {
      onPressOut(event);
    }
  }

  onAnimationEnd(event) {
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd(event);
    }
  }

  webGetPositionInElement(e) {
    var rect = e.nativeEvent.target.getBoundingClientRect();
    var x = e.nativeEvent.pageX - rect.left; //x position within the element.
    var y = e.nativeEvent.changedTouches[0].clientY - rect.top; //y position within the element.
    return { x, y };
  }

  render() {
    let { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
    let {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      panResponder,
      ...props
    } = this.props;

    let touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      onPress,
      onPressIn,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      onPressOut,
      onLongPress: props.onLongPress ? onLongPress : undefined,
      onLayout,
    };

    return (
      <TouchableOpacity
        {...touchableProps}
        {...panResponder}
        testID={testID}
        activeOpacity={0.7}>
        <Animated.View useNativeDriver={true} {...props}>
          {children}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
