import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
 const navigation = useNavigation(); //acesso do objeto navigation

  const handleRouteLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <Image source={require('../assets/images/backgroundbc.png')} style={styles.background} />
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <View style={styles.buttonTextContainer}>
      <Text style={styles.title}>Leia mais e se estresse menos com o nosso aplicativo. Compre de qualquer lugar e descubra novos títulos. Boas compras e boa leitura!</Text>
      <TouchableOpacity style={styles.button} onPress={(handleRouteLogin)}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => console.log('Button pressed')}>
        <Text style={styles.buttonText2}>Registre-se</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '65%',
    top: -70,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'regular',
    marginBottom: 63,
    paddingHorizontal: 25,
    textAlign: 'center',
    color: '#FF7E47',
  },
  button: {
    backgroundColor: '#FF5D17',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button2: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 16,
    color: '#FF7E47',
    fontWeight: 'bold',
  },
  buttonTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 500,
  }
});

export default Welcome;