import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Logo from '../../assets/images/logo-nome-baixo.png';

const Home = ({navigation}) => {
  const countdown = () => {
    var timer = setTimeout(function () {
      navigation.push('Login');
    }, 5000);
  };

  return (
    <View style={styles.container}>
      {countdown()}
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
});

export default Home;
