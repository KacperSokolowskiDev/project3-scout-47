import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";

function PlayerMatchScreen({ playerInfo }) {
  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/stadeDeFoot.jpg")}
          style={styles.backgroundImage}
        ></ImageBackground>

        <View style={styles.statGrid}></View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    transform: [{ rotate: "90deg" }],
  },
  statGrid: {
    zIndex: 2,
  },
  text: { color: "white" },
});

export default PlayerMatchScreen;
