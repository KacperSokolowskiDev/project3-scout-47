import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlayerSchoolScreen({ playerInfo }) {
  return (
    <Screen>
      <View>
        <AppText style={styles.text}>School</AppText>
        <AppText style={styles.text}>{playerInfo.lastname}</AppText>
        <AppText style={styles.text}>{playerInfo.firstname}</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { color: "white" },
});

export default PlayerSchoolScreen;
