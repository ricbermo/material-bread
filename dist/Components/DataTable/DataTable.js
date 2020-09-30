var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _shadow=_interopRequireDefault(require("../../Utils/Shadow/shadow.js"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/DataTable/DataTable.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var DataTable=function(_Component){(0,_inherits2.default)(DataTable,_Component);function DataTable(){(0,_classCallCheck2.default)(this,DataTable);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(DataTable).apply(this,arguments));}(0,_createClass2.default)(DataTable,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,testID=_this$props.testID;return _react.default.createElement(_reactNative.ScrollView,{scrollEnabled:true,horizontal:true,contentContainerStyle:{minWidth:'100%'},__source:{fileName:_jsxFileName,lineNumber:17}},_react.default.createElement(_reactNative.View,{style:[_objectSpread({flex:1,borderRadius:4},(0,_shadow.default)(4)),style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:21}},children));}}]);return DataTable;}(_react.Component);(0,_defineProperty2.default)(DataTable,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),testID:_propTypes.default.string});var _default=(0,_withTheme.default)(DataTable);exports.default=_default;