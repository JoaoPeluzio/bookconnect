import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import booksData from '../db/books.json';
import book1Image from '../assets/images/book1.png';
import book2Image from '../assets/images/book2.png';
import book3Image from '../assets/images/book3.png';
import book4Image from '../assets/images/book4.png';
import book5Image from '../assets/images/book5.png';
import book6Image from '../assets/images/book6.png';

// Mapeamento de imagens
const images = {
  'book1.png': book1Image,
  'book2.png': book2Image,
  'book3.png': book3Image,
  'book4.png': book4Image,
  'book5.png': book5Image,
  'book6.png': book6Image,
};

// Mapeando os livros
const books = booksData.map(book => ({
  ...book,
  imageUrl: images[book.imageUrl], 
}));

const newReleases = books.filter(book => book.isNewReleases);
const bestPrices = books.filter(book => book.isNewReleases === false); 


const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      
      <Image source={book.imageUrl} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.genre}>{book.genre}</Text>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{book.price}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>12% OFF</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const BookCard2 = ({ book }) => {
  return (
    <View style={styles.card2}>
     
        <Image source={book.imageUrl} style={styles.image2} />
      
      <View style={styles.infoContainer2}>
        <Text style={styles.genre2}>{book.genre}</Text>
        <Text style={styles.title2}>{book.title}</Text>
        <Text style={styles.author2}>{book.author}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price2}>{book.price}</Text>
          <View style={styles.tag2}>
            <Text style={styles.tagText}>5% OFF</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Melhores ofertas</Text>

      <FlatList
        data={bestPrices}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      />
        <View style={styles.containerHeader}>
        <Text style={styles.header}>Últimos livros</Text>
        <Text style={styles.headerButton}>Ver mais</Text>
        </View>
      
        <FlatList
        data={newReleases}
        renderItem={({ item }) => <BookCard2 book={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 0,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
    color: '#FF7E47',
    marginTop: 0,
  },
  headerButton: {
    fontSize: 14,
    color: '#FF7E47',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FF7033',
    borderRadius: 10,
    marginRight: 10,
    padding: 0,
    width: 300, 
    height: 150,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: '34%',
    height: 150, 
    borderRadius: 5,
  },
  infoContainer: {
    marginLeft: 10,
    width: '75%',
  },
  genre: {
    marginTop: 10,
    color: '#FFF',
    fontWeight: 'regular',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#FFF',
  },
  author: {
    fontSize: 14,
    color: '#555',
    color: '#FFF',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 25,
  },
  tag: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FF6A00',
  },
  tagText: {
    color: '#FF6A00',
    fontWeight: 'bold',
  },
  carousel: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: '40%',
  },
  infoContainer2: {
    alignItems: 'row',
    width: '100%',
    height: '39.5%',
    padding: 10,
    backgroundColor: '#FF7033',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  genre2: {
    color: '#FFF',
    fontWeight: 'regular',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#FFF',
  },
  author2: {
    fontSize: 14,
    color: '#555',
    color: '#FFF',
  },
  price2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
    marginRight: 62,
  },
  tag2: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FF6A00',
    marginTop: 10,
  },
  image2: {
    width: '50%',
    height: 200, 
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 10,
    padding: 0,  
    width: 250, 
    height: 330,
    elevation: 3,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    
  },
  carousel2: {
    paddingHorizontal: 20,
    height: '40%',
    marginBottom: 55,
  },
});

export default Home;