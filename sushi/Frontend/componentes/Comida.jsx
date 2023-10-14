import { View, Text, Image, FlatList, StyleSheet, ScrollView, Button, Modal, TouchableHighlight, Alert  } from 'react-native';
import React, { useState } from 'react';



const menu = [
    { name: 'Sashimi', description: 'Finas rebanadas de salmón crudo.', image: 'https://imgs.elpais.com.uy/dims4/default/0d9c74e/2147483647/strip/true/crop/1600x1066+0+0/resize/1440x959!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F31%2Fa4%2F5f07912340c98569428a1220046a%2Fjesus-moreno-1.JPG', price: '$10.000'  },
    { name: 'Nigiri de Atún', description: 'Trozos de atún sobre arroz sazonado.', image:'https://tofuu.getjusto.com/orioneat-local/resized2/bKJdE2YHk8ek7py9N-1200-1200.webp', price: '$10.000'  },
    { name: 'Maki de Aguacate', description: 'Rollos de sushi rellenos de aguacate.', image: 'https://www.crushpixel.com/static13/preview2/stock-photo-maki-sushi-roll-with-avocado-1279288.jpg' , price: '$10.000'  },
    { name: 'California Roll', description: 'Rollos con cangrejo, aguacate y pepino.' ,image:'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sushi-empanizado/main-header.jpg', price: '$10.000'  },
  ];

  const menuBebidas = [
    { name: 'Fanta', description: 'Refresco de naranja.', image: 'https://www.distribuidorasantiago.cl/wp-content/uploads/2019/05/124-BEBIDA-FANTA-LATA.jpg', price: '$2.000' },
    { name: 'Sprite', description: 'Refresco de limón.', image: 'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/11707408/154.jpg?1648115941', price: '$2.000' },
    { name: 'Coca-Cola', description: 'Refresco de cola.', image: 'https://storage.googleapis.com/liquidos-public/products/large/1113040.png', price: '$2.000' },
    { name: 'Pepsi', description: 'Refresco de cola.', image: 'https://tofuu.getjusto.com/orioneat-prod-resized/zvWBJS9x385AjpvE2-1200-1200.webp', price: '$2.000' },
  ];

  function MenuItem({ name, description, image, price, onAddToCart }) {
    const handleAddToCart = () => {
      onAddToCart({ name, price });
      Alert.alert(
        'Agregado al carrito',
        `${name}\nPrecio: ${price}`,
        [
          { text: 'OK', style: 'cancel', color: 'red' },
        ]
      );
    };
      return (
        <View style={styles.menuItemContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {name}
            </Text>
            <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
              {description}
            </Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Button title="Agregar" color="#A4161A" onPress={handleAddToCart} />
        </View>
      );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#161A1D',
    },
    menuItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white', // Fondo blanco para cada tarjeta de plato
      borderRadius: 10,
      padding: 16,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageContainer: {
      marginRight: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    detailsContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      color: '#777',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
    },
    cartButton: {
        backgroundColor: '#A4161A',
        padding: 10,
        margin: 10,
        borderRadius: 10,
      },
      cartButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: '80%',
      },
      cartItemContainer: {
        position: 'relative', // Añadir posición relativa
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        padding: 1,
      },
      cartItemImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        backgroundColor: 'gray'
      },
      cartItemDetails: {
        marginLeft: 0,
      },
      cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      cartItemPrice: {
        fontSize: 16,
      },
      cartTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)', // Fondo oscurecido semitransparente
  },
  goToPayButton: {
    backgroundColor: '#A4161A',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  goToPayButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 2,
    backgroundColor: '#A4161A',
    color: 'white',
    padding: 6,
    borderRadius: 7,
  },
  sectionHeader: {
    backgroundColor: '#A4161A',
    alignItems: 'center', // Centrar elementos horizontalmente
    padding: 10,
  },

  sectionTitle: {
    color: 'white', // Letra blanca
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function Comida() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);
  
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
  
    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const calculateTotal = () => {
      const total = cart.reduce((sum, item) => sum + parseFloat(item.price.substring(1).replace(/[^0-9.-]+/g, '')), 0);
      const formattedTotal = `$${total.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
      return formattedTotal;
    };
  
    return (
        <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Platos</Text>
          </View>
          <FlatList
            data={menu}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <MenuItem name={item.name} description={item.description} image={item.image} price={item.price} onAddToCart={addToCart} />
            )}
          />
        </View>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Bebidas</Text>
          </View>
          <FlatList
            data={menuBebidas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <MenuItem name={item.name} description={item.description} image={item.image} price={item.price} onAddToCart={addToCart} />
            )}
          />
        </View>
      </ScrollView>
    
          <TouchableHighlight
            style={styles.cartButton}
            onPress={() => setCartVisible(true)}
          >
            <Text style={styles.cartButtonText}>Ver Carrito ({cart.length})</Text>
          </TouchableHighlight>
    
          <Modal
            animationType="slide"
            transparent={true}
            visible={isCartVisible}
            onRequestClose={() => {
              setCartVisible(false);
            }}
          >
            <View style={styles.overlay}>
              <View style={styles.modalContainer}>
                <View style={[styles.modalContent, { maxHeight: 600 }]}>
                  <Text style={styles.cartTitle}>Carrito de Compra</Text>
                  <ScrollView>
                    {cart.map((item, index) => (
                      <View key={index} style={styles.cartItemContainer}>
                      <Image source={{ uri: item.image }} style={styles.cartItemImage} /> 
                        <View style={styles.cartItemDetails}>
                          <Text style={styles.cartItemName}>{item.name}</Text>
                          <Text style={styles.cartItemPrice}>{item.price}</Text>
                          <TouchableHighlight
                            style={styles.deleteButton}
                            onPress={() => removeFromCart(index)}
                          >
                            <Text style={{ color: 'white' }}>X</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                  <Text style={styles.cartTotal}>Total a Pagar: {calculateTotal()}</Text>
                  <TouchableHighlight
                    style={styles.goToPayButton}
                    onPress={() => {
                      setCartVisible(false);
                      // Implementa la lógica para ir a la pantalla de pago
                    }}
                  >
                    <Text style={styles.goToPayButtonText}>Ir a Pagar</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.cartButton}
                    onPress={() => {
                      setCartVisible(false);
                    }}
                  >
                    <Text style={styles.cartButtonText}>Cerrar Carrito</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      );
    }