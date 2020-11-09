import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#304352", "#d7d2cc"],
  },
  Thunderstorm: {
    iconName: "poo-storm",
    gradient: ["#29323c", "#485563"],
  },
  Drizzle: {
    iconName: "cloud-sun-rain",
    gradient: ["#abbaab", "#ffffff"],
  },
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Snow: {
    iconName: "snowman",
    gradient: ["#CFDEF3", "#E0EAFC"],
  },
  Clear: {
    iconName: "sun",
    gradient: ["#2980B9", "#6DD5FA"],
  },
  Mist: {
    iconName: "cloud-download-alt",
    gradient: ["#2c3e50", "#bdc3c7"],
  },
  Smoke: {
    iconName: "industry",
    gradient: ["#808080", "#3fada8"],
  },
  Haze: {
    iconName: "city",
    gradient: ["#E684AE", "#79CBCA"],
  },
  Dust: {
    iconName: "industry",
    gradient: ["#BA8B02", "#181818"],
  },
  Fog: {
    iconName: "soundcloud",
    gradient: ["#292E49", "#536976"],
  },
  Sand: {
    iconName: "wind",
    gradient: ["#ACBB78", "#F7F8F8"],
  },
  Squall: {
    iconName: "cloud-moon-rain",
    gradient: ["#7F7FD5", "#91EAE4"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions["Clouds"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <FontAwesome5
          name={weatherOptions["Clouds"].iconName}
          size={120}
          color="white"
        />
        <Text style={styles.temp}>{`${temp}º`}</Text>
      </View>
      <View style={styles.halfcontainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Squall",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4ea1d3",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    marginTop: 15,
    fontSize: 38,
    color: "white",
    fontWeight: "bold",
  },
});
