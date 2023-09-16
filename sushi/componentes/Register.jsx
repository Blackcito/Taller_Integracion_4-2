import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { registroStyles } from './style';// Importa el archivo de estilo

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = () => {
    // Agrega la lógica para registrar al usuario aquí
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
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