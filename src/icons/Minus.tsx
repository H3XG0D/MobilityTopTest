import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const Minus = () => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Circle cx={20} cy={20} r={20} fill="#539348" />
      <Path
        d="M13 20h14"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Minus;
