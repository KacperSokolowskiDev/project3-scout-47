import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function Card({ firstname, lastname, picture, club, logo, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Image style={styles.image} source={picture} />
        </View>
        <View style={styles.player}>
          <View style={styles.infoNames}>
            <AppText style={styles.text}>{lastname}</AppText>
            <AppText style={styles.text}>{firstname}</AppText>
          </View>
          <View style={styles.infoClub}>
            {/* <AppText style={styles.text}>{club}</AppText> */}
            <AppText style={styles.text}>FC BXL</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 50,
    height: 50,
    margin: 20,
  },
  image: {
    alignSelf: "center",
    borderRadius: 35,
    // borderTopLeftRadius: 5,
    // borderBottomLeftRadius: 5,
    height: 75,
    width: 75,
  },

  infoClub: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  infoNames: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
    width: "100%",
  },
  logo: { height: 50, width: 50 },
  player: {
    backgroundColor: defaultStyles.colors.secondary,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 25,
    height: 70,
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
