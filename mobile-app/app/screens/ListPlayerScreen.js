import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constant from "expo-constants";
const axios = require("axios");

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import ButtonModal from "../components/ButtonModal";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [download, setDownload] = useState(false);
  const [listPlayer, setListPlayer] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [club, setClub] = useState("");
  const [date, setDate] = useState("");

  const fetchData = () => {
    console.log("fetch data");
    axios
      .get("http://b:5000/api/players")
      .then((res) => {
        let result = res.data;
        console.log(result);
        setListPlayer(result);
        setDownload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = () => {
    let player = {
      firstname: firstname,
      lastname: lastname,
      club: club,
      birthdate: date,
    };
    axios
      .post("http://b:5000/api/players", player)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen>
      <View style={styles.filterContainer}>
        <AppText style={styles.year}>Année: </AppText>
        <ButtonModal title="Ajouter player">
          <AppText style={styles.titre}>Ajouter un player :</AppText>
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
              placeholder="Date de naissance"
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
          <Button title="Ajouter" onPress={() => postData()}></Button>
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
              photo={require("../assets/portrait.jpg")}
              club={item.club}
              logo={require("../assets/scout47Logo.png")}
            />
          )}
        ></FlatList>
      ) : (
        <AppText
          style={{
            backgroundColor: "lightblue",
            color: "white",
            fontSize: 25,
            width: "60%",
          }}
        >
          No player Loaded
        </AppText>
      )}
      <AppButton onPress={() => fetchData()}>Fetch data</AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnAjout: {
    backgroundColor: "red",
    margin: 5,
    height: 50,
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modal: {
    backgroundColor: defaultStyles.colors.light,
    paddingTop: Constant.statusBarHeight,
  },
  text: {},
  titre: {},
  year: {
    backgroundColor: defaultStyles.colors.primary,
    color: "white",
    fontSize: 25,
    margin: 5,
    height: 50,
  },
});
export default ListPlayerScreen;
