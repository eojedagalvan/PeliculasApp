import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Movie } from "../interfaces/movieInterface";
import { RootStackParams } from "../navigation/Navigation";

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
