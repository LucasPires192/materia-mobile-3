import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>Lista de Animes</Text>
      </View>
      <FlatList
        data={animes}
        renderItem={({item}) => 
          <View key={item.id} style={styles.card}>
              <Image style={styles.capa}source={item.img}/>
              <Text style={styles.descricao}>Nome: {item.nome}</Text>
              <Text style={styles.descricao}>Estilo: {item.estilo}</Text>
              <Text style={styles.descricao}>Ano de lançamento: {item.ano}</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2691E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#bc6120ff',
    width: '100%',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 600,
  },
  card: {
    borderColor: '#a3541cff',
    borderWidth: 1,
    background: '#de7021ff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  capa: {
    width: 250,
    height: 350,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
  },
})

const animes = [
  {
    id: '0',
    nome: 'Naruto Classico',
    estilo: 'Shounen',
    ano: '2002',
    img: require('./assets/img/capa-naruto.jpg'),
  },
  {
    id: '1',
    nome: 'Naruto Shippuden',
    estilo: 'Shounen',
    ano: '2007',
    img: require('./assets/img/capa-naruto-shippuden.jpg'),
  },
  {
    id: '2',
    nome: 'Fullmetal Alchemist',
    estilo: 'Shounen',
    ano: '2009',
    img: require('./assets/img/capa-fullmetal-alchemsit.jpg'),
  },
  {
    id:'3',
    nome: 'Haikyuu',
    estilo: 'Esportes',
    ano: '2014',
    img: require('./assets/img/capa-haikyu.jpg'),
  },
  {
    id: '4',
    nome: 'One Piece',
    estilo: 'Shounen',
    ano: '1999',
    img: require('./assets/img/capa-one-piece.jpg'),
  }
];