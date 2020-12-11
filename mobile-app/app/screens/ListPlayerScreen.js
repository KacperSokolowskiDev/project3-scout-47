import React from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import Card from "../components/Card";
import Screen from "../components/Screen";

const players = [
  {
    id: 1,
    nom: "John",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 2,
    nom: "King",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 3,
    nom: "Queen",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 4,
    nom: "Jester",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/icon_cercle.png"),
  },
  {
    id: 5,
    nom: "Harold",
    prenom: "Smith",
    photo: require("../assets/portrait.jpg"),
    club: "FC BXL",
    logo: require("../assets/icon_cercle.png"),
  },
];

function ListPlayerScreen({ navigation }) {
  return (
    <Screen>
      <AppText
        style={{ backgroundColor: "lightblue", color: "white", fontSize: 25 }}
      >
        Filter to add{" "}
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

      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListPlayerScreen;
