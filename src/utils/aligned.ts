import {PixelRatio, Dimensions} from 'react-native';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const PT = WINDOW_WIDTH < 360 ? WINDOW_WIDTH / 360 : 1;

export const aligned = (pt: number) => {
  return PixelRatio.roundToNearestPixel(PT * pt);
};
