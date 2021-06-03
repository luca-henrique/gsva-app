import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = () => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Insira seu e-mail" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: '90%',
    marginTop: '10%',
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
});

export default Input;
