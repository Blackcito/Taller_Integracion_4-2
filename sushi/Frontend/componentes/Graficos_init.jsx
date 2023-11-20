import React, { useState, useEffect } from "react";
import {View,Text,TouchableOpacity,ActivityIndicator  } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {styles_grafico_init} from './style'
import { LineChart } from "react-native-gifted-charts";

export default function Graficos() {

  const navigation = useNavigation();
  const RedirectToGrafico = () => {
    // Navega a la pantalla de gráfica en grande cuando se hace clic
    navigation.navigate("Grafico");
  };

  const RedirectToGrafico2 = () => {
    // Navega a la pantalla de gráfica en grande cuando se hace clic
    navigation.navigate("Grafico2");
  };
  const [lineData, setLineData] = useState([]);
const [lineData2, setLineData2] = useState([]);

useEffect(() => {
  axios
    .get("https://api-taller4-fswo.onrender.com/api/ventas-por-dia")
    .then((response) => {
      const data = response.data;
      const formattedData = data.map((registro) => ({
        label: registro.diainicial,
        value: parseInt(registro.sumaventas, 10),
      }));

      setLineData(formattedData);
    })
    .catch((error) => {
      console.error("Error al obtener datos de ventas:", error);
    });
}, []);

useEffect(() => {
  axios
    .get("https://api-taller4-fswo.onrender.com/api/getPedidos")
    .then((response) => {
      const data = response.data;
      const formattedData = data.map((pedidos) => ({
        label: pedidos.id_usuario,
        value: parseFloat(pedidos.total_compras),
      }));

      setLineData2(formattedData);
    })
    .catch((error) => {
      console.error("Error al obtener datos de pedidos:", error);
    });
}, []);

if (lineData.length === 0 || lineData2.length === 0) {
  // Aquí puedes mostrar un indicador de carga o un mensaje
  return (
    <View style={styles_grafico_init.chartContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
  // Una vez que lineData tiene datos, puedes renderizar el gráfico
  return (
<View style={styles_grafico_init.container}>
      <View style={styles_grafico_init.leftCharts}>
        <View style={styles_grafico_init.chartContainer}>
        <TouchableOpacity onPress={RedirectToGrafico}>
          <Text style={styles_grafico_init.titulos}>Ventas 1</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData}  />
          </TouchableOpacity>
        </View>
        <View style={styles_grafico_init.chartContainer}>

        <TouchableOpacity onPress={RedirectToGrafico2}>
          <Text style={styles_grafico_init.titulos}>Ventas 2</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData2}  />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles_grafico_init.rightCharts}>
        <View style={styles_grafico_init.chartContainer}>

        <TouchableOpacity onPress={RedirectToGrafico2}>
          <Text style={styles_grafico_init.titulos}>Ventas 3</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData2}  />
          </TouchableOpacity>
        </View>
        <View style={styles_grafico_init.chartContainer}>

        <TouchableOpacity onPress={RedirectToGrafico}>
          <Text style={styles_grafico_init.titulos}>Ventas 4</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData}  />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


    