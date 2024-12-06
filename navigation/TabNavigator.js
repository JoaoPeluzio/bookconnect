import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//import de paginas
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Cart from '../screens/Cart';
import Account from '../screens/Account';


const Tab = createBottomTabNavigator();
const backgroundImage = require('../assets/images/focused.png');

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categorias') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Carrinho') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Conta') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <SafeAreaView style={styles.iconContainer}>
            
              {focused && (
                <Image source={backgroundImage} style={styles.backgroundImage} />
              )}
              <Icon 
              name={iconName} 
              size={30} 
              color={focused ? '#FFFFFF' : '#FF5D17'} />
            </SafeAreaView>
          );
        },
        
        tabBarActiveTintColor: '#FF5D17',
        tabBarInactiveTintColor: '#FF7E47',
        tabBarStyle: {
        position: 'absolute',
        top: 725,  
        backgroundColor: '#FFF',
        paddingBottom: 0,
        paddingTop: 10,
        borderTopColor: '#F7F8FA',
        borderTopWidth: 1,
        height: 85,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 8,
        },
       
        
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Tab.Screen name="Categorias" component={Categories} options={{ headerShown: false}} />
      <Tab.Screen name="Carrinho" component={Cart} options={{ headerShown: false}}/>
      <Tab.Screen name="Conta" component={Account} options={{ headerShown: false}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: -27,
    width: 80,
    height: 87,
    resizeMode: 'contain',
  },
});

export default TabNavigator;