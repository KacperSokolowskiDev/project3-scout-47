import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

import defaultColor from "../config/color";
import Screen from "../components/Screen";

function PlayerAgendaScreen({ playerInfo }) {
  console.log("agenda screen", playerInfo);
  return (
    <Screen>
      <View>
        <AppText style={styles.text}>Hello</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { color: defaultColor.white },
});

export default PlayerAgendaScreen;
