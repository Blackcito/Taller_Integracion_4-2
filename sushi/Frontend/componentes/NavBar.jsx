
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Comida from "./Comida";
import Beber from "./Beber";
import Graficos_init from "./Graficos_init";
import Cuenta from "./Cuenta";
import HomePage from "./Inicio";
import { Ionicons } from "@expo/vector-icons"; // Puedes utilizar un conjunto de iconos, como Ionicons, para los iconos
import Login from "./Login";

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
          name="Usuario"
          component={Login}
          options={{
            headerTitle: "Iniciar Sesión",
            headerTitleAlign: "center", // Centra el título en el encabezado
          }}
        />
      </Tab.Navigator>
  );
}
