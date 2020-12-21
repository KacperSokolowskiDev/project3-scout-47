import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
const axios = require("axios");

import Card from "../components/Card";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [player, setPlayer] = useState([]);
  const [download, setDownload] = useState(false);

  const fetchData = () => {
    console.log("in fetchdata");
    axios
      .get("http://localhost:4000/api/players")
      .then((res) => {
        let result = res.data;
        console.log("dans le fetchData: ", result);
        setPlayer(result);
        setDownload(true);
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

      {download ? (
        <FlatList
          data={player}
          keyExtractor={(player) => player.id.toString()}
          renderItem={({ item }) => (
            <Card
              lastname={item.lastname}
              firstname={item.firstname}
              photo={require("../assets/portrait.jpg")}
              club={item.club}
              logo={require("../assets/scout47Logo.png")}
            />
          )}
        ></FlatList>
      ) : (
        <AppText
          style={{ backgroundColor: "lightblue", color: "white", fontSize: 25 }}
        >
          No player Loaded
        </AppText>
      )}

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
