import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EntradaValores = ({ drinks, setDrink, buscarDrinkApi }) => {
  return (
    <View>
      <Text style={styles.titulo}>Buscar os ingredientes do Drink</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe aqui o drink que deseja saber o ingrediente"
        value={drinks}
        onChangeText={text => setDrink(text)}
        keyboardType="default"
      />
      <Button
        title="Buscar drink"
        onPress={buscarDrinkApi}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    marginBottom: 15, 
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});

export default EntradaValores;
