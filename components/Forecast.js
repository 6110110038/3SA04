import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icons from the library

export default function Forecast(props) {
  let icon = "question";


  if (props.main === "Clear") {
    icon = "sun-o";
  } else if (props.main === "Clouds") {
    icon = "cloud";
  } else if (props.main === "Rain") {
    icon = "tint";
  }

  return (
    <View style={styles.container}>
      {}
      <Icon name={icon} size={80} color="#333" />

      <View style={styles.weatherInfo}>
        <Text style={styles.weatherMain}>{props.main}</Text>
        <Text style={styles.weatherDescription}>{props.description}</Text>
        <View style={styles.tempContainer}>
          <Text style={styles.tempText}>Temperature: {props.temp} °C</Text>
        </View>
        <View style={styles.pressureContainer}>
          <Text style={styles.pressureText}>
            Pressure: {props.pressure / 1000} atm
          </Text>
        </View>
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
  weatherInfo: {
    marginTop: 10,
    alignItems: "center",
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
