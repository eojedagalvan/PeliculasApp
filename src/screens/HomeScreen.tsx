import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviePoster from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import Carousel from "react-native-snap-carousel";
import ImageColors from "react-native-image-colors";

import HorizontalSlider from "../components/HorizontalSlider";
import GradientBackground from "../components/GradientBackground";
import { getImageColors } from "../api/helpers/getColores";

const { width: windowWith } = Dimensions.get("window");

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, Upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const colors = await ImageColors.getColors(uri, {});

    const [primary, secondary] = await getImageColors(uri);
  };

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
    <GradientBackground>
      <ScrollView>
        <View
          style={{
            marginTop: top + 20,
          }}
        >
          {/* Carousel Principal */}
          <View
            style={{
              height: 440,
            }}
          >
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWith}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>

          {/* Películas populares */}
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={Upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
