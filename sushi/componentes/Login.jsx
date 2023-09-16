import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { registroStyles } from './style'; // Importa el archivo de estilo

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const iniciarSesion = () => {
    // Agrega la lógica para iniciar sesión aquí
    console.log('Email:', email);
    console.log('Contraseña:', password);
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
      <Button title="Iniciar Sesión" onPress={iniciarSesion} />
    </View>
  );
}
