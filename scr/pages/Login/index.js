import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Logo from '../../assets/images/logo.png';

import TextButton from '../../components/TextButton';

const Home = ({ navigation }) => {
  const logIn = () => {
    navigation.push('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={{ width: '90%' }}>
        <View style={styles.containerInput}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="Insira seu e-mail" />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha" />
        </View>
        <View style={styles.containerRecovery}>
          <TouchableOpacity onPress={() => navigation.push('RecoveryAccount')}>
            <Text style={styles.recoveryAccountLabel}>Recuperar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => logIn()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TextButton
        text="Cria Conta"
        onPress={() => navigation.push('CreateAccount')}
      />
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
    width: 240,
    height: 130,
  },

  button: {
    backgroundColor: '#418FBF',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },

  buttonTextSecondary: {
    marginTop: 30,
    color: '#418FBF',
    fontSize: 16,
  },

  containerInput: {
    width: '100%',
    marginTop: 30,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    width: '100%',
    borderRadius: 20,
    paddingLeft: 20,
  },

  label: {
    color: '#6E6E6E',
    fontSize: 14,

    marginBottom: 10,
  },

  recoveryAccountLabel: {
    color: '#91C9A6',
    fontWeight: 'bold',
    fontSize: 14,
  },

  containerRecovery: {
    alignItems: 'flex-end',
    width: '100%',
  },
});

export default Home;
