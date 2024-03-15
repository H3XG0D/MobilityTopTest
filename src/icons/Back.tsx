import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Back = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 6l-7 6 7 6M22 12H2.5"
        stroke="#030303"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Back;
