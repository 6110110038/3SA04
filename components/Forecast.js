import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cityContainer}>
        <Text style={styles.cityText}>City: {props.name}</Text>
      </View>
      <Text style={styles.weatherMain}>{props.main}</Text>
      <Text style={styles.weatherDescription}>Weather: {props.description}</Text>
      <View style={styles.tempContainer}>
        <Text style={styles.tempText}>Temperature: {props.temp} °C</Text>
      </View>
      <View style={styles.pressureContainer}>
        <Text style={styles.pressureText}>Pressure: {props.pressure / 1000} atm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  cityContainer: {
    marginBottom: 10,
  },
  cityText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  weatherMain: {
    fontSize: 24,
    marginBottom: 5,
    color: "#333",
  },
  weatherDescription: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
  tempContainer: {
    marginBottom: 5,
  },
  tempText: {
    fontSize: 18,
    color: "#333",
  },
  pressureContainer: {
    marginBottom: 10,
  },
  pressureText: {
    fontSize: 16,
    color: "#777",
  },
});
