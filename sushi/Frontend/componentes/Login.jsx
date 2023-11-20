import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { registroStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const navigation = useNavigation();
  const RedirectToRegister = () => {
    // Navega a la pantalla de gráfica en grande cuando se hace clic
    navigation.navigate("Registro");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const logearUsuario = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
        return;
      }

      const user = {
        email: email,
        pass: password,
      };

      const response = await axios.post('https://api-taller4-fswo.onrender.com/login', user);

      // Verificar si la respuesta del servidor indica un inicio de sesión exitoso
      if (response.status === 200) {

        const { message, token, usuario } = response.data;
        
        await AsyncStorage.setItem('token', response.data.token);


    
        if (usuario.admin === true) {
          // El valor de verify es true, puedes realizar acciones adicionales
          navigation.navigate('Graficos');
          console.log('Verificación admin');
        } else {
          // El valor de verify no es true, maneja la lógica correspondiente
          navigation.navigate('Navbar');
          console.log('Verificación no admin');
        }

        
        console.log('Inicio de sesión exitoso:', response.data.message);

      } else {
        // Mostrar mensaje de error del servidor
        Alert.alert('Error', response.data.message || 'Error al iniciar sesión.');
      }
    } catch (error) {
      // Manejar errores de red u otros errores inesperados
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={registroStyles.container}>
      <Text style={registroStyles.titulo}>Inicio de Sesión</Text>
      <TextInput
        style={registroStyles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={registroStyles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={logearUsuario} />
      <View>
        <Text onPress={RedirectToRegister}>¿Aún no tienes cuenta?, ¡Regístrate aquí!</Text>
      </View>
        
    </View>
  );
}
