import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Login from './Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registro from './Register';


export default function Cuenta(){
    const nav = createBottomTabNavigator();
    return(
        <nav.Navigator >
            <nav.Screen name="Login" component={Login} />
            <nav.Screen name='Register' component={Registro} />
        </nav.Navigator>
    );
};