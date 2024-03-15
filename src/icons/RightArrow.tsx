import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrow = () => {
  return (
    <Svg width={15} height={16} viewBox="0 0 15 16" fill="none">
      <Path
        d="M6 3.5L10 8l-4 4.5"
        stroke="#030303"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RightArrow;
