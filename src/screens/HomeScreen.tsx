import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import movieDB from "../api/movieDB";

const HomeScreen = () => {
  useEffect(() => {
    movieDB.get("/now_playing").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
