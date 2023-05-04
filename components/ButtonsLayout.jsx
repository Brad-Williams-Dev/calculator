import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonsLayout() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", padding: 50 }}>
      <View style={styles.layout}>
        <TouchableOpacity style={styles.firstRow}>
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstRow}>
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>+ / =</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstRow}>
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF9500",
            height: 80,
            width: 80,
            borderRadius: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            ÷
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF9500",
            height: 80,
            width: 80,
            borderRadius: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF9500",
            height: 80,
            width: 80,
            borderRadius: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF9500",
            height: 80,
            width: 80,
            borderRadius: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.layout, { justifyContent: "space-evenly" }]}>
        <TouchableOpacity style={[styles.remainderRows, { width: 160 }]}>
          <Text style={styles.firstRowText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remainderRows}>
          <Text style={styles.firstRowText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF9500",
            height: 80,
            width: 80,
            borderRadius: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            =
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "bottom",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4D4D2",
    height: 80,
    width: 80,
    borderRadius: 50,
    margin: 10,
  },
  remainderRows: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#505050",
    height: 80,
    width: 80,
    borderRadius: 50,
    margin: 10,
  },
  firstRowText: {
    color: "#D4D4D4",
    fontSize: 20,
    fontWeight: "bold",
  },
});
