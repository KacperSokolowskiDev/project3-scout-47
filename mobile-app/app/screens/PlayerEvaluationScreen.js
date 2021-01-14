import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const axios = require("axios");

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

function PlayerEvaluationScreen({ playerInfo }) {
  const [download, setDownload] = useState(false);
  const [listCriterias, setListCriteria] = useState([]);

  const FetchCriteria = async () => {
    console.log("In Fetch criteria");

    try {
      await axios
        .get("http://192.168.50.74:5000/api/criterias")
        .then((res) => {
          let result = res.data;
          setListCriteria(result);
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
    console.log("in useEffect Criterias");
    FetchCriteria();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title="Tout"></AppButton>
        <AppButton title="Physique"></AppButton>
        {download ? (
          <FlatList
            data={listCriterias}
            keyExtractor={(criteria) => criteria.id.toString()}
            renderItem={({ item }) => {
              console.log("in flatlist", item.name, item.groupe);
              <View>
                <Text style={styles.btnCriteria}>{item.name}</Text>;
              </View>;
            }}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}>Pas de critères (Physique)</AppText>
        )}
        <AppButton title="Stratégique"></AppButton>
        <AppButton title="Psychologique"></AppButton>
        <AppButton title="Technique"></AppButton>
        <TouchableOpacity
          style={styles.btnInfoCriteria}
          onPress={() => console.log("Press on a critere")}
        >
          <Entypo name="info" size={30} color={defaultStyles.colors.primary} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnCriteria: {
    color: "white",
    backgroundColor: "red",
    height: 25,
    width: 50,
  },
  btnInfoCriteria: {
    width: "100%",
  },
  container: {
    marginTop: 30,
    height: "100%",
  },
  infoText: {
    color: "white",
    fontSize: 15,
  },
  textCriteria: {
    color: "white",
    fontSize: 18,
  },
});

export default PlayerEvaluationScreen;
