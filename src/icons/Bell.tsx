import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Bell = () => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Path
        d="M12.02 4.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 17.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06v-2.89c0-3.3-2.7-6-6-6z"
        stroke="#030303"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M13.87 5.2a6.754 6.754 0 00-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26z"
        stroke="#030303"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.02 21.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 01-.88-2.12"
        stroke="#030303"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Circle
        cx={20.5}
        cy={5.5}
        r={4.5}
        fill="#DF0614"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default Bell;
