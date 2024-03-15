import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 21h22M1 5h22M1 13h22"
        stroke="#030303"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default MenuIcon;
