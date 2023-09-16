import React from 'react';
import { View, StyleSheet } from 'react-native';
import Registro from './componentes/register';
import Login from './componentes/login';
export default function App() {
  return (
    <View style={styles.container}>
      <Registro />
        
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
