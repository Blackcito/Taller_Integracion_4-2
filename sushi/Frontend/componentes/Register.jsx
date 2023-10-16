import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { registroStyles } from './style';// Importa el archivo de estilo

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = async () => {
    try {
      // Define los datos del usuario a registrar
      const nuevoUsuario = {
        user: nombre,
        email: email,
        pass: password, // Debes asegurarte de que coincide con la clave en tu servidor
      };
  
      // Realiza una solicitud HTTP POST al servidor
      const response = await axios.post('https://api-taller4-fswo.onrender.com/register', nuevoUsuario);
  
      // Procesa la respuesta del servidor aquí
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Maneja errores aquí
      console.error('Error al registrar al usuario:', error);
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