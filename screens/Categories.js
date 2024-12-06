import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 30,
  },
});

export default Categories;