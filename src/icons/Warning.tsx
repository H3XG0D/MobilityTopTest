import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Warning = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 8.667V13m0 2.333h.011M2 12L12 2l10 10-10 10L2 12z"
        stroke="#F28313"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Warning;
