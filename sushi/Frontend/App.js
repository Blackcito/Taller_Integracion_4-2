import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Grafico from "./componentes/Grafico_unit"
import Grafico2 from "./componentes/Grafico_Pedidos"
import Navbar from "./componentes/NavBar"
import Registro from "./componentes/Register"
import Login from "./componentes/Login"
import Graficos from "./componentes/Graficos_init"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navbar" component={Navbar} options={{headerShown: false}}/>
        <Stack.Screen name="Grafico" component={Grafico} />
        <Stack.Screen name="Grafico2" component={Grafico2} />
        <Stack.Screen name="Graficos" component={Graficos} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;