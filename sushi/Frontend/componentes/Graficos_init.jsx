import React, { useState, useEffect } from "react";
import { StyleSheet, View,Text,TouchableOpacity  } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


export default function Grafico() {

  const navigation = useNavigation();
  const RedirectToGrafico = () => {
    // Navega a la pantalla de gráfica en grande cuando se hace clic
    navigation.navigate("Graficos");
  };
  const [diaSemana, setDiaSemana] = useState([]);
  const [CantidadVentas, setCantidadVentas] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.88:3000/api/ventas-por-dia")
      .then((response) => {
        const data = response.data;
        setDiaSemana(data.map((row) => row.diasemana));
        setCantidadVentas(data.map((row) => parseInt(row.cantidadventas))); // Convierte a número
      })
      .catch((error) => {
        console.error("Error al obtener datos de ventas:", error);
      });
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez al montar el componente

  const option = {
    grid: {
      left: "10%", // Espacio izquierdo de 3 pixeles
      right: "10%", // Espacio derecho de 3 pixeles
      top: "10%", // Espacio superior de 3 pixeles
      bottom: "10%", // Espacio inferior de 3 pixeles
    },
    xAxis: {
      type: "category",
      data: diaSemana, // Usa los datos obtenidos del estado
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: CantidadVentas, // Usa los datos obtenidos del estado
        type: "line",
      },
    ],
  };

  return (
    <View style={styles2.container}>
      <View style={styles2.leftCharts}>
        <View style={styles2.chartContainer}>
        <TouchableOpacity onPress={RedirectToGrafico}>
          <Text style={styles2.titulos}>Ventas 1</Text>
          </TouchableOpacity>
          <ECharts option={option} backgroundColor="rgba(93, 169, 81, 0.3)" />
          
        </View>
        <View style={styles2.chartContainer}>
          <Text style={styles2.titulos}>Ventas 2</Text>
          <ECharts option={option} backgroundColor="rgba(93, 169, 81, 0.3)" />
        </View>
      </View>
      <View style={styles2.rightCharts}>
        <View style={styles2.chartContainer}>
          <Text style={styles2.titulos}>Ventas 3</Text>
          <ECharts option={option} backgroundColor="rgba(93, 169, 81, 0.3)" />
        </View>
        <View style={styles2.chartContainer}>
          <Text style={styles2.titulos}>Ventas 4</Text>
          <ECharts option={option} backgroundColor="rgba(93, 169, 81, 0.3)" />
        </View>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#red",
    flexDirection: "row", // Alinea los elementos en una fila
  },
  titulos: {
    textAlign: "center",
    backgroundColor: "rgba(93, 169, 81, 0.3)",
  },
  leftCharts: {
    flex: 1, // Divide el espacio restante en partes iguales
    flexDirection: "column", // Alinea los elementos en columnas
  },
  rightCharts: {
    flex: 1, // Divide el espacio restante en partes iguales
    flexDirection: "column", // Alinea los elementos en columnas
  },
  chartContainer: {
    flex: 1, // Ocupa el espacio disponible
    margin: 10, // Margen entre las gráficas
  },
});