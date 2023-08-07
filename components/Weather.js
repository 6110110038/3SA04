import React, { useState } from "react";
import Forecast from "./Forecast";
import { ImageBackground, StyleSheet } from "react-native";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });

  return (
    <ImageBackground
      source={require("../bg.png")}
      style={(style = styles.backdrop)}
    >
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
