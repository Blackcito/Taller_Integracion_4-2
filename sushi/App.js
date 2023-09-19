import React from 'react';
<<<<<<< Updated upstream
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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './componentes/Inicio';
import RegisterPage from './componentes/Register'; // Importa la página de registro
import Comida from './componentes/Comida';
import Beber from './componentes/Beber';
import Postre from './componentes/Postre';
import Login from './componentes/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Comida" component={Comida}/>
        <Stack.Screen name="Beber" component={Beber} />
        <Stack.Screen name="Postre" component={Postre}/>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> Stashed changes
