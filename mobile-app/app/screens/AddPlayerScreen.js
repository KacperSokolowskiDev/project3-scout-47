import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
const axios = require("axios");
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

// Define the schema of the form, outside of the component,
// to avoid the redefine it at each re-render
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("Firstname"),
  lastname: Yup.string().required().label("Lastname"),
  club: Yup.string().notRequired().label("Club"),
  date: Yup.date().notRequired().label("Date"),
});

function AddPlayerScreen({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [club, setClub] = useState("");
  const [date, setDate] = useState("");

  const postPlayer = () => {
    let player = {
      firstname: firstname,
      lastname: lastname,
      club: club,
      birthdate: date,
    };

    axios
      .post("http://192.168.0.103:5000/api/players", player)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Screen style={styles.container}>
      <AppText style={styles.titre}>Ajouter un player :</AppText>

      <AppForm
        initialValues={{
          firstname: "",
          lastname: "",
          date: "",
          club: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField name="firstname" placeholder="Prénom" />
          <AppFormField name="lastname" placeholder="Nom de famille" />
          <AppFormField name="date" placeholder="date AAAA-MM-JJ" />
          <AppFormField name="club" placeholder="club" />
          <Button
            title="Nouveau club ?"
            onPress={() => navigation.navigate(routes.ADDCLUBSCREEN)}
          />

          <SubmitButton title="Submit" />
        </>
      </AppForm>

      <View>
        <AppText style={styles.text}>Prénom :</AppText>
        <AppTextInput
          placeholder="Prénom"
          value={firstname}
          onChangeText={(value) => setFirstname(value)}
        />
      </View>
      <View>
        <AppText style={styles.text}>Nom de famille :</AppText>
        <AppTextInput
          placeholder="Nom de famille"
          value={lastname}
          onChangeText={(value) => setLastname(value)}
        />
      </View>
      <View>
        <AppText style={styles.text}>Date de naissance:</AppText>
        <AppTextInput
          placeholder="Date de naissance AAAA-MM-JJ"
          value={date}
          onChangeText={(value) => setDate(value)}
        />
      </View>
      <View>
        <AppText style={styles.text}>Club</AppText>
        <AppTextInput
          placeholder="Club"
          onChangeText={(value) => setClub(value)}
        />
      </View>
      <Button
        title="Nouveau club ?"
        onPress={() => navigation.navigate(routes.ADDCLUBSCREEN)}
      />

      <Button title="Ajouter joueur" onPress={() => postPlayer()} />
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
