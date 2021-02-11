import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

// import AppText from "./AppText";
// import defaultStyles from "../config/styles";

function PlayerProfileCard({ navigation, route }) {
  console.log("ra", route)
  // const {
  //   lastname,
  //   firstname,
  //   height,
  //   weight,
  //   birthdate,
  //   picture,
  //   position,
  //   strongFoot,
  // } = route.params ;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: picture }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{firstname} </Text>
        <Text style={styles.name}>{lastname} </Text>
        <Text style={styles.name}>{height} cm </Text>
        <Text style={styles.name}>{weight} kg </Text>
        <Text style={styles.name}>{strongFoot} </Text>
        <Text style={styles.name}>{birthdate} </Text>
        <Text style={styles.name}>{position} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "blue",
    height: "85%",
  },
  image: {
    marginTop: 30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: "50%",
    width: "95%",
  },
  name: { color: "yellow"},
});

export default PlayerProfileCard;
