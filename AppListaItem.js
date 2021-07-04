import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; 
//Será adicionado uma nova importação que tem o objetivo de armazenar os dados localmente, ou seja, em um banco local
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';
import Database from './Database';

//função:è um bloco de comandos que pode ser chamado em toda a minha programação.

//handle é uma manipulador para que eu possa acessar as informações e modifica-las da forma que eu desejar

//criação da ação dos botoes

//para editar e excluir ter açao é necessário os manipuladores Handle para pegar o id do dado selecionado e comparar com o banco para finalmente gerar a açaõ de editar e excluir

//editar: os dados retornarão para o formulario

//excluir: é necessario confirmar com o suer atravez de duas opçoes de botão
export default function AppFormCliente({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
 //Esta variável é responsável por receber o campo identificador quando o usuário clica na opção de editar, os dados são recebidos pelo formulário do cliente.
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

  /*/async function handleButtonPress(){
  console.log({id: new Date().getTime(),CPF, nome, email, cidade});
  navigation.navigate("AppLista");

  const listaItem = {id: new Date().getTime(),CPF:parseInt(CPF), nome, email, cidade};
  let salvarItem = [];

//Variável constante que sincroniza as informações para serem aramazenadas localmente.
  const resposta = await AsyncStorage.getItem('items');
//O if esta verificando através da variável resposta se houve uma sincronização das informações com o banco e em seguida indicando a variável que está com todas as informações nela (salvarItem) e recebendo o ojeto JSON que é responsável pela troca/envio de informações
if(resposta) salvarItem = JSON.parse(resposta);
//A variável salvarItem puxa as informações da variável listaItem
  salvarItem.push(listaItem);

//Nesta linha abaixo, os dados serão sincronizados com o banco realizando o cadastro, lembrando que o metodo acessor set é utilizado para que seja possível ter as suas informações modificadas no banco.
  await AsyncStorage.setItem('items' , JSON.stringify(salvarItem));
  navigation.navigate("AppLista", listaItem);
}*/

  //A função abaixo é responsável por ao clicar no botão cadastrar acionar o metódo criado no arquivo Database para que seja possível chamar a função salvarItem
  async function handleButtonPress() {
    const listaItem = { nome, email, cidade, CPF: parseInt(CPF) };
    Database.salvarItem(listaItem, id).then((response) =>
      navigation.navigate('AppLista', listaItem)
    );
  }

  //neste código abaixo o useEffect está passando para as rotas como parâmetro as variáveis nome, email, cidade e CPF para serem alteradas através do metódo acessor Set e poderem levar as informações para a base de dados e/ou devolver para outra tela que no caso é AppLista
  useEffect(() => {
    if (!route.params) return;
    setCPF(route.params.CPF.toString);
    setNome(route.params.nome);
    setEmail(route.params.email);
    setCidade(route.params.cidade);
  }, [route]);

  //Esta abaixo será para cadastrar as informações localmente ao pressionar o botão.
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
