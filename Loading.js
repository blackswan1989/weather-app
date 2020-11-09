import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#75CBCD",
  },
  text: {
    color: "white",
    fontSize: 28,
  },
});
