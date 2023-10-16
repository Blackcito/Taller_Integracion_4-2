import { View, Text } from "react-native";
import React from "react";
import { Header, HeaderTitle } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Comida from "./Comida";
import Beber from "./Beber";
import Graficos_init from "./Graficos_init";
import Graficos_unit from "./Grafico_unit"
import Cuenta from "./Cuenta";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./Inicio";
import { Ionicons } from "@expo/vector-icons"; // Puedes utilizar un conjunto de iconos, como Ionicons, para los iconos

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
  return (
    <NavigationContainer>
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

        <Tab.Screen
          name="Graficos"
          component={Graficos_init}
          options={{
            headerTitle: "Graficos",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />

        <Tab.Screen
          name="Grafico"
          component={Graficos_unit}
          options={{
            headerTitle: "Grafico",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />
        <Tab.Screen
          name="Usuario"
          component={Cuenta}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
