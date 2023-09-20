import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

export default function HomePage() {
  const navigation = useNavigation();

  // Función para redirigir a la página de registro al hacer clic en "¿Quieres registrarte?"
  const redirectToRegister = () => {
    navigation.navigate('Register'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  };
  const redirectToComida = () => {
    navigation.navigate('Comida'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  };
  const redirectToBeber = () => {
    navigation.navigate('Beber'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  };
  // const redirectToPostre = () => {
  //   navigation.navigate('Postre'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  // };
  const redirectToLogin = () => {
    navigation.navigate('Login'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con el texto */}
      <Text>SUSHIPLETO</Text>
  
      {/* Sección de Categorías */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category} onPress={redirectToComida}>
          <Text>Comida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={redirectToBeber}>
          <Text>Bebestibles</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.category} onPress={redirectToPostre}>
          <Text>Postres</Text>
        </TouchableOpacity> */}
      </View>
  
      {/* Botón "¿Quieres registrarte?" */}
      <TouchableOpacity onPress={redirectToLogin}>
        <Text>Debes iniciar sesion para pedir</Text>
      </TouchableOpacity>
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
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain', // Ajusta el tamaño del logo según el contenedor
  },
  categories: {
    flexDirection: 'row',
    marginTop: 20,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
  registerButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  },
});
