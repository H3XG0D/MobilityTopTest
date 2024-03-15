import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import Back from '../icons/Back';

import {Container} from './Container';
import {aligned} from '../utils/aligned';

interface HeaderProps {
  title: string;
  onBack: boolean;
  action?: boolean;
  icon?: React.ReactNode;
}

const Header = ({title = '', onBack, action, icon}: HeaderProps) => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onBack}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => action}>{icon}</TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
  },
  container: {
    marginBottom: aligned(20),
  },
  iconContainer: {
    marginLeft: 'auto',
  },
});

export default Header;
