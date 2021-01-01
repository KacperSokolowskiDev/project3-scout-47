import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlayerSchoolScreen(props) {
  return (
    <Screen>
      <View>
        <AppText style={styles.text}>School</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { color: "white" },
});

export default PlayerSchoolScreen;
