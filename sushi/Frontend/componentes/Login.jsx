import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { registroStyles } from './style'; // Importa el archivo de estilo
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const RedirectToRegister = () => {
    navigation.navigate('Register'); // Asegúrate de que 'Register' sea el nombre de la pantalla de registro en tu aplicación
  };

  const logearUsuario = async () => {
    try {
      // Define los datos del usuario a registrar
      const user = {
        email: email,
        pass: password, // Debes asegurarte de que coincide con la clave en tu servidor
      };
  
      // Realiza una solicitud HTTP POST al servidor
      const response = await axios.post('http://192.168.1.147:3000/login', user);
  
      // Procesa la respuesta del servidor aquí
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Maneja errores aquí
      console.error('Error al iniciar sesioón:', error);
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
      <Text onPress={RedirectToRegister}>¿Aún no tienes cuenta?, ¡Regístrate aquí!</Text>
    </View>
  );
}
