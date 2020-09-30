var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _TextFieldLabel=_interopRequireDefault(require("./TextFieldLabel.styles"));var _TextFieldLabel2=require("./TextFieldLabel.constants");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/TextField/TextFieldLabel/TextFieldLabel.js";var TextFieldLabel=function(_Component){(0,_inherits2.default)(TextFieldLabel,_Component);function TextFieldLabel(props){var _this;(0,_classCallCheck2.default)(this,TextFieldLabel);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextFieldLabel).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{translateYAnimation:new _reactNative.Animated.Value(_this.props.type==='outlined'?_TextFieldLabel2.outlinedStops.initial:_TextFieldLabel2.nonOutlinedStops.initial),fontSizeAnimation:new _reactNative.Animated.Value(_this.props.value||_this.props.focused?1:0),animationDuration:200,animationEasing:_reactNative.Easing.ease,canAnimate:true});return _this;}(0,_createClass2.default)(TextFieldLabel,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,type=_this$props.type,dense=_this$props.dense,prefix=_this$props.prefix,value=_this$props.value;if(type=='outlined'&&dense){this.setState({translateYAnimation:new _reactNative.Animated.Value(_TextFieldLabel2.outlinedStopsDense.initial)});}if(prefix)this._handlePrefix();if(value){if(type=='outlined'){this._handleLabelOutlinedAnimation();}else{this._handleLabelAnimation();}}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,focused=_this$props2.focused,type=_this$props2.type,value=_this$props2.value;if(focused!==prevProps.focused||value!==prevProps.value){if(type=='outlined'){this._handleLabelOutlinedAnimation();}else{this._handleLabelAnimation();}}}},{key:"_handlePrefix",value:function _handlePrefix(){var _this$props3=this.props,type=_this$props3.type,dense=_this$props3.dense;var translateYAnimation=_TextFieldLabel2.nonOutlinedStops.active;if(type=='outlined'){translateYAnimation=dense?_TextFieldLabel2.outlinedStopsDense.active:_TextFieldLabel2.outlinedStops.active;}this.setState({canAnimate:false,translateYAnimation:new _reactNative.Animated.Value(translateYAnimation),fontSizeAnimation:new _reactNative.Animated.Value(1)});}},{key:"_handleLabelAnimation",value:function _handleLabelAnimation(){var _this$props4=this.props,focused=_this$props4.focused,value=_this$props4.value;var _this$state=this.state,translateYAnimation=_this$state.translateYAnimation,animationEasing=_this$state.animationEasing,animationDuration=_this$state.animationDuration,canAnimate=_this$state.canAnimate,fontSizeAnimation=_this$state.fontSizeAnimation;if(!canAnimate)return;var position=focused||value?_TextFieldLabel2.nonOutlinedStops.active:_TextFieldLabel2.nonOutlinedStops.initial;var fontVal=focused||value?1:0;_reactNative.Animated.parallel([_reactNative.Animated.timing(translateYAnimation,{toValue:position,duration:animationDuration,easing:animationEasing}),_reactNative.Animated.timing(fontSizeAnimation,{toValue:fontVal,duration:animationDuration,easing:animationEasing})]).start();}},{key:"_handleLabelOutlinedAnimation",value:function _handleLabelOutlinedAnimation(){var _this$props5=this.props,focused=_this$props5.focused,value=_this$props5.value,dense=_this$props5.dense;var _this$state2=this.state,translateYAnimation=_this$state2.translateYAnimation,animationEasing=_this$state2.animationEasing,animationDuration=_this$state2.animationDuration,fontSizeAnimation=_this$state2.fontSizeAnimation,canAnimate=_this$state2.canAnimate;if(!canAnimate)return;var position=focused||value?_TextFieldLabel2.outlinedStops.active:_TextFieldLabel2.outlinedStops.initial;var fontVal=focused||value?1:0;if(dense)position=focused||value?_TextFieldLabel2.outlinedStopsDense.active:_TextFieldLabel2.outlinedStopsDense.initial;_reactNative.Animated.parallel([_reactNative.Animated.timing(translateYAnimation,{toValue:position,duration:animationDuration,easing:animationEasing}),_reactNative.Animated.timing(fontSizeAnimation,{toValue:fontVal,duration:animationDuration,easing:animationEasing})]).start();}},{key:"render",value:function render(){var _this$props6=this.props,error=_this$props6.error,labelColor=_this$props6.labelColor,label=_this$props6.label,focused=_this$props6.focused,type=_this$props6.type,leadingIcon=_this$props6.leadingIcon,prefix=_this$props6.prefix,theme=_this$props6.theme,style=_this$props6.style,dense=_this$props6.dense,focusedLabelColor=_this$props6.focusedLabelColor,_onLayout=_this$props6.onLayout;var _this$state3=this.state,translateYAnimation=_this$state3.translateYAnimation,fontSizeAnimation=_this$state3.fontSizeAnimation;var translateX=12;if(type==='flat'){translateX=-1;}else if(type==='outlined'){translateX=10;}if(!labelColor)labelColor='rgba(0, 0, 0, 0.54)';if(focused)labelColor=focusedLabelColor||theme.primary.main;if(error){labelColor='red';}var marginLeft=leadingIcon?32:0;if(type=='flat'&&leadingIcon){marginLeft=42;}else if(type=='filled'&&prefix){marginLeft=6;}var baseFontSize=(_reactNative.StyleSheet.flatten(style)||{}).fontSize||theme.subtitleOne.fontSize||16;var fontStyle={fontSize:fontSizeAnimation.interpolate({inputRange:[0,1],outputRange:[baseFontSize,baseFontSize*(dense?0.65:0.75)]})};return _react.default.createElement(_reactNative.Animated.View,{style:[_TextFieldLabel.default.container,{marginLeft:marginLeft}],onLayout:function onLayout(e){return _onLayout&&_onLayout(e);},pointerEvents:"none",__source:{fileName:_jsxFileName,lineNumber:211}},_react.default.createElement(_reactNative.Animated.Text,{style:[_TextFieldLabel.default.label,{color:labelColor,backgroundColor:type=='outlined'?'white':'transparent',paddingHorizontal:type=='outlined'?4:0,transform:[{translateY:translateYAnimation},{translateX:_reactNative.I18nManager.isRTL?-translateX:translateX}]},style,fontStyle],__source:{fileName:_jsxFileName,lineNumber:220}},label));}}]);return TextFieldLabel;}(_react.Component);(0,_defineProperty2.default)(TextFieldLabel,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),error:_propTypes.default.bool,labelColor:_propTypes.default.string,focused:_propTypes.default.bool,label:_propTypes.default.string,type:_propTypes.default.string,value:_propTypes.default.string,leadingIcon:_propTypes.default.bool,dense:_propTypes.default.bool,prefix:_propTypes.default.bool,theme:_propTypes.default.object,focusedLabelColor:_propTypes.default.string,onLayout:_propTypes.default.func});var _default=(0,_withTheme.default)(TextFieldLabel);exports.default=_default;