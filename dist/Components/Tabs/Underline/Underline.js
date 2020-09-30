var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Undrline=_interopRequireDefault(require("./Undrline.styles"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Tabs/Underline/Underline.js";var Underline=function(_Component){(0,_inherits2.default)(Underline,_Component);function Underline(){(0,_classCallCheck2.default)(this,Underline);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Underline).apply(this,arguments));}(0,_createClass2.default)(Underline,[{key:"render",value:function render(){var _this$props=this.props,tabWidth=_this$props.tabWidth,color=_this$props.color,value=_this$props.value,underlineHeight=_this$props.underlineHeight;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:[_Undrline.default.underline,{width:tabWidth,backgroundColor:color,transform:[{translateX:value}],height:underlineHeight}],__source:{fileName:_jsxFileName,lineNumber:27}});}}]);return Underline;}(_react.Component);(0,_defineProperty2.default)(Underline,"propTypes",{color:_propTypes.default.string,value:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.instanceOf(_reactNative.Animated.Value)]),tabWidth:_propTypes.default.number,underlineHeight:_propTypes.default.number});(0,_defineProperty2.default)(Underline,"defaultProps",{underlineHeight:2});var _default=(0,_withTheme.default)(Underline);exports.default=_default;