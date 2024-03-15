import React from 'react';

import Header from '../components/Header';
import {InfoBox} from '../components/InfoBox';
import {ScrollView, StyleSheet} from 'react-native';
import {Address} from '../components/Address';
import {Promocode} from '../components/Promocode';
import {Order} from '../components/Order';

import Cart from '../components/Cart';

import {aligned} from '../utils/aligned';
import Trash from '../icons/Trash';

const CartScreen = (): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Корзина" onBack={true} icon={<Trash />} />
      <InfoBox variant="warning" />
      <Address />
      <InfoBox variant="delivery" />
      <Promocode />
      <Cart />
      <Order />
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: aligned(20),
    flexGrow: 1,
    paddingBottom: aligned(80),
  },
});
