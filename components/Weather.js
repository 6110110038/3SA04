import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import { Text, ImageBackground, StyleSheet, View } from "react-native";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
    pressure: 0
  });

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=8cb7f9896520ec946afc99687045938b`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
            pressure: json.main.pressure,

          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  return (
    <ImageBackground source={require("../bg.png")} style={styles.backdrop}>
      <View style={styles.background}>
        <View style={styles.zipCodecontainer}>
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
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  zipCodecontainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginRight: 5,
  },
  zipCode: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
});
