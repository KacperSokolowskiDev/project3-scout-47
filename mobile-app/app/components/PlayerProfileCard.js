import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function PlayerProfileCard({ playerInfo }) {
  const {
    lastname,
    firstname,
    height,
    weight,
    birthdate,
    picture,
    position,
    strongFoot,
  } = { ...playerInfo };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: picture }} />
      <View style={styles.infoContainer}>
        <AppText style={styles.name}>{firstname} </AppText>
        <AppText style={styles.name}>{lastname} </AppText>
        <AppText style={styles.name}>{height} cm </AppText>
        <AppText style={styles.name}>{weight} kg </AppText>
        <AppText style={styles.name}>{strongFoot} </AppText>
        <AppText style={styles.name}>{birthdate} </AppText>
        <AppText style={styles.name}>{position} </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.medium,
    height: "85%",
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
