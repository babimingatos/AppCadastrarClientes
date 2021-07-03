import AsyncStorage from '@react-native-community/async-storage';
async function salvarItem(
  AppListaItem,
  id
) {
  AppListaItem.id = id ? id : new Date().getTime();
  const salvar = await getItems;
    
  if (id) {
    const index = await salvar.findIndex((item) => item.id === id);
    salvar[index] = AppListaItem;
  } else {
    salvar.push(AppListaItem);
    return AsyncStorage.setItem('items', JSON.stringify(salvar));
  }
}

function getItems() {
  return AsyncStorage.getItem('items').then((response) => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}
async function getItem(id) {
  const salvar = await getItems();
  return salvar.find((item) => item.id === id);
}
async function deleteItem(id) {
  let salvar = await getItem();

  const index = await salvar.findIndex((item) => item.id === id);
  salvar.splice(index, 1);
  return AsyncStorage.setItem('items', JSON.stringify(salvar));
}

module.exports = {
   salvarItem,
  getItems,
  getItem,
  deleteItem,
};
