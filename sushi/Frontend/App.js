import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Grafico from "./componentes/Grafico_unit"
import Navbar from "./componentes/NavBar"
import Registro from "./componentes/Register"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navbar" component={Navbar} options={{headerShown: false}}/>
        <Stack.Screen name="Grafico" component={Grafico} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;