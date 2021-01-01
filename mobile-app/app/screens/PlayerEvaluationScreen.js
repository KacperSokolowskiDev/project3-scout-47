import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlayerEvaluationScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.text}>Screen Evaluations</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
  },
});

export default PlayerEvaluationScreen;
