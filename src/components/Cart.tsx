import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Heart from '../icons/Heart';
import Plus from '../icons/Plus';
import Minus from '../icons/Minus';
import CartTrash from '../icons/CartTrash';

import {Container} from './Container';
import {aligned} from '../utils/aligned';
import {colors} from '../utils/colors';

interface Product {
  title: string;
  promotionPrice: number | null;
  price: number | null;
  quantity: number | null;
  type: 'apiece' | 'kg';
  kgPrice?: number;
}

const products: Product[] = [
  {
    title: 'Сок яблоко-вишня Сады Придонья, 1 л',
    promotionPrice: 99.9,
    price: 120,
    quantity: 1,
    type: 'apiece',
  },
  {
    title: 'Хлеб Ржано-пшеничный бездрожжевой (нарезка), 430 г',
    promotionPrice: null,
    price: 67.9,
    quantity: 1,
    type: 'apiece',
  },
  {
    title: 'Суп-пюре с тунцом, 100 г',
    promotionPrice: null,
    price: null,
    quantity: null,
    type: 'apiece',
  },
  {
    title: 'Мандарины Турция, 1 кг',
    promotionPrice: null,
    price: 99.45,
    quantity: 0.5,
    kgPrice: 198.9,
    type: 'kg',
  },
];

const images: {[key: string]: any} = {
  'Сок яблоко-вишня Сады Придонья, 1 л': require('../assets/images/juice.png'),
  'Хлеб Ржано-пшеничный бездрожжевой (нарезка), 430 г': require('../assets/images/bread.png'),
  'Суп-пюре с тунцом, 100 г': require('../assets/images/soup.png'),
  'Мандарины Турция, 1 кг': require('../assets/images/orange.png'),
};

const renderItem = ({item}: {item: Product}) => (
  <Container>
    <View
      style={[
        styles.productContainer,
        item.quantity !== null && styles.productContainerWithQuantity,
      ]}>
      <Image source={images[item.title]} style={styles.image} />
      <View style={styles.productContent}>
        <View style={styles.productTitle}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity>
              <Heart />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.trashContainer,
                item.quantity !== null ? {top: aligned(80)} : null,
              ]}>
              <CartTrash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.priceContainer}>
          {item.price === null &&
          item.promotionPrice === null &&
          item.quantity === null ? (
            <Text style={styles.notAvailable}>Нет в наличии</Text>
          ) : (
            <>
              <Text
                style={[
                  styles.price,
                  item.promotionPrice ? styles.promotionPrice : null,
                ]}>
                {item.promotionPrice !== null
                  ? `${item.promotionPrice.toFixed(2)} ₽`
                  : `${item.price?.toFixed(2)} ₽`}
              </Text>
              {item.promotionPrice && (
                <Text style={styles.crossedPrice}>
                  {item.price?.toFixed(2)} ₽
                </Text>
              )}
            </>
          )}
        </View>
        <View>
          {item.quantity !== null && (
            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                <Plus />
              </TouchableOpacity>
              <View style={styles.quantity}>
                <Text style={styles.quantityText}>
                  {item.quantity
                    ? `${item.quantity} ${item.type === 'kg' ? 'кг' : 'шт.'}`
                    : ''}
                </Text>
              </View>
              <TouchableOpacity>
                <Minus />
              </TouchableOpacity>
            </View>
          )}
          <View>
            {item.type === 'kg' && (
              <Text style={styles.typeKg}>кг = {item.kgPrice} ₽</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  </Container>
);

const Cart = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    height: aligned(120),
    marginTop: aligned(20),

    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  productContainerWithQuantity: {
    height: aligned(170),
  },
  image: {
    width: aligned(80),
    height: aligned(80),
    marginRight: aligned(10),
  },
  productContent: {
    flex: 1,
  },
  productTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: aligned(10),
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  promotionPrice: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
  },
  crossedPrice: {
    color: colors.gray,
    textDecorationLine: 'line-through',

    marginLeft: 10,
  },
  notAvailable: {
    color: colors.red,
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: aligned(10),
    gap: aligned(5),
  },
  quantity: {
    width: aligned(80),
    height: aligned(40),

    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.white,

    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontWeight: '500',
  },
  trashButtonContainer: {
    marginLeft: 'auto',
    padding: aligned(5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  trashContainer: {
    width: aligned(40),
    height: aligned(40),
    top: aligned(50),

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.white,
  },
  typeKg: {
    fontSize: 11,
    marginTop: aligned(5),
    marginLeft: aligned(55),
    color: colors.gray,
  },
});

export default Cart;
