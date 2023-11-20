import React, { useState, useEffect } from "react";
import {View,Text,TouchableOpacity,ActivityIndicator,StyleSheet  } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {styles_grafico_init} from './style'
import { LineChart,BarChart  } from "react-native-gifted-charts";

export default function Grafico2() {
  const [lineData2, setLineData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-taller4-fswo.onrender.com/api/getPedidos")
      .then((response) => {
        
        const data = response.data;
        // Crear directamente lineData utilizando response.data
        const lineData2 = data.map((registro) => ({
          label: registro.id_usuario,
          value: parseFloat(registro.total_compras, 10),
          
        }));
        
        // Asignar lineData a tus estados
        // Establecer lineData en el estado

        setLineData2(lineData2);
        console.log(lineData2)
      })
      .catch((error) => {
        console.error("Error al obtener datos de ventas:", error);
      });
  }, []);

  if (lineData2 === 0) {
    // Aquí puedes mostrar un indicador de carga o un mensaje
    return (
      <View style={styles_grafico_init.chartContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Una vez que lineData tiene datos, puedes renderizar el gráfico
  return (
<View styles={styles.graf}>

          <Text style={styles_grafico_init.titulos}>Ventas 1</Text>
          <BarChart   initialSpacing={5} height={500}   data={lineData2}  />
    </View>
  );
}


const styles = StyleSheet.create({
  graf: {
    backgroundColor: "rgba(93, 169, 81, 0.3)",
    width: 200,
    height: 100,

  },
});