import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import AppText from "../components/AppText";
const axios = require("axios");

import Card from "../components/Card";
import Screen from "../components/Screen";

const players = [
  {
    id: 1,
    nom: "John",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/scout47Logo.png"),
  },
  {
    id: 2,
    nom: "King",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC Roma",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 3,
    nom: "Queen",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/scout47Logo.png"),
  },
  {
    id: 4,
    nom: "Jester",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC Namur",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 5,
    nom: "Harold",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC London",
    logo: require("../assets/icon_cercle.png"),
  },
];

function ListPlayerScreen({ navigation }) {
  const fetchData = () => {
    console.log("in fetchdata");
    axios
      .get(`d`)
      .then((res) => {
        let result = res.data;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <Screen>
      <AppText
        style={{ backgroundColor: "lightblue", color: "white", fontSize: 25 }}
      >
        Année : 2009{" "}
      </AppText>

      <FlatList
        data={players}
        keyExtractor={(player) => player.id.toString()}
        renderItem={({ item }) => (
          <Card
            nom={item.nom}
            prenom={item.prenom}
            photo={item.photo}
            club={item.club}
            logo={item.logo}
          />
        )}
      ></FlatList>

      <Button title="fetch data" onPress={() => fetchData()} />
      {/* <Button
        title="Add a player"
        onPress={() => navigation.navigate("Add Player")}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListPlayerScreen;
