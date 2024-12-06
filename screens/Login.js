import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, TextInput, DefaultTheme, PaperProvider, IconButton, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5D17',
    background: '#FFF',
    surface: '#F9F9F9',
    text: '#FF7E47',
    placeholder: 'red',
    error: '#FF5D17',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigation = useNavigation();

  const handleRouteLogin = () => {
    navigation.navigate('HomeTab');
  };

  const validUsers = [
    { email: 'teste@teste.com', password: '123456' },
    { email: 'teste2@teste.com', password: '654321' },
  ];

  const handleLogin = () => {
    const user = validUsers.find(
      (user) => user.email === email.trim() && user.password === password.trim()
    );

    if (user) {
      handleRouteLogin();
    } else {
      setSnackbarMessage('Email ou senha incorretos!');
      setSnackbarVisible(true);
    }
  };

  const onDismissSnackbar = () => setSnackbarVisible(false);

  return (
    
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
      
        <IconButton
          icon="arrow-left" 
          iconColor="#FF7E47"
          size={30}
          onPress={() => navigation.navigate('Welcome')} 
          style={styles.backButton}
          marginBottom="20"
          left={0}
          top={-2}
        />

        <Text style={styles.header}>Login</Text>
        <Text style={styles.subHeader}>Preencha suas informações para prosseguir.</Text>
        
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          placeholderTextColor={'#FF7E47'}
          activeOutlineColor='#FF5D17'
          outlineColor='#FFF'
          textColor='#FF7E47'
        />

        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          placeholderTextColor={'#FF7E47'}
          activeOutlineColor='#FF5D17'
          outlineColor='#FFF'
          textColor='#FF7E47'
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color={'#FF5D17'}
            />
          }
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => console.log('Esqueceu a senha?')}>
          <Text style={styles.buttonText2}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Novo membro?{' '}
          <Text
            style={{ color: '#FF7E47', fontWeight: 'bold' }}
            onPress={() => console.log('Registre-se')}
          >
            Registre-se
          </Text>
        </Text>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
          duration={3000}
          action={{
            label: 'Fechar',
            onPress: () => onDismissSnackbar(),
            labelStyle: { color: '#FFFFFF', fontWeight: 'bold'},
          }}
          style={styles.snackbar}
        >
          {snackbarMessage}
        </Snackbar>
      
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FF7E47',
  },
  subHeader: {
    marginTop: 45,
    marginBottom: 75,
    textAlign: 'center',
    color: '#FF7E47',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 25,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#FF5D17',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  button2: {
    marginVertical: 20,
    marginBottom: 150,
    color: '#FF7E47',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#FF7E47',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    color: '#FF7E47',
  },
  snackbar: {
    backgroundColor: '#FF5D17', // Cor de fundo
    color: '#FFFFFF', // Cor do texto
    borderRadius: 8, // Bordas arredondadas
    position: 'absolute', // Para permitir centralização
    left: 12,
    right: 0,
    top: -550, // Ajuste a posição vertical
    alignSelf: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    width: '90%',
  },

});

export default Login;