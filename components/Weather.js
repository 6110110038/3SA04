import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import { Text, ImageBackground, StyleSheet, View } from "react-native";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
  });

  useEffect(() => {
    console.log("props.zipCode:", props.zipCode);

    if (props.zipCode) {
      console.log(`fetching data with zipCode = ${props.zipCode}`);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=8cb7f9896520ec946afc99687045938b`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
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
    height: "100%"
  },
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  zipCodecontainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginRight: 5,
  },
  zipCode: {
    fontSize: 20,
    color: "white",
  },
});
