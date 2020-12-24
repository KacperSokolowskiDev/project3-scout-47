import React, { useEffect, useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import { TouchableOpacity as TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "../components/AppText";
const axios = require("axios");

import Card from "../components/Card";
import Screen from "../components/Screen";

function ListPlayerScreen({ navigation }) {
  const [listPlayer, setListPlayer] = useState([]);
  const [download, setDownload] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchData = () => {
    console.log("in fetchdata");
    axios
      .get("http://localhost:4000/api/players")
      .then((res) => {
        let result = res.data;
        console.log("dans le fetchData: ", result);
        setListPlayer(result);
        setDownload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <Screen>
      <View style={styles.filterContainer}>
        <AppText style={styles.year}>Année: </AppText>

        <TouchableWithoutFeedback
          style={styles.btnAjout}
          onPress={() => setModalVisible(true)}
        >
          <AppText>Ajouter Player</AppText>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Modal>
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

      <Button title="fetch data" onPress={() => fetchData()} />
      {/* <Button
        title="Add a player"
        onPress={() => navigation.navigate("Add Player")}
      /> */}
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

  year: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 25,
    margin: 5,
    height: 50,
  },
});
export default ListPlayerScreen;
