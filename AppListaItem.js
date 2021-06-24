import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Database from './Database';

async function handleEditarPress(){
  const item = await Database.getItem(props.id);
  props.navigation.navigate("AppFormCliente", item);
}

function handleDeletePress(){
  Alert.alert(
    "Atenção","Você deseja realmente excluir esta informação?",
    [
      {
      text:"Não",
      onPress:() => console.log("cancelado"),
      style: "cancel"
    },
    {
      text:"Sim", onPress:() => {
        Database.deleteItem(props.id).then(response => props.navigation.navigate("AppLista", {id: props.id}))
      }
    }
    ],
    {cancelable:false}
  );
}

export default function AppListaItem(props){

  return(
      
<View style={styles.container}>
  <Text style={styles.textItem}>{props.item}</Text>
    <View style={styles.containerbotao}>
      <TouchableOpacity style={styles.deletebotao}>
      <Text style={styles.textobotao}>Excluir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editarbotao}>
      <Text style={styles.textobotao}>Editar</Text>
      </TouchableOpacity>
    </View>
</View>
 );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#D2B48C',
    marginTop:30,
    width:'100%',
  },

  containerbotao: {
    flexDirection:'row-reverse',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottonColor:'black',
    paddingBottom: 10,
    marginTop:10,
  },

  deletebotao:{
    marginLeft:10,
    height: 60,
    width: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    fontSize:12,
    alignItems:'center',
  },



  editarbotao:{
    marginLeft:10,
    height: 60,
    width: 30,
    backgroundColor: 'yellow',
    borderRadius: 10,
    fontSize:12,
    alignItems:'center',
  },

  textobotao: {
    fontSize:20,
    color:'black'
  },

textItem:{
  fontSize:16,
}

});

