var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck'),
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass'),
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);
var _getPrototypeOf3 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf'),
);
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);
var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits'),
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNative = require('react-native');
var _withTheme = _interopRequireDefault(require('../../../Theme/withTheme'));
var _BodyText = _interopRequireDefault(
  require('../../Typography/BodyText/BodyText.js'),
);
var _Caption = _interopRequireDefault(
  require('../../Typography/Caption/Caption.js'),
);
var _Ripple = _interopRequireDefault(require('../../Ripple/Ripple.js'));
var _Hoverable = _interopRequireDefault(
  require('../../../Utils/Hoverable/Hoverable.js'),
);
var _color = _interopRequireDefault(require('color'));
var _ListItem = _interopRequireDefault(require('./ListItem.styles'));
var _jsxFileName =
  '/Users/cody/projects/material-bread/src/Components/List/ListItem/ListItem.js';
var ListItem = (function (_Component) {
  (0, _inherits2.default)(ListItem, _Component);
  function ListItem() {
    var _getPrototypeOf2;
    var _this;
    (0, _classCallCheck2.default)(this, ListItem);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = (0, _possibleConstructorReturn2.default)(
      this,
      (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ListItem)).call.apply(
        _getPrototypeOf2,
        [this].concat(args),
      ),
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'state',
      { stateBackgroundColor: null, isPressed: false },
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'getBackgroundColor',
      function () {
        var _this$props = _this.props,
          backgroundColor = _this$props.backgroundColor,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          rippleProps = _this$props.rippleProps;
        var stateBackgroundColor = _this.state.stateBackgroundColor;
        var implementedBackgroundColor = backgroundColor
          ? backgroundColor
          : 'transparent';
        implementedBackgroundColor = stateBackgroundColor
          ? stateBackgroundColor
          : implementedBackgroundColor;
        var rippleColor =
          rippleProps && rippleProps.rippleColor
            ? (0, _color.default)(rippleProps.rippleColor)
                .alpha(0.12)
                .rgb()
                .string()
            : 'rgba(0, 0, 0, 0.12)';
        implementedBackgroundColor = selected
          ? rippleColor
          : implementedBackgroundColor;
        return disabled ? 'transparent' : implementedBackgroundColor;
      },
    );
    return _this;
  }
  (0, _createClass2.default)(ListItem, [
    {
      key: '_renderText',
      value: function _renderText() {
        var _this$props2 = this.props,
          text = _this$props2.text,
          _this$props2$textProp = _this$props2.textProps,
          textProps =
            _this$props2$textProp === void 0 ? {} : _this$props2$textProp,
          secondaryText = _this$props2.secondaryText,
          _this$props2$secondar = _this$props2.secondaryTextProps,
          secondaryTextProps =
            _this$props2$secondar === void 0 ? {} : _this$props2$secondar,
          disabled = _this$props2.disabled,
          textStyle = _this$props2.textStyle,
          secondaryTextStyle = _this$props2.secondaryTextStyle;
        return _react.default.createElement(
          _reactNative.View,
          {
            style: { alignItems: 'flex-start' },
            ellipsizeMode: 'tail',
            __source: { fileName: _jsxFileName, lineNumber: 54 },
          },
          _react.default.createElement(
            _BodyText.default,
            (0, _extends2.default)(
              {
                style: [
                  _ListItem.default.listItemText,
                  { color: disabled ? 'rgba(0,0,0,0.47)' : 'rgba(0,0,0,1)' },
                  textStyle,
                ],
                numberOfLines: 1,
              },
              textProps,
              { __source: { fileName: _jsxFileName, lineNumber: 55 } },
            ),
            text,
          ),
          typeof secondaryText === 'string'
            ? _react.default.createElement(
                _Caption.default,
                (0, _extends2.default)(
                  {
                    style: [
                      _ListItem.default.listItemSecondaryText,
                      { color: 'rgba(0,0,0,0.57)' },
                      secondaryTextStyle,
                    ],
                    numberOfLines: 2,
                  },
                  secondaryTextProps,
                  { __source: { fileName: _jsxFileName, lineNumber: 66 } },
                ),
                secondaryText,
              )
            : secondaryText,
        );
      },
    },
    {
      key: '_renderIcon',
      value: function _renderIcon() {
        var icon = this.props.icon;
        return _react.default.cloneElement(icon, {
          size: icon.props.size ? icon.props.size : 24,
          color: icon.props.color ? icon.props.color : 'rgba(0, 0, 0, 0.54)',
        });
      },
    },
    {
      key: '_renderActionitem',
      value: function _renderActionitem() {
        var actionItem = this.props.actionItem;
        return _react.default.createElement(
          _react.Fragment,
          { __source: { fileName: _jsxFileName, lineNumber: 95 } },
          _react.default.createElement(_reactNative.View, {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 96 },
          }),
          actionItem,
        );
      },
    },
    {
      key: '_renderLeadingActionItem',
      value: function _renderLeadingActionItem() {
        var leadingActionItem = this.props.leadingActionItem;
        return leadingActionItem;
      },
    },
    {
      key: 'handleHover',
      value: function handleHover(toggle) {
        var rippleProps = this.props.rippleProps;
        var bgColor = this.getBackgroundColor();
        var implementedColor;
        if (bgColor == 'transparent') {
          implementedColor = toggle ? 'rgba(0, 0, 0, 0.12)' : null;
        } else {
          if ((0, _color.default)(bgColor).isDark()) {
            implementedColor = toggle
              ? (0, _color.default)(bgColor).lighten(0.15).rgb().string()
              : null;
          } else {
            implementedColor = toggle
              ? (0, _color.default)(bgColor).darken(0.15).rgb().string()
              : null;
          }
        }
        if (rippleProps && rippleProps.rippleColor) {
          implementedColor = toggle
            ? (0, _color.default)(rippleProps.rippleColor)
                .alpha(0.12)
                .rgb()
                .string()
            : null;
        }
        this.setState({ stateBackgroundColor: implementedColor });
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props3 = this.props,
          style = _this$props3.style,
          onPressProp = _this$props3.onPress,
          disabled = _this$props3.disabled,
          children = _this$props3.children,
          media = _this$props3.media,
          icon = _this$props3.icon,
          actionItem = _this$props3.actionItem,
          leadingActionItem = _this$props3.leadingActionItem,
          rippleProps = _this$props3.rippleProps,
          rest = (0, _objectWithoutProperties2.default)(_this$props3, [
            'style',
            'onPress',
            'disabled',
            'children',
            'media',
            'icon',
            'actionItem',
            'leadingActionItem',
            'rippleProps',
          ]);
        var contentMargin = media ? 16 : 0;
        if (icon || leadingActionItem) contentMargin = 32;
        return _react.default.createElement(
          _Hoverable.default,
          {
            onHoverIn: function onHoverIn() {
              return _this2.handleHover(true);
            },
            onHoverOut: function onHoverOut() {
              return _this2.handleHover(false);
            },
            __source: { fileName: _jsxFileName, lineNumber: 190 },
          },
          _react.default.createElement(
            _Ripple.default,
            (0, _extends2.default)(
              {
                onAnimationEnd: function onAnimationEnd() {
                  // if (isPressed && onPress) {
                  //   onPress();
                  //   _this2.setState({ isPressed: false });
                  // }
                },
                rippleDuration: 200,
                disabled: disabled,
                rippleColor: 'rgba(0,0,0,.8)',
                onPress: function onPress() {
                  if (onPressProp) {
                    onPressProp();
                  }
                },
                style: [
                  {
                    backgroundColor: this.getBackgroundColor(),
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 16,
                    width: _reactNative.Platform.OS === 'web' ? 416 : '100%',
                    zIndex: 1,
                  },
                  style,
                ],
              },
              rippleProps,
              rest,
              { __source: { fileName: _jsxFileName, lineNumber: 193 } },
            ),
            leadingActionItem ? this._renderLeadingActionItem() : null,
            icon ? this._renderIcon() : null,
            media ? media : null,
            _react.default.createElement(
              _reactNative.View,
              {
                style: {
                  alignSelf: 'center',
                  marginLeft: contentMargin,
                  flexShrink: 1,
                },
                __source: { fileName: _jsxFileName, lineNumber: 220 },
              },
              children ? children : this._renderText(),
            ),
            actionItem ? this._renderActionitem() : null,
          ),
        );
      },
    },
  ]);
  return ListItem;
})(_react.Component);
(0, _defineProperty2.default)(ListItem, 'propTypes', {
  children: _propTypes.default.node,
  style: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.array,
  ]),
  onPress: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  text: _propTypes.default.string,
  textProps: _propTypes.default.object,
  secondaryText: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.element,
  ]),
  secondaryTextProps: _propTypes.default.object,
  media: _propTypes.default.node,
  icon: _propTypes.default.node,
  actionItem: _propTypes.default.node,
  leadingActionItem: _propTypes.default.node,
  textStyle: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.array,
  ]),
  secondaryTextStyle: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.array,
  ]),
  rippleProps: _propTypes.default.object,
  backgroundColor: _propTypes.default.string,
});
var _default = (0, _withTheme.default)(ListItem);
exports.default = _default;
