import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Container} from './Container';
import {aligned} from '../utils/aligned';
import {colors} from '../utils/colors';

import LogoSVG from '../icons/Logo';
import Bell from '../icons/Bell';
import MenuIcon from '../icons/MenuIcon';

const Menu = (): JSX.Element => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <View style={styles.company}>
            <TouchableOpacity>
              <LogoSVG />
            </TouchableOpacity>
            <View>
              <Text style={styles.slogan}>
                Доставим продукты{'\n'}и готовую еду
              </Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity>
              <Bell />
            </TouchableOpacity>
            <TouchableOpacity>
              <MenuIcon />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
      <View style={styles.line} />
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  company: {
    flexDirection: 'row',
    gap: aligned(15),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: aligned(25),
  },
  slogan: {
    fontSize: 15,
    color: colors.gray,
  },
  line: {
    height: aligned(0.5),
    backgroundColor: colors.gray,
    marginTop: aligned(8),
  },
});
