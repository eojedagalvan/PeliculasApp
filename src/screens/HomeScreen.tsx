import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviePoster from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import Carousel from "react-native-snap-carousel";

const { width: windowWith } = Dimensions.get("window");

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
      <View
        style={{
          width: 440,
        }}
      >
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWith}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
