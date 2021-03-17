import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Logo from '../../assets/images/logo-sem-nome.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '50%',
    height: '50%',
  },
});

export default Home;
