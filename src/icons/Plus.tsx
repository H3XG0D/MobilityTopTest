import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const Plus = () => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Circle cx={20} cy={20} r={20} fill="#539348" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.25 27a.75.75 0 001.5 0v-6.25H27a.75.75 0 000-1.5h-6.25V13a.75.75 0 00-1.5 0v6.25H13a.75.75 0 000 1.5h6.25V27z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Plus;
