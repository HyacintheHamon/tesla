import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.601 13.075"  {...props}>
      <G>
	    <Path fill="#FFFFFF" d="M9.972,13.075c0.9,0,1.629-0.729,1.629-1.629V1.629c0-0.9-0.729-1.629-1.629-1.629H5.434
		c-0.9,0-1.629,0.729-1.629,1.629v1.374c0,0.183,0.148,0.33,0.331,0.33h0.725c0.182,0,0.33-0.148,0.33-0.33V1.716
		c0-0.183,0.148-0.33,0.331-0.33h4.365c0.182,0,0.33,0.148,0.33,0.33v9.643c0,0.183-0.148,0.33-0.33,0.33H5.52
		c-0.182,0-0.331-0.148-0.331-0.33v-1.287c0-0.183-0.148-0.33-0.33-0.33H4.135c-0.182,0-0.331,0.148-0.331,0.33v1.374
		c0,0.9,0.729,1.629,1.629,1.629"/>
	   <Path fill="#FFFFFF" d="M2.476,7.231h6c0.234,0,0.424-0.19,0.424-0.424V6.269c0-0.234-0.19-0.424-0.424-0.424h-6
		l0.858-0.858c0.166-0.166,0.166-0.434,0-0.6l-0.38-0.38c-0.166-0.166-0.434-0.166-0.6,0L0.124,6.238
		c-0.166,0.166-0.166,0.434,0,0.6l2.231,2.231c0.166,0.166,0.434,0.166,0.6,0l0.38-0.38c0.166-0.166,0.166-0.434,0-0.6L2.476,7.231z
		"/>
      </G>
    </Svg> 
  </View>
);

export default SvgComponent;