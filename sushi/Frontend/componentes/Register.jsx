import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { registroStyles } from './style';
import axios from 'axios';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = async () => {
    try {
      if (!nombre || !email || !password) {
        Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
        return;
      }

      // Validar la fortaleza de la contraseña (puedes agregar más lógica según tus requisitos)
      if (password.length < 6) {
        Alert.alert('Contraseña débil', 'La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      // Define los datos del usuario a registrar
      const nuevoUsuario = {
        user: nombre,
        email: email,
        pass: password,
      };

      // Realiza una solicitud HTTP POST al servidor
      const response = await axios.post('https://api-taller4-fswo.onrender.com/register', nuevoUsuario);

      // Procesa la respuesta del servidor aquí
      if (response.data && response.data.success) {
        // Registro exitoso, puedes realizar acciones adicionales, como redirigir a la pantalla de inicio de sesión
        console.log('Registro exitoso:', response.data.message);
      } else {
        // Muestra un mensaje de error específico del servidor en caso de registro fallido
        Alert.alert('Error', response.data.message || 'Error al registrar al usuario.');
      }
    } catch (error) {
      // Maneja errores de red u otros errores inesperados
      console.error('Error al registrar al usuario:', error);
      Alert.alert('Error', 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={registroStyles.container}>
      <Text style={registroStyles.titulo}>Registro de Usuario</Text>
      <TextInput
        style={registroStyles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
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
      <Button title="Registrar" onPress={registrarUsuario} />
    </View>
  );
}
