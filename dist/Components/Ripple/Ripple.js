var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
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
var _getPrototypeOf2 = _interopRequireDefault(
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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireWildcard(require('react'));
var _reactNative = require('react-native');
var _Ripple = _interopRequireWildcard(require('./Ripple.styles'));
var _jsxFileName =
  '/Users/cody/projects/material-bread/src/Components/Ripple/Ripple.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}
var Ripple = (function (_PureComponent) {
  (0, _inherits2.default)(Ripple, _PureComponent);
  function Ripple(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Ripple);
    _this = (0, _possibleConstructorReturn2.default)(
      this,
      (0, _getPrototypeOf2.default)(Ripple).call(this, props),
    );
    _this.onLayout = _this.onLayout.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.onPress = _this.onPress.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.onPressIn = _this.onPressIn.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.onPressOut = _this.onPressOut.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.onLongPress = _this.onLongPress.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.unique = 0;
    _this.mounted = false;
    _this.rippleFades =
      _this.props.rippleFades && !_this.props.displayUntilPressOut;
    _this.isPressingIn = false;
    _this.animationWaitingForEnd = false;
    _this.state = { width: 0, height: 0, ripples: [] };
    return _this;
  }
  (0, _createClass2.default)(Ripple, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.mounted = true;
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;
      },
    },
    {
      key: 'onLayout',
      value: function onLayout(event) {
        var _event$nativeEvent$la = event.nativeEvent.layout,
          width = _event$nativeEvent$la.width,
          height = _event$nativeEvent$la.height;
        var onLayout = this.props.onLayout;
        if ('function' === typeof onLayout) {
          onLayout(event);
        }
        this.setState({ width: width, height: height });
      },
    },
    {
      key: 'onPress',
      value: function onPress(event) {
        var onPress = this.props.onPress;
        if ('function' === typeof onPress) {
          return onPress(event);
        }
      },
    },
    {
      key: 'onLongPress',
      value: function onLongPress(event) {
        var _this$props = this.props,
          onLongPress = _this$props.onLongPress,
          disabled = _this$props.disabled;
        if (disabled) return;
        if ('function' === typeof onLongPress) {
          return onLongPress(event);
        }
      },
    },
    {
      key: 'onPressIn',
      value: function onPressIn(event) {
        var _this$props2 = this.props,
          onPressIn = _this$props2.onPressIn,
          disabled = _this$props2.disabled;
        if (disabled) return;
        if (onPressIn) {
          onPressIn(event);
        }
      },
    },
    {
      key: 'onPressOut',
      value: function onPressOut(event) {
        var onPressOut = this.props.onPressOut;
        if ('function' === typeof onPressOut) {
          onPressOut(event);
        }
      },
    },
    {
      key: 'webGetPositionInElement',
      value: function webGetPositionInElement(e) {
        var rect = e.nativeEvent.target.getBoundingClientRect();
        var x = e.nativeEvent.pageX - rect.left;
        var y = e.nativeEvent.changedTouches[0].clientY - rect.top;
        return { x: x, y: y };
      },
    },
    {
      key: 'render',
      value: function render() {
        var onPress = this.onPress,
          onPressIn = this.onPressIn,
          onPressOut = this.onPressOut,
          onLongPress = this.onLongPress,
          onLayout = this.onLayout;
        var _this$props5 = this.props,
          delayLongPress = _this$props5.delayLongPress,
          delayPressIn = _this$props5.delayPressIn,
          delayPressOut = _this$props5.delayPressOut,
          disabled = _this$props5.disabled,
          hitSlop = _this$props5.hitSlop,
          pressRetentionOffset = _this$props5.pressRetentionOffset,
          children = _this$props5.children,
          testID = _this$props5.testID,
          nativeID = _this$props5.nativeID,
          accessible = _this$props5.accessible,
          accessibilityLabel = _this$props5.accessibilityLabel,
          panResponder = _this$props5.panResponder,
          props = (0, _objectWithoutProperties2.default)(_this$props5, [
            'delayLongPress',
            'delayPressIn',
            'delayPressOut',
            'disabled',
            'hitSlop',
            'pressRetentionOffset',
            'children',
            'testID',
            'nativeID',
            'accessible',
            'accessibilityLabel',
            'panResponder',
          ]);
        var touchableProps = {
          delayLongPress: delayLongPress,
          delayPressIn: delayPressIn,
          delayPressOut: delayPressOut,
          disabled: disabled,
          hitSlop: hitSlop,
          pressRetentionOffset: pressRetentionOffset,
          onPress: onPress,
          onPressIn: onPressIn,
          testID: testID,
          nativeID: nativeID,
          accessible: accessible,
          accessibilityLabel: accessibilityLabel,
          onPressOut: onPressOut,
          onLongPress: props.onLongPress ? onLongPress : undefined,
          onLayout: onLayout,
          activeOpacity: 0.7,
        };
        return _react.default.createElement(
          _reactNative.TouchableOpacity,
          (0, _extends2.default)({}, touchableProps, panResponder, {
            testID: testID,
            __source: { fileName: _jsxFileName, lineNumber: 302 },
          }),
          _react.default.createElement(
            _reactNative.Animated.View,
            (0, _extends2.default)({ useNativeDriver: true }, props, {
              __source: { fileName: _jsxFileName, lineNumber: 306 },
            }),
            children,
          ),
        );
      },
    },
  ]);
  return Ripple;
})(_react.PureComponent);
exports.default = Ripple;
(0, _defineProperty2.default)(
  Ripple,
  'defaultProps',
  _objectSpread({}, _reactNative.TouchableOpacity.defaultProps, {
    rippleColor: 'rgba(0, 0, 0, .87)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    displayUntilPressOut: true,
    onRippleAnimation: function onRippleAnimation(animation, callback) {
      return animation.start(callback);
    },
    testID: 'mb-ripple',
  }),
);
(0, _defineProperty2.default)(
  Ripple,
  'propTypes',
  _objectSpread(
    {},
    _reactNative.Animated.View.propTypes,
    {},
    _reactNative.TouchableOpacity.propTypes,
    {
      rippleColor: _propTypes.default.string,
      rippleOpacity: _propTypes.default.number,
      rippleDuration: _propTypes.default.number,
      rippleSize: _propTypes.default.number,
      rippleCentered: _propTypes.default.bool,
      rippleSequential: _propTypes.default.bool,
      rippleFades: _propTypes.default.bool,
      disabled: _propTypes.default.bool,
      displayUntilPressOut: _propTypes.default.bool,
      onRippleAnimation: _propTypes.default.func,
      testID: _propTypes.default.string,
    },
  ),
);

