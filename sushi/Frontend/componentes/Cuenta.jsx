import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Cuenta() {
  const navigation = useNavigation();

  useEffect(() => {
    // Aquí podría haber lógica adicional si es necesario
  }, []);

  const RedirectToLogin = () => {
    navigation.navigate("Login");
  };

  const RedirectToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View>
      <Text>Haz clic en "Cuenta" para iniciar sesión</Text>
      <TouchableOpacity onPress={RedirectToLogin}>
        <Text>Ir a Inicio de Sesión</Text>
      </TouchableOpacity>

      {/* Agrega un enlace o botón para ir a la pantalla de registro */}
      <TouchableOpacity onPress={RedirectToRegister}>
        <Text>¿Aún no tienes cuenta?, ¡Regístrate aquí!</Text>
      </TouchableOpacity>
    </View>
  );
}
