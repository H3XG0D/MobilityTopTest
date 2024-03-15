import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CartTrash = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M17 7H7c-.552 0-1 .522-1 1.166V17.5C6 19.433 7.343 21 9 21h6c.796 0 1.559-.369 2.121-1.025.563-.657.879-1.547.879-2.475V8.166C18 7.522 17.552 7 17 7z"
        stroke="#828282"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 7h16"
        stroke="#828282"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M8 4a1 1 0 011-1h6a1 1 0 011 1v3H8V4z"
        stroke="#828282"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke="#828282"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CartTrash;
