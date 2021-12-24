import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MovieFull } from "../interfaces/movieInterface";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="star-outline" color="gray" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
