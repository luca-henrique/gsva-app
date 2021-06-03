import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Logo from '../../../assets/icons/arrow-left.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={{alignItems: 'flex-start', width: '100%'}}>
          <View style={{marginLeft: '5%', marginTop: '1%'}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={Logo} style={{width: 20, height: 20}} />
              <Text style={{marginLeft: 5, fontSize: 18, fontWeight: 'bold'}}>
                Voltar
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                marginTop: 10,
                color: '#000',
              }}>
              Criar Conta
            </Text>

            <View style={{marginTop: 10, width: '85%'}}>
              <Text style={{color: '#6E6E6E', fontSize: 18}}>
                Finalize o seu cadastro, preencha as informações a baixo.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input} placeholder="Insira seu cpf" />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha" />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha" />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha" />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Confirme Sua Senha</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Login')}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  containerInput: {
    width: '90%',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: '#BDBDBD',
    width: '100%',
  },

  label: {
    color: '#6E6E6E',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#418FBF',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Home;
