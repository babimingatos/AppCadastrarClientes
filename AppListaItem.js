import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AppListaItem() {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#D2B48C',
    marginTop: 30,
    width: '100%',
  },

  containerbotao: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottonColor: 'black',
    paddingBottom: 10,
    marginTop: 10,
  },

  deletebotao: {
    marginLeft: 10,
    height: 60,
    width: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    fontSize: 12,
    alignItems: 'center',
  },

  editarbotao: {
    marginLeft: 10,
    height: 60,
    width: 30,
    backgroundColor: 'yellow',
    borderRadius: 10,
    fontSize: 12,
    alignItems: 'center',
  },

  textobotao: {
    fontSize: 20,
    color: 'black',
  },
});