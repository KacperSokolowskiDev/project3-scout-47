import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function PlayerProfileCard({ firstname, lastname, picture }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: picture }} />
      <View style={styles.infoContainer}>
        <AppText style={styles.name}>{firstname} </AppText>
        <AppText style={styles.name}>{lastname} </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.black,
    height: "100%",
  },
  image: {
    marginTop: 30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: "50%",
    width: "95%",
  },
  name: { color: defaultStyles.colors.white },
});

export default PlayerProfileCard;
