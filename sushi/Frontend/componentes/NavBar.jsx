
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Comida from "./Comida";
import Beber from "./Beber";
import Graficos_init from "./Graficos_init";
import Cuenta from "./Cuenta";
import HomePage from "./Inicio";
import { Ionicons } from "@expo/vector-icons"; // Puedes utilizar un conjunto de iconos, como Ionicons, para los iconos
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from "./Login";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

export default function NavBar() {
  const Tab = createBottomTabNavigator();
  const icons = {
    Inicio: "home",
    Comida: "fast-food-outline",
    Beber: "md-beer",
    Usuario: "person",
    Graficos: "bar-chart-sharp",
    Grafico: "bar-chart"
  };

  // Estado para almacenar si el usuario tiene permisos de administrador
  const [isAdmin, setIsAdmin] = useState(false);

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      // Verifica si hay un token almacenado
      const storedToken = await AsyncStorage.getItem('token');
      setHasToken(!!storedToken); // Actualiza el estado con true si hay un token, false si no hay
    };

    checkToken();
  }, []); // Se ejecuta solo al montar el componente

  if (!hasToken) {
    // Si no hay un token, muestra el componente de inicio de sesión
    return <Login setHasToken={setHasToken} />;
  }




  const LogoutButton = () => {
    const navigation = useNavigation();
  
    const handleLogout = async () => {
      // Lógica para realizar el logout, por ejemplo, limpiar el token de AsyncStorage
      await AsyncStorage.removeItem('token');
  
      // Redirigir a la pantalla de inicio de sesión o a la pantalla que desees
      navigation.navigate('Login');
    };
  
    return (
      <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
        <Text style={{ color: '#F5F3F4' }}>Logout</Text>
      </TouchableOpacity>
    );
  };

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            const iconName = icons[route.name];
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: "#0B090A" }, // Fondo negro para la barra de navegación
          headerStyle: { backgroundColor: "#A4161A" },
          tabBarInactiveTintColor: "#F5F3F4", // Color del texto inactivo
          tabBarActiveTintColor: "#A4161A", // Color del texto activo
          headerTitleStyle: {
            color: "#F5F3F4", // Color del texto en el encabezado
          },
          headerRight: () => <LogoutButton />,
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomePage}
          options={{
            headerTitle: "Inicio",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />

        <Tab.Screen
          name="Comida"
          component={Comida}
          options={{
            headerTitle: "Comida",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />

        <Tab.Screen
          name="Beber"
          component={Beber}
          options={{
            headerTitle: "Bebidas",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />



      </Tab.Navigator>
  );
}
