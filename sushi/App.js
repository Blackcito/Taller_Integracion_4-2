import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterPage from './componentes/Register'; // Importa la página de registro
import Comida from './componentes/Comida';
import Beber from './componentes/Beber';
import Login from './componentes/Login';
import NavBar from './componentes/NavBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomePage} />
    //     <Stack.Screen name="Register" component={RegisterPage} />
    //     <Stack.Screen name="Comida" component={Comida}/>
    //     <Stack.Screen name="Beber" component={Beber} />
    //     <Stack.Screen name="Postre" component={Postre}/>
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <NavBar />
  );
}
