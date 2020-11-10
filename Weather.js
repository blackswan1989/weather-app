import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#304352", "#d7d2cc"],
    title: "Cloudy",
    subtitle: "cloudy it's not that bad. enjoy your depress",
  },
  Thunderstorm: {
    iconName: "poo-storm",
    gradient: ["#29323c", "#485563"],
    title: "Storm",
    subtitle: "You would be better not to go outside",
  },
  Drizzle: {
    iconName: "cloud-sun-rain",
    gradient: ["#abbaab", "#ffffff"],
    title: "Drizzle",
    subtitle: "You're sleeping now anyway, aren't you?",
  },
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Rainy Day",
    subtitle: "Make sure to pack an umbrella",
  },
  Snow: {
    iconName: "snowman",
    gradient: ["#CFDEF3", "#E0EAFC"],
    title: "Snowy",
    subtitle: "Winter is comming.",
  },
  Clear: {
    iconName: "sun",
    gradient: ["#2BC0E4", "#d8e9ef"],
    title: "Clear Day",
    subtitle: "Go outside right now!",
  },
  Mist: {
    iconName: "soundcloud",
    gradient: ["#2c3e50", "#808080"],
    title: "Misty",
    subtitle: "Drive safe. If you have a car",
  },
  Smoke: {
    iconName: "industry",
    gradient: ["#808080", "#3fada8"],
    title: "Smoke",
    subtitle: "Where the hell is this coming from?",
  },
  Haze: {
    iconName: "cloud-moon-rain",
    gradient: ["#E684AE", "#79CBCA"],
    title: "Haze",
    subtitle: "Have you ever seen a haze?",
  },
  Dust: {
    iconName: "industry",
    gradient: ["#BA8B02", "#181818"],
    title: "Dusty",
    subtitle: "I think the Earth is sick Because of China",
  },
  Fog: {
    iconName: "soundcloud",
    gradient: ["#525252", "#DAD299"],
    title: "Fog",
    subtitle: "Drive safe. If you have a car",
  },
  Sand: {
    iconName: "wind",
    gradient: ["#ACBB78", "#F7F8F8"],
    title: "Sand",
    subtitle: "The sand is blowing. Talk to China",
  },
  Squall: {
    iconName: "wind",
    gradient: ["#525252", "#3d72b4"],
    title: "Squall",
    subtitle: "Watch out for the Squall",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainerTop}>
        <Text style={styles.name}>{name}</Text>
        <FontAwesome5
          style={styles.icon}
          name={weatherOptions[condition].iconName}
          size={120}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainerBottom}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
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
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fc913a",
  },
  halfContainerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainerBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 60,
    marginBottom: 20,
    color: "white",
    fontWeight: "600",
  },
  icon: {
    marginBottom: 5,
  },
  temp: {
    marginTop: 15,
    fontSize: 38,
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 38,
    color: "white",
    fontWeight: "700",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "400",
  },
  textContainer: {
    paddingHorizontal: 55,
    alignItems: "center",
    marginBottom: 20,
  },
});
