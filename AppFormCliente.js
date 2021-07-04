import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; //importação do componente gráfico Barra de Menu
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; //import dos elementos de caixa de texto, view, caixa de entrada, botão e CSS
//O useState é um importação para trabalhar com mudanças de estado dos componentes gráficos.
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

//Será adicionado uma nova importação que tem o objetivo de armazenar os dados localmente, ou seja, em um banco local
import AsyncStorage from '@react-native-community/async-storage';
import Database from './Database';

//função:è um bloco de comandos que pode ser chamado em toda a minha programação.

//handle é uma manipulador para que eu possa acessar as informações e modifica-las da forma que eu desejar

export default function AppFormCliente({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  //a variavel acima é responsável por receber o campo identificador quando o usuario clica na opc de editar. os dados sqao recebidos pelo form do cliente 

  const [CPF, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');

  function handleDescriptionChange(nome, email, cidade) {
    //setCPF(CPF); deixar em comentário por enquanto
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
    backgroundColor: 'white',
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
    backgroundColor: '#D6FFFF',
  },

  titulo: {
    marginTop: 80,
    color: '#127054',
    fontSize: 24,
    fontWeight: 'bold',
  },

  titulo1: {
    color: '#199E76',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  caixatexto: {
    marginTop: 10, //muda o espaço entre as caixas
    height: 40, //muda a altura das caixas
    backgroundColor: 'white',
    borderRadius: 10, //muda a curva da borda
    paddingHorizontal: 120,
    fontSize: 20,
    alignContent:'right',
   // alignItems: 'stretch',
    borderColor: '#3B6659',
    borderWidth: 1,
  },

  botaocadastrar: {
    marginTop: 30,
    height: 60,
    backgroundColor: '#296969',
    borderRadius: 10,
    borderColor:'#127054',
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaolimpar: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#96B5B5',
    borderRadius: 10,
    borderColor:'#127054',
    borderWidth: 1,
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

