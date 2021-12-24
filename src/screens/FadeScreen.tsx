import React, { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { useFade } from "../hooks/useFade";

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#084F6A",
          width: 150,
          height: 150,
          borderColor: "white",
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />
      <Button title="FADEIN" onPress={fadeIn} />
      <Button title="FADEOUT" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;

const styles = StyleSheet.create({});
