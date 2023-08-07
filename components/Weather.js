import React, { useState } from "react";
import Forecast from "./Forecast";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
  });

  return (
    <ImageBackground source={require("../bg.png")} style={styles.backdrop}>
      <View style={styles.background}>
        <View style={styles.alignment}>
          <Text style={styles.title}>Zip code is </Text>
          <Text style={styles.zipCode}>{props.zipCode}</Text>
        </View>
        <Forecast {...forecastInfo} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  background: {
    backgroundColor: "rgba(192,192,192,0.3)",
    height: "60%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: 'white',
    lineHeight: 50
  },
  zipCode: {
    fontSize: 32,
    color: 'white',
    lineHeight: 50
  },
  alignment: {
    flexDirection: 'row'
  }
});
