import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
      }}
    >
      {children}
    </View>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({});
