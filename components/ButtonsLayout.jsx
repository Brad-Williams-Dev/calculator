import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function ButtonsLayout({ handleButtonPress }) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", padding: 50 }}>
      <View style={styles.layout}>
        <TouchableOpacity
          onPress={() => handleButtonPress("C")}
          style={styles.firstRow}
        >
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstRow}>
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>+ / -</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstRow}>
          <Text style={[styles.firstRowText, { color: "#1C1C1C" }]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("/")}
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
        <TouchableOpacity
          onPress={() => handleButtonPress("7")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("8")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("9")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("*")}
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
        <TouchableOpacity
          onPress={() => handleButtonPress("4")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("5")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("6")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("-")}
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
        <TouchableOpacity
          onPress={() => handleButtonPress("1")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("2")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("3")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("+")}
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
      <View style={[styles.layout, { justifyContent: "space-between" }]}>
        <TouchableOpacity
          onPress={() => handleButtonPress("0")}
          style={[styles.remainderRows, { width: 160 }]}
        >
          <Text style={styles.firstRowText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(".")}
          style={styles.remainderRows}
        >
          <Text style={styles.firstRowText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("=")}
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
              fontSize: 40,
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: 15,
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
    fontSize: 40,
    fontWeight: "bold",
  },
});
