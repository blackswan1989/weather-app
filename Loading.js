import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Bring the weather...🎅🏼</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 150,
    backgroundColor: "#55967e",
  },
  text: {
    color: "#c72e45",
    fontSize: 28,
    fontWeight: "700",
  },
});
