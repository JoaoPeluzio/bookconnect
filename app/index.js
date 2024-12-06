import React, { useEffect } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import StackNavigator from '../navigation/StackNavigator';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

// Configurando o tema com fontes para aplicacao global
const theme = {
  ...DefaultTheme,
  fonts: {
    regular: { fontFamily: 'Inter_400Regular' },
    medium: { fontFamily: 'Inter_600SemiBold' },
    bold: { fontFamily: 'Inter_700Bold' },
    default: "Inter_400Regular",
  },
};

export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  

  useEffect(() => {
    const prepare = async () => {
      // Manter a tela de splash visível enquanto os recursos estão sendo carregados
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        // Ocultar a tela de splash quando os recursos estiverem prontos
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Retorna null enquanto as fontes estão sendo carregadas
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </NavigationIndependentTree>
    </PaperProvider>
  );
}