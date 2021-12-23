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
import HorizontalSlider from "../components/HorizontalSlider";

const { width: windowWith } = Dimensions.get("window");

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, Upcoming, isLoading } = useMovies();
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
            // backgroundColor: "red",
          }}
        >
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Películas populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={Upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
