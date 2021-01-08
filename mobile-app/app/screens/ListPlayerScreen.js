import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Constant from "expo-constants";
const axios = require("axios");

import AppText from "../components/AppText";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [download, setDownload] = useState(false);
  const [listPlayer, setListPlayer] = useState([]);

  const fetchListPlayer = async () => {
    console.log("fetch data");
    try {
      axios
        .get("http://192.168.50.242:5000/api/players")
        .then((res) => {
          let result = res.data;
          setListPlayer(result);
          setDownload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("in useEffect");
    fetchListPlayer();
  }, []);

  return (
    <Screen>
      <View style={styles.filterContainer}>
        <AppText style={styles.year}>Category</AppText>
        <Button
          title="Ajouter player"
          onPress={() => navigation.navigate(routes.ADDPLAYERSCREEN)}
        />
      </View>

      {download ? (
        <FlatList
          data={listPlayer}
          keyExtractor={(player) => player.id.toString()}
          renderItem={({ item }) => (
            <Card
              lastname={item.lastname}
              firstname={item.firstname}
              picture={require("../assets/portrait.jpg")}
              club={item.club}
              logo={require("../assets/scout47Logo.png")}
              onPress={() =>
                navigation.navigate(routes.PLAYERNAVIGATOR, { item })
              }
            />
          )}
        ></FlatList>
      ) : (
        <AppText style={styles.text}>No player Loaded</AppText>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnAjout: {
    backgroundColor: "red",
    margin: 5,
    height: 50,
  },
  btnModal: {
    color: "red",
    backgroundColor: "red",
    width: "35%",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modal: {
    backgroundColor: defaultStyles.colors.black,
    height: "100%",
    paddingTop: Constant.statusBarHeight,
  },
  modalClub: {},
  text: {
    color: defaultStyles.colors.white,
  },
  title: {
    color: defaultStyles.colors.white,
  },
  year: {
    backgroundColor: defaultStyles.colors.primary,
    color: "white",
    fontSize: 25,
    height: 35,
    margin: 5,
  },
});
export default ListPlayerScreen;
