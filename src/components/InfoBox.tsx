import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Motocycle from '../icons/Motocycle';
import Warning from '../icons/Warning';

import {Container} from './Container';
import {aligned} from '../utils/aligned';
import {colors} from '../utils/colors';

interface InfoBoxProps {
  variant?: 'warning' | 'delivery';
}

const warning = {
  icon: <Warning />,
  title: 'Не получится заказать',
  text: 'До минимального заказа 1000 руб.',
  backgroundColor: colors.warning,
};

const delivery = {
  icon: <Motocycle />,
  title: 'До бесплатной доставки 960 руб.',
  text: 'Стоимость курьерской доставки 149 руб.',
  backgroundColor: colors.white,
};

export const InfoBox = ({variant}: InfoBoxProps) => {
  const info =
    variant === 'warning' ? warning : variant === 'delivery' ? delivery : null;

  if (!info) {
    return null;
  }

  return (
    <Container>
      <View style={[styles.container, {backgroundColor: info.backgroundColor}]}>
        <View style={styles.icon}>
          <Text>{info.icon}</Text>
        </View>

        <View style={styles.info}>
          <View>
            <Text
              style={[
                variant === 'warning'
                  ? styles.warningTitle
                  : styles.deliveryTitle,
              ]}>
              {info.title}
            </Text>
          </View>

          <View>
            <Text
              style={[
                variant === 'warning'
                  ? styles.warningText
                  : styles.deliveryText,
              ]}>
              {info.text}
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  info: {
    flexWrap: 'wrap',
    gap: aligned(8),
  },
  warningTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.orange,
  },
  deliveryTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  warningText: {
    fontSize: 14,
    fontWeight: '500',
  },
  deliveryText: {
    fontSize: 14,
  },
});
