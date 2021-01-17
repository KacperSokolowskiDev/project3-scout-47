import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Constant from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
const axios = require("axios");

import AppText from "../components/AppText";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [download, setDownload] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [listPlayers, setListPlayers] = useState([]);
  const [offset, SetOffset] = useState(0);

  const [onEndListReached, setOnEndListReached] = useState(true);

  const fetchListPlayer = async () => {
    const value = { offset: offset };
    url = `http://192.168.50.226:5000/api/players/infinite?offset=${offset}`;
    try {
      const response = await axios.get(url, { params: { value } });
      const listPlayersUpdated = response.data;
      setShouldFetch(false);
      setListPlayers((listPlayers) => [...listPlayers, ...listPlayersUpdated]);
      SetOffset(offset + 5);
      setDownload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    fetchListPlayer();
  }, []);

  return (
    <Screen>
      <View style={styles.titleContainer}>
        <AppText style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Vos joueurs suivis :
        </AppText>
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
          onPress={() => {
            console.log("GO search");
          }}
        >
          <AntDesign
            name="search1"
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
      </View>
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
  titleContainer: {
    height: "5%",
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
  title: {
    color: defaultStyles.colors.white,
  },
});
export default ListPlayerScreen;
