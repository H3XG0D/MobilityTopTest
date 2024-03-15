import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import RightArrow from '../icons/RightArrow';

import {Container} from './Container';
import {aligned} from '../utils/aligned';

interface AddressData {
  title: string;
  address: string;
}

const addressData: AddressData = {
  title: 'Адрес доставки:',
  address: 'г. Москва и МО, п. Воскресенс ... д. 10, кв. 20',
};

export const Address = () => {
  return (
    <Container>
      <TouchableOpacity style={styles.container}>
        <View style={styles.info}>
          <View>
            <Text style={styles.title}>{addressData.title}</Text>
          </View>

          <View>
            <Text style={styles.text}>{addressData.address}</Text>
          </View>
        </View>

        <View style={styles.icon}>
          <RightArrow />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: aligned(80),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
  },
  info: {
    flexWrap: 'wrap',
    gap: aligned(8),
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
  },
});
