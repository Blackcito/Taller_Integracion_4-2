import { StyleSheet } from 'react-native';

export const registroStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export const styles_grafico_init = StyleSheet.create({
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
    backgroundColor: "rgba(93, 169, 81, 0.3)",
    flex: 1, // Divide el espacio restante en partes iguales
    flexDirection: "column", // Alinea los elementos en columnas
  },
  rightCharts: {
    backgroundColor: "rgba(93, 169, 81, 0.3)",
    flex: 1, // Divide el espacio restante en partes iguales
    flexDirection: "column", // Alinea los elementos en columnas
  },
  chartContainer: {
    flex: 1, // Ocupa el espacio disponible
    margin: 10, // Margen entre las gráficas
  },
});