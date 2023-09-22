import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BannerPedidos = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navegar al componente "Comida" cuando se presiona la imagen
    navigation.navigate('Comida');
  };
  return (
    <View>
      <Text style={styles.text}>Pedidos personalizados</Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require('../../assets/Banners/banner1.jpg')}
          style={styles.imagen}
        />
      </TouchableOpacity>
    </View>
  );
};
  export default BannerPedidos
  
  const styles = StyleSheet.create({
    text: {
      color: "#F5F3F4",
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 10,
    },
    imagen: {
          width: "100%", // Ancho de la imagen
          height: 150, // Altura de la imagen
          borderRadius: 6, // Borde de la imagen
        },
  
  
  })