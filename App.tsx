import React from 'react';
import {SafeAreaView} from 'react-native';

import Menu from './src/components/Menu';
import CartScreen from './src/screens/cart';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Menu />
      <CartScreen />
    </SafeAreaView>
  );
};

export default App;
