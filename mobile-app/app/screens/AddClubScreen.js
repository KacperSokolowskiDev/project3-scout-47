import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
const axios = require("axios");

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function AddClubScreen(props) {
  const [club, setClub] = useState("");

  const postClub = () => {
    console.log("Yo");
    let newClub = {
      name: club,
    };
    axios
      .post("http://192.168.0.103:5000/api/clubs", newClub)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.text}>Ajout d'un nouveau club</AppText>
        <AppText style={styles.text}>Nom du nouveau club</AppText>
        <AppTextInput
          placeholder="Nom du club"
          onChangeText={(value) => setClub(value)}
        />
        <Button title="Ajouter club" onPress={() => postClub()}></Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { color: "white" },
});

export default AddClubScreen;
