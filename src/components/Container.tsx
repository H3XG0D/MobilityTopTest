import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {aligned} from '../utils/aligned';

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const Container = ({children, style}: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: aligned(16),
    width: '100%',
  },
});
