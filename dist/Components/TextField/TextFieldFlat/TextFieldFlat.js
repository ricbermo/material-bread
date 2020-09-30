var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _TextFieldUnderline=_interopRequireDefault(require("../TextFieldUnderline/TextFieldUnderline"));var _TextFieldLabel=_interopRequireDefault(require("../TextFieldLabel/TextFieldLabel"));var _TextFieldHelperText=_interopRequireDefault(require("../TextFieldHelperText/TextFieldHelperText"));var _TextFieldFlat=_interopRequireDefault(require("./TextFieldFlat.styles"));var _TextFieldLabel2=require("../TextFieldLabel/TextFieldLabel.constants");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/TextField/TextFieldFlat/TextFieldFlat.js";var TextFieldFlat=function(_Component){(0,_inherits2.default)(TextFieldFlat,_Component);function TextFieldFlat(props){var _this;(0,_classCallCheck2.default)(this,TextFieldFlat);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextFieldFlat).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{height:56,labelHeight:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_updateTextInputHeight",function(e){var labelHeight=_this.state.labelHeight;if(!_this.props.multiline)return;var nativeHeight=e.nativeEvent.contentSize.height;var heightOffset=_reactNative.Platform.OS==='ios'?labelHeight+_TextFieldLabel2.nonOutlinedStops.active+8:0;_this.setState({height:Math.max(56,nativeHeight+heightOffset)});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_measureLabel",function(_ref){var height=_ref.nativeEvent.layout.height;return _this.setState({labelHeight:height});});return _this;}(0,_createClass2.default)(TextFieldFlat,[{key:"_renderLeadingIcon",value:function _renderLeadingIcon(){var leadingIcon=this.props.leadingIcon;var isFunc=typeof leadingIcon==='function';return _react.default.createElement(_reactNative.View,{style:{position:'absolute',left:8,top:16},__source:{fileName:_jsxFileName,lineNumber:60}},isFunc?leadingIcon():leadingIcon);}},{key:"_renderTrailingIcon",value:function _renderTrailingIcon(){var trailingIcon=this.props.trailingIcon;var isFunc=typeof trailingIcon==='function';return _react.default.createElement(_reactNative.View,{style:{position:'absolute',right:12,top:16},__source:{fileName:_jsxFileName,lineNumber:71}},isFunc?trailingIcon():trailingIcon);}},{key:"_renderPrefix",value:function _renderPrefix(){var prefix=this.props.prefix;return _react.default.createElement(_reactNative.View,{style:{position:'absolute',left:0,top:26},__source:{fileName:_jsxFileName,lineNumber:81}},_react.default.cloneElement(prefix,{color:prefix.props.color?prefix.props.color:'rgba(0, 0, 0, .57)',fontSize:prefix.props.fontSize?prefix.props.fontSize:16}));}},{key:"_renderSuffix",value:function _renderSuffix(){var suffix=this.props.suffix;return _react.default.createElement(_reactNative.View,{style:{position:'absolute',right:16,top:28},__source:{fileName:_jsxFileName,lineNumber:94}},_react.default.cloneElement(suffix,{color:suffix.props.color?suffix.props.color:'rgba(0, 0, 0, .57)',fontSize:suffix.props.fontSize?suffix.props.fontSize:12}));}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,style=_this$props.style,containerStyle=_this$props.containerStyle,error=_this$props.error,label=_this$props.label,labelColor=_this$props.labelColor,labelStyle=_this$props.labelStyle,handleFocus=_this$props.handleFocus,handleBlur=_this$props.handleBlur,focused=_this$props.focused,helperText=_this$props.helperText,helperVisible=_this$props.helperVisible,helperTextStyle=_this$props.helperTextStyle,underlineColor=_this$props.underlineColor,underlineActiveColor=_this$props.underlineActiveColor,leadingIcon=_this$props.leadingIcon,trailingIcon=_this$props.trailingIcon,dense=_this$props.dense,suffix=_this$props.suffix,prefix=_this$props.prefix,testID=_this$props.testID,focusedLabelColor=_this$props.focusedLabelColor,rest=(0,_objectWithoutProperties2.default)(_this$props,["style","containerStyle","error","label","labelColor","labelStyle","handleFocus","handleBlur","focused","helperText","helperVisible","helperTextStyle","underlineColor","underlineActiveColor","leadingIcon","trailingIcon","dense","suffix","prefix","testID","focusedLabelColor"]);var height=this.state.height;if(dense){height=40;}var paddingLeft=leadingIcon?44:0;if(prefix)paddingLeft=16;var platformStyles=_reactNative.Platform.OS==='web'?{outlineWidth:0}:{};return _react.default.createElement(_reactNative.View,{style:[_TextFieldFlat.default.containerStyle,{marginBottom:helperText&&helperVisible?20:0},containerStyle],__source:{fileName:_jsxFileName,lineNumber:160}},label?_react.default.createElement(_TextFieldLabel.default,{label:label,focused:focused,error:error,value:rest.value,type:'flat',labelColor:labelColor,style:labelStyle,leadingIcon:!!leadingIcon,dense:dense,prefix:prefix,focusedLabelColor:focusedLabelColor,onLayout:this._measureLabel,__source:{fileName:_jsxFileName,lineNumber:167}}):null,leadingIcon?this._renderLeadingIcon():null,prefix?this._renderPrefix():null,_react.default.createElement(_reactNative.TextInput,(0,_extends2.default)({style:[_TextFieldFlat.default.textField,_TextFieldFlat.default.flatInput,platformStyles,{minHeight:dense?40:56,height:height,paddingBottom:rest.multiline?8:0,paddingTop:rest.multiline?24:16,paddingLeft:paddingLeft,paddingRight:trailingIcon||suffix?36:0},style],testID:testID,scrollEnabled:false,onContentSizeChange:function onContentSizeChange(e){return _this2._updateTextInputHeight(e);}},rest,{onFocus:handleFocus,onBlur:handleBlur,__source:{fileName:_jsxFileName,lineNumber:184}})),trailingIcon?this._renderTrailingIcon():null,suffix?this._renderSuffix():null,_react.default.createElement(_TextFieldUnderline.default,{focused:focused,error:error,underlineColor:underlineColor,underlineActiveColor:underlineActiveColor,__source:{fileName:_jsxFileName,lineNumber:208}}),_react.default.createElement(_TextFieldHelperText.default,{error:error,visible:helperVisible||error,style:helperTextStyle,__source:{fileName:_jsxFileName,lineNumber:214}},helperText));}}]);return TextFieldFlat;}(_react.Component);(0,_defineProperty2.default)(TextFieldFlat,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),error:_propTypes.default.bool,label:_propTypes.default.string,labelColor:_propTypes.default.string,labelStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),handleFocus:_propTypes.default.func,handleBlur:_propTypes.default.func,focused:_propTypes.default.bool,helperText:_propTypes.default.string,helperVisible:_propTypes.default.bool,helperTextStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),underlineColor:_propTypes.default.string,underlineActiveColor:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array,_propTypes.default.string]),leadingIcon:_propTypes.default.oneOfType([_propTypes.default.func,_propTypes.default.node]),trailingIcon:_propTypes.default.oneOfType([_propTypes.default.func,_propTypes.default.node]),dense:_propTypes.default.bool,value:_propTypes.default.string,multiline:_propTypes.default.bool,suffix:_propTypes.default.node,prefix:_propTypes.default.node,testID:_propTypes.default.string,focusedLabelColor:_propTypes.default.string});(0,_defineProperty2.default)(TextFieldFlat,"defaultProps",{helperVisible:true});var _default=(0,_withTheme.default)(TextFieldFlat);exports.default=_default;