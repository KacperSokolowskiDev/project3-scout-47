import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlayerEvaluationScreen({ playerInfo }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title="Physique"></AppButton>
        <AppButton title="Stratégique"></AppButton>
        <AppButton title="Psychologique"></AppButton>
        <AppButton title="Technique"></AppButton>
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
