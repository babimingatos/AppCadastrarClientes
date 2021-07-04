import React, { useState, useEffect } from 'react';
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

import AsyncStorage from '@react-native-community/async-storage';
import Database from './Database';

export default function AppFormCliente({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [CPF, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');

  function handleDescriptionChange(nome, email, cidade) {
    //setCPF(CPF);
    setNome(nome);
    setEmail(email);
    setCidade(cidade);
  }

  function handleNumericChange(CPF) {
    setCPF(CPF);
  }

  async function handleButtonPress() {
    const listaItem = { nome, email, cidade, CPF: parseInt(CPF) };
    Database.salvarItem(listaItem, id).then((response) =>
      navigation.navigate('AppLista', listaItem)
    );
  }

 
  useEffect(() => {
    if (!route.params) return;
    setCPF(route.params.CPF.toString);
    setNome(route.params.nome);
    setEmail(route.params.email);
    setCidade(route.params.cidade);
  }, [route]);

  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CADASTRO DE CLIENTES</Text>
      <Text style={styles.titulo1}>*Preencha todos os dados</Text>

      <View style={styles.container2}>
        <TextInput
          style={styles.caixatexto}
          placeholder="Preencha o CPF"
          keyboardType={'numeric'}
          clearButtonMode="always"
          onChangeText={handleNumericChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Preencha o Nome"
          clearButtonMode="always"
          onChangeText={handleDescriptionChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Preencha o Email"
          clearButtonMode="always"
          onChangeText={handleDescriptionChange}
        />

        <TextInput
          style={styles.caixatexto}
          placeholder="Preencha o Cidade"
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
    backgroundColor: '#D2B48C',
    alignItems: 'center',
  },

  titulo: {
    marginTop: 30,
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },

  titulo1: {
    color: '#FF0000',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  container2: {
    flex: 1,
    marginTop: 30,
    weight: '95%',
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },

  caixatexto: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    alignItems: 'stretch',
    borderColor: 'black',
    borderWidth: 3,
  },

  botaocadastrar: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaolimpar: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'yellow',
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
