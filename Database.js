import AsyncStorage from '@react-native-community/async-storage';
//função para salvar os arquivos que serão posteriormente vizualisados atraves do método getItems
/*funcao q vai salvar o item e me mostrar, vai salvar no banco local*/

async function salvarItem(
  AppListaItem,
  id
  //o id é AI,
) {
  AppListaItem.id = id ? id : new Date().getTime();
  const salvar = await getItems;
  //const vai salvar e guardar o getitem ();
  //se o id for gerado e for comparado.
  //o cadastro e a criação tem a mesma forma, a diferencas estão no insert e do updade(verifica se existe o ID ou nao)

  //A função getItems é responsável por trazer todas as informações cadastrados no banco local

  if (id) {
    const index = await salvar.findIndex((item) => item.id === id);
    salvar[index] = AppListaItem;
  } else {
    salvar.push(AppListaItem);
    return AsyncStorage.setItem('items', JSON.stringify(salvar));
    //o items vem do appLista.js
    //quem faz a troca de infos é o JSON
  }
}
//função getitems é responsavel por trazer todas as infos cadastradas no meu banco local
function getItems() {
  return AsyncStorage.getItem('items').then((response) => {
    if (response) return Promise.resolve(JSON.parse(response));
    //promise trata dados assincronos, dados que carregam antes do usuario ver
    else return Promise.resolve([]);
    //ou irá trazer dados ou não
  });
}
async function getItem(id) {
  const salvar = await getItems();
  return salvar.find((item) => item.id === id);
  //===compara se é igual e o tipo (string it)
  //compara o id e vê se é int com int
}
async function deleteItem(id) {
  let salvar = await getItem();

  const index = await salvar.findIndex((item) => item.id === id);
  //tudo q vem de index vem em indices
  salvar.splice(index, 1);
  return AsyncStorage.setItem('items', JSON.stringify(salvar));
}

module.exports = {
  //chama as funções
  //é utilizado para gerar uma ligação com as fuções, chamando-as externamente
  salvarItem,
  getItems,
  getItem,
  deleteItem,
};
