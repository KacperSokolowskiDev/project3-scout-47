import React, { useState } from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";
const axios = require("axios");
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import { set } from "react-native-reanimated";

// Define the schema of the form, outside of the component,
// to avoid the redefine it at each re-render
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("Firstname"),
  lastname: Yup.string().required().label("Lastname"),
  club: Yup.string().notRequired().label("Club"),
  date: Yup.date().notRequired().label("Date"),
});

function AddPlayerScreen({ navigation }) {
  const [isPosted, setIsPosted] = useState(false);

  const postPlayer = async (values) => {
    let url = "http://192.168.50.74:5000/api/players";
    if (isPosted == false) {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token == null) {
          throw new Error("Not logged in");
        }
        const response = await axios.post(url, {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        });
        setIsPosted(true);
        navigation.navigate(routes.PLAYERSLISTSCREEN);
      } catch (error) {
        console.log("error ", error);
      }
    }

    // if (isPosted == false) {
    //   axios
    //     .post("http://192.168.50.74:5000/api/players", values)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   setIsPosted(true);
    //   navigation.navigate(routes.PLAYERSLISTSCREEN);
    // } else {
    //   console.log("already uploaded");
    // }
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
        onSubmit={(values) => postPlayer(values)}
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
