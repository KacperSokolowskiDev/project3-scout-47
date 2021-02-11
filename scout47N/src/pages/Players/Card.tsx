import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient'

// import Text from "./Text";
// import defaultStyles from "../config/styles";

function Card({ firstname, lastname, picture, club, logo, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image}    source={{
          uri: picture,
        }} />
        <View style={styles.player}>
          {/* <View style={styles.infoNames}> */}
            <Text style={styles.text}>{lastname}</Text>
            <Text style={styles.text}>{firstname}</Text>
          {/* </View> */}
          {/* <View style={styles.infoClub}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.text}>{club}</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,

    borderRadius: 25,
    flex: 1,
    flexDirection: "row",
    height: 150,
    margin: 10,
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 20,
    borderRadius: 60,
    height: 120,
    width: 120
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
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
  },
  logo: { height: 50, width: 50 },
  player: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Card;
