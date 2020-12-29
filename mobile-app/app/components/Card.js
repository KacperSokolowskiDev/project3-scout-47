import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function Card({ firstname, lastname, photo, club, logo }) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(`Player ${firstname} selected`)}
      >
        <Image style={styles.image} source={photo} />
        <View style={styles.player}>
          <View style={styles.infoNames}>
            <AppText style={styles.text}>{lastname}</AppText>
            <AppText style={styles.text}>{firstname}</AppText>
          </View>
          <View style={styles.infoClub}>
            <Image style={styles.logo} source={logo} />
            <AppText style={styles.text}>{club}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 25,
    flex: 1,
    flexDirection: "row",
    height: 150,
    margin: 10,
  },
  image: {
    alignSelf: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    height: "100%",
    marginTop: 50,
    marginBottom: 50,
    width: 120,
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
    justifyContent: "space-evenly",
    width: "100%",
  },
  logo: { height: 50, width: 50 },
  player: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Card;
