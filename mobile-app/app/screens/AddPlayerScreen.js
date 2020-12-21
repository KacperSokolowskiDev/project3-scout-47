import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

function AddPlayerScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.titre}>Ajouter un player :</AppText>

      <View>
        <AppText style={styles.text}>Firstname :</AppText>
        <AppTextInput placeholder="Firstname" />
      </View>
      <View>
        <AppText style={styles.text}>Lastname :</AppText>
        <AppTextInput placeholder="Lastname" />
      </View>
      <View>
        <AppText style={styles.text}>Club</AppText>
        <AppTextInput placeholder="Club" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
  },
  titre: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default AddPlayerScreen;
