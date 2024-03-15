import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Ticket from '../icons/Ticket';

import {Container} from './Container';
import {aligned} from '../utils/aligned';
import {colors} from '../utils/colors';

interface PromocodeData {
  promocode: number;
}

const promocodeData: PromocodeData = {
  promocode: 8977344,
};

export const Promocode = () => {
  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.title}>
          Бонусная карта: №{promocodeData.promocode}
        </Text>
      </View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.info}>
          <View style={styles.icon}>
            <Ticket />
          </View>
          <View>
            <Text style={styles.text}>Ввести промокод</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: aligned(46),

    flexDirection: 'row',
    marginTop: aligned(12),
    marginBottom: aligned(20),

    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.white,
  },
  content: {
    marginTop: aligned(25),
  },
  icon: {
    marginHorizontal: aligned(18),
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
  },
});
