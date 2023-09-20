import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Comida from './Comida';
import Beber from './Beber';
import Cuenta from './Cuenta';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Inicio';

export default function NavBar() {
  const Nav = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Inicio" component={HomePage} />
        <Nav.Screen name="Comida" component={Comida} />
        <Nav.Screen name="Beber" component={Beber}/>
        <Nav.Screen name="Usuario" component={Cuenta}  options={{headerShown: false}}/>
      </Nav.Navigator> 
    </NavigationContainer>
  );
};
