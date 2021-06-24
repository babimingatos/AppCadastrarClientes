import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import AppItem from './AppListaItem';
import Database from './Database';

export default function AppLista({route, navigation}){
const[items, setItems] = useState([]);
useEffect(() => {
  Database.getItems().then(items => setItems(items));
},
[route]);

return(
  <View style={styles.container}>

  <StatusBar style="light"/>
  <Text style={styles.titulo} >Lista de Clientes</Text>

  <ScrollView style={styles.scrollcontainer} contentContainerStyle={styles.itemscontainer}>
  {
    items.map(item => {
      return <AppItem key={item.id} id={item.id} item={item.CPF, item.nome, item.email, item.cidade}/>
    })}

 </ScrollView>

  </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollcontainer: {
    flex: 1,
    width: '90%',
  },

  titulo: {
    color:'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },

  itemscontainer: {
    flex:1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems:'stretch',
    backgroundColor: 'white',
  },
});

