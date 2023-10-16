import React, { useState, useEffect } from "react";
import {View,Text,TouchableOpacity,ActivityIndicator  } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {styles_grafico_init} from './style'
import { LineChart } from "react-native-gifted-charts";
import Grafico from "./Grafico_unit"



export default function Graficos_grupales() {

  const navigation = useNavigation();
  const RedirectToGrafico = () => {
    // Navega a la pantalla de gráfica en grande cuando se hace clic
    navigation.navigate(Grafico);
  };
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-taller4-fswo.onrender.com/api/ventas-por-dia")
      .then((response) => {
        const data = response.data;
        // Crear directamente lineData utilizando response.data
        const lineData = data.map((registro) => ({
          label: registro.diasemana,
          value: parseInt(registro.cantidadventas, 10),
        }));

        // Asignar lineData a tus estados
        // Establecer lineData en el estado
        setLineData(lineData);
      })
      .catch((error) => {
        console.error("Error al obtener datos de ventas:", error);
      });
  }, []);

  if (lineData.length === 0) {
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

        <TouchableOpacity onPress={RedirectToGrafico}>
          <Text style={styles_grafico_init.titulos}>Ventas 2</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData}  />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles_grafico_init.rightCharts}>
        <View style={styles_grafico_init.chartContainer}>

        <TouchableOpacity onPress={RedirectToGrafico}>
          <Text style={styles_grafico_init.titulos}>Ventas 3</Text>
          <LineChart  initialSpacing={5} width={120} height={250} data={lineData}  />
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


    