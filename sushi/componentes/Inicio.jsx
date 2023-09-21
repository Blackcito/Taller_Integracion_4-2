import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación
import BannerMenu from './Banners/BannerMenu';
import BannerPedidos from './Banners/BannerPedidos';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{
      backgroundColor: '#161A1D',
      flex: 1,
    }}>
      <View style={{
              margin: 10,
          }}>
         <TouchableOpacity style={styles.category} onPress={redirectToComida}></TouchableOpacity>
         <BannerMenu/>
         </View>

      <View style={{
        margin: 10,
    }}>
      <TouchableOpacity style={styles.category} onPress={redirectToBeber}></TouchableOpacity>
      <BannerPedidos/>
      </View>         
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain', // Ajusta el tamaño del logo según el contenedor
  },
});
