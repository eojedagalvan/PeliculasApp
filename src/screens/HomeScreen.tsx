import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviePoster from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";

const HomeScreen = () => {
  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View
      style={{
        marginTop: top + 20,
      }}
    >
      <MoviePoster movie={peliculasEnCine[0]} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
