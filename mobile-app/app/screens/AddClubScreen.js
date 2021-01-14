import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
const axios = require("axios");

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function AddClubScreen({ navigation }) {
  const [club, setClub] = useState("");

  const postClub = async () => {
    let newClub = {
      name: club,
    };
    await axios
      .post("http:/localhost:5000/api/clubs", newClub)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate(routes.ADDPLAYERSCREEN);
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
