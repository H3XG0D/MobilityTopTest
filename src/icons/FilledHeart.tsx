import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilledHeart = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79 17.378a30.415 30.415 0 01-5.282-3.918 9.965 9.965 0 01-2.514-3.82c-.944-2.795.159-5.995 3.244-6.942 2.13-.658 3.396.454 4.762 1.431 1.367-.976 2.632-2.083 4.756-1.431 3.085.947 4.195 4.147 3.252 6.943a9.966 9.966 0 01-2.515 3.819 30.416 30.416 0 01-5.282 3.918l-.206.122-.214-.122z"
        fill="#DF0614"
      />
    </Svg>
  );
};

export default FilledHeart;
