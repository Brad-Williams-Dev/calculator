import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Output = ({ outputText }) => {
  return (
    <View style={styles.output}>
      <Text style={styles.outputText}>{outputText}</Text>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  output: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: 250,
    width: "100%",
    marginRight: 75,
  },
  outputText: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "right",
  },
});
