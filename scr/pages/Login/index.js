import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Logo from '../../assets/images/logo-sem-nome.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />

      <View style={{width: '90%'}}>
        <View style={styles.containerInput}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="Insira seu e-mail" />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira sua senha"
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.buttonTextSecondary}>Cria Conta</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: '#66C4D9',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonTextSecondary: {
    color: '#66C4D9',
    fontSize: 16,
    fontWeight: 'bold',
  },

  containerInput: {
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
  },

  input: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    width: '100%',
  },

  label: {
    color: '#91C9A6',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
