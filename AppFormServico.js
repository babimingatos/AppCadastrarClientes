import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; 
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function AppFormCliente({ navigation }) {
  const [CPF, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');

  function handleDescriptionChange(CPF, nome, email, cidade) {
    setCPF(CPF);
    setNome(nome);
    setEmail(email);
    setCidade(cidade);
  }

  function handleNumericChange(CPF) {
    setCPF(CPF);
  }

  function handleButtonPress() {
    console.log({ id: new Date().getTime(), CPF, nome, email, cidade });
    navigation.navigate('AppLista');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CADASTRO DE CLIENTES</Text>
      <Text style={styles.titulo1}>*Preencha todos os dados</Text>

      <View style={styles.container2}>
        <TextInput
          style={styles.caixatexto}
          placeholder="CPF"
          keyboardType={'numeric'}
          clearButtonMode="always"
          onChangeText={handleNumericChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Nome"
          clearButtonMode="always"
          onChangeText={handleDescriptionChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Email"
          clearButtonMode="always"
          onChangeText={handleDescriptionChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Cidade"
          clearButtonMode="always"
          onChangeText={handleDescriptionChange}
        />

        <TouchableOpacity
          style={styles.botaocadastrar}
          onPress={handleButtonPress}>
          <Text style={styles.textBotao}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaolimpar}>
          <Text style={styles.textBotao}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#230F3D',
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    marginTop: 70,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    weight: '35%',
    padding: 50, 
    paddingBottom:400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#9066C8',
  },

  titulo: {
    marginTop: 80,
    color: '#27EAE0',
    fontSize: 24,
    fontWeight: 'bold',
  },

  titulo1: {
    color: '#604CD5',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  caixatexto: {
    marginTop: 10, 
    height: 40, 
    backgroundColor: 'white',
    borderRadius: 20, 
    paddingHorizontal: 100,
    fontSize: 20,

    alignItems: 'stretch',
    borderColor: 'black',
    borderWidth: 1,
  },

  botaocadastrar: {
    marginTop: 30,
    height: 60,
    backgroundColor: '#AADDD0',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaolimpar: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#53388F',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
