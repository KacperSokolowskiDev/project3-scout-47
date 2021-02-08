import React, { useEffect, useState } from "react";
import {
  AsyncStorage,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Constant from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { AsyncStorage } from "@react-native-community/async-storage";
const axios = require("axios");
import { Footer, FooterTab, Button, Text, Input, Textarea } from "native-base";

import AppText from "../components/AppText";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [download, setDownload] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [listPlayers, setListPlayers] = useState([]);
  const [search, setSearch] = useState("");
  //const [offset, SetOffset] = useState(0);

  const [onEndListReached, setOnEndListReached] = useState(true);

  const fetchListPlayer = async () => {
    // const value = { offset: offset };
    let url = `http://192.168.50.74:5000/api/players/`;
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("token in appmobil", token);
      if (token === null) {
        console.log("no token");
        throw new Error("Not logged in");
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });
      console.log("response", response);
      const listPlayersUpdated = response.data;
      console.log("data", listPlayersUpdated);
      //setShouldFetch(false);
      setListPlayers(listPlayersUpdated);
      //setListPlayers((listPlayers) => [...listPlayers, ...listPlayersUpdated]);
      //SetOffset(offset + 5);
      setDownload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (!shouldFetch) {
    //   return;
    // }
    fetchListPlayer();
  }, []);

  const handleSearch = (e) => {
    console.log("in the search", e);
  };

  return (
    <Screen>
      <View style={styles.titleContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder={"search"}
          onChangeText={(value) => {
            handleSearch(value);
          }}
        />
      </View>

      {download ? (
        <FlatList
          onScrollBeginDrag={() => {}}
          onScrollEndDrag={() => setOnEndListReached(false)}
          onEndReachedThreshold={0}
          onMomentumScrollBegin={() => {
            setOnEndListReached(false);
          }}
          // Allow to detect the end of the flat list
          onEndReached={({ distanceFromEnd }) => {
            fetchListPlayer();
          }}
          data={listPlayers}
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
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => navigation.navigate(routes.AGENDAPAGE)}
          >
            <MaterialCommunityIcons
              name="account"
              color={defaultStyles.colors.black}
              size={25}
            />
            <Text>Agenda</Text>
          </Button>
          <Button
            vertical
            onPress={() => navigation.navigate(routes.ADDPLAYERSCREEN)}
          >
            <MaterialCommunityIcons
              name="account"
              color={defaultStyles.colors.black}
              size={25}
            />
            <Text>Ajout</Text>
          </Button>
          <Button vertical>
            <MaterialCommunityIcons
              name="account"
              color={defaultStyles.colors.black}
              size={25}
            />
            <Text>Log out</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: defaultStyles.colors.light,
    bottom: 0,
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
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
  title: {
    color: "red",
    fontSize: 50,
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
  pickerSelect: {
    fontSize: 50,
  },
  searchBar: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 35,
    height: "65%",
    margin: 10,
    paddingLeft: 10,
  },
  titleContainer: {
    height: "10%",
  },
  title: {
    color: defaultStyles.colors.white,
  },
});
export default ListPlayerScreen;
