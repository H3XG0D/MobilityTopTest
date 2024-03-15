import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Container} from './Container';
import {aligned} from '../utils/aligned';
import {colors} from '../utils/colors';

interface OrderItem {
  label: string;
  value: string;
  promocode?: boolean;
  total?: boolean;
}

const orderData: OrderItem[] = [
  {label: '2 товара', value: '1040 ₽'},
  {label: 'Доставка', value: '149 ₽'},
  {label: 'Промокод', value: '-400 ₽', promocode: true},
  {label: 'Итого', value: '1189 ₽', total: true},
];

export const Order = () => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <View style={styles.column}>
            {orderData.map(({label, promocode, total}, index) => (
              <Text
                key={index}
                style={[
                  styles.label,
                  total && styles.totalLabel,
                  promocode && styles.promocode,
                ]}>
                {label}
              </Text>
            ))}
          </View>
          <View style={[styles.column, styles.secondColumn]}>
            {orderData.map(({value, total}, index) => (
              <Text
                key={index}
                style={[
                  styles.value,
                  total && styles.totalValue,
                  value === '-400 ₽' && styles.negativeValue,
                ]}>
                {value}
              </Text>
            ))}
          </View>
        </View>
      </Container>
      <View style={styles.orderContainer}>
        <TouchableOpacity style={styles.orderButton} disabled>
          <Text style={styles.orderButtonText}>Оформить заказ</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: aligned(20),
    marginBottom: aligned(20),
  },
  column: {
    flex: 1,
  },
  secondColumn: {
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 15,
    marginBottom: aligned(10),
    color: colors.gray,
  },
  value: {
    fontSize: 15,
    marginBottom: aligned(10),
  },
  totalLabel: {
    marginTop: aligned(20),
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
  totalValue: {
    marginTop: aligned(20),
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
  promocode: {
    color: colors.gray,
  },
  negativeValue: {
    color: colors.red,
  },
  orderContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: aligned(80),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  orderButton: {
    width: aligned(360),
    height: aligned(60),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});
