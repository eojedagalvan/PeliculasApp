import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";
import { RootStackParams } from "../navigation/Navigation";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
