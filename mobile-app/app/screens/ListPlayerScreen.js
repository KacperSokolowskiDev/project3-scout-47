import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Picker,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Constant from "expo-constants";

import { AntDesign } from "@expo/vector-icons";
const axios = require("axios");

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import ButtonModal from "../components/ButtonModal";
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
      await axios
        .get("http://192.168.0.103:5000/api/players")
        .then((res) => {
          console.log(res.data);
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
        <ButtonModal title={"Filtre :"} style={styles.modal}>
          <AppText style={styles.filtreCategory}>Categories :</AppText>

          <AppText style={styles.filtreNom}>Nom - Prenom :</AppText>
          <AppTextInput palceholder={"Hello"}></AppTextInput>
        </ButtonModal>
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
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate(routes.ADDPLAYERSCREEN)}
        >
          <AntDesign
            name="adduser"
            color={defaultStyles.colors.black}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate(routes.AGENDAPAGE)}
        >
          <AntDesign
            name="calendar"
            color={defaultStyles.colors.black}
            size={50}
          />
        </TouchableOpacity>
        <View>
          <AntDesign
            name="calendar"
            color={defaultStyles.colors.black}
            size={50}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: defaultStyles.colors.light,
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomBtn: {},
  btnAjout: {
    margin: 5,
    height: 50,
  },
  btnModal: {
    color: "red",
    backgroundColor: "red",
    width: "35%",
  },
  filtreCategory: {
    backgroundColor: defaultStyles.colors.primary,
    color: "white",
    fontSize: 25,
    height: 35,
    margin: 5,
    width: "40%",
  },
  filtreNom: {
    backgroundColor: defaultStyles.colors.primary,
    color: "white",
    fontSize: 25,
    height: 35,
    margin: 5,
    width: "50%",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
});
export default ListPlayerScreen;
