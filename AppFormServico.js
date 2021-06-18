//import * as React from 'react';//Importação do React

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'; //importação do componente gráfico Barra de Menu
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; //Importação dos elementos de caixa de texto, View, Caixa de entrada e botão e CSS
//O useState é um importação para trabalhar com mudanças de estado dos componentes gráficos.
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//O 2º Passo da programação é criar uma função:è um bloco de comandos que pode ser chamado em toda a minha programação.

//handle é uma manipulador para que eu possa acessar as informações e modifica-las da forma que eu desejar

export default function AppFormCliente({ navigation }) {
  //Código 05/05/2021
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
    padding: 50, //muda o tamanho da caixa marrom escura
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
    marginTop: 10, //muda o espaço entre as caixas
    height: 40, //muda a altura das caixas
    backgroundColor: 'white',
    borderRadius: 20, //muda a curva da borda
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
