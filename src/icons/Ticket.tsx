import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Ticket = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 12.5A2.5 2.5 0 0122 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 010 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 01-2.5-2.5zM9 14.75l6-6"
        stroke="#DF0614"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.995 14.75h.009M8.995 9.25h.008"
        stroke="#DF0614"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Ticket;
