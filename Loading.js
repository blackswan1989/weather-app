import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const loadingPage = {
  gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  iconName: "loader",
};

export default function Loading() {
  return (
    <LinearGradient colors={loadingPage.gradient} style={styles.container}>
      <View style={styles.containerTop}>
        <Feather name={loadingPage.iconName} size={120} color="white" />
      </View>
      <View style={styles.containerBottom}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>Bring the weather...🎅🏼</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "flex-end",
    // paddingHorizontal: 30,
    // paddingVertical: 150,
    // backgroundColor: "#006E33",
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
});
