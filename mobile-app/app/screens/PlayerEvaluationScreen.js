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
import ButtonModal from "../components/ButtonModal";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

function PlayerEvaluationScreen({ playerInfo }) {
  const [download, setDownload] = useState(false);
  const [showCriteriaPhysic, setShowCriteriaPhysic] = useState(false);
  const [listPhysic, setListPhysic] = useState([]);
  const [showCriteriaStrategic, setShowCriteriaStrategic] = useState(false);
  const [showCriteriaPsychologic, setShowCriteriaPsychologic] = useState(false);
  const [showCriteriaTechnic, setShowCriteriaTechnic] = useState(false);
  const [listCriterias, setListCriteria] = useState([]);
  const [evaluation, setEvaluation] = useState([]);

  const FetchCriteria = async () => {
    try {
      axios
        .get("http://192.168.0.103:5000/api/criterias")
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

  const showAll = () => {
    setShowCriteriaPhysic(true);
    setShowCriteriaStrategic(true);
    setShowCriteriaPsychologic(true);
    setShowCriteriaTechnic(true);
  };

  const showPhysics = async () => {
    // const groupe = { groupe: "Physique" };
    // url = `http://192.168.50.226:5000/api/criterias/search/groupe`;
    // try {
    //   //const response = await axios.get(url, groupe);
    //   const response = await axios({
    //     method: "GET",
    //     url: url,
    //     header: { "Content-type": "application/json; charset=UTF-8" },
    //     body: JSON.stringify({ groupe: "Physique" }),
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    //   const newList = response.data;
    //   setListPhysic(newList);
    // } catch (error) {
    //   console.log(error);
    // }
    setShowCriteriaPhysic(!showCriteriaPhysic);
  };

  const showStrategic = () => {
    setShowCriteriaStrategic(!showCriteriaStrategic);
  };

  const showPsychologic = () => {
    setShowCriteriaPsychologic(!showCriteriaPsychologic);
  };

  const showTechnic = () => {
    setShowCriteriaTechnic(!showCriteriaTechnic);
  };

  useEffect(() => {
    FetchCriteria();
  }, []);

  const decrement = (score, id) => {
    score--;
    if (score <= 1) {
      score = 1;
    }
    const newList = listCriterias.map((criteria) => {
      if (criteria.id === id) {
        criteria.score = score;
      }
      return criteria;
    });
    setListCriteria(newList);
  };

  const increment = (score, id) => {
    score++;
    if (score >= 10) {
      score = 10;
    }
    const newList = listCriterias.map((criteria) => {
      if (criteria.id === id) {
        criteria.score = score;
      }
      return criteria;
    });
    setListCriteria(newList);
  };

  const postEvaluation = async () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const newEvaluation = listCriterias.map((criteria) => {
      return {
        player_id: playerInfo.id,
        criteria_id: criteria.id,
        value: criteria.score,
        evaluationDate: date,
        createdAt: date,
        updatedAt: date,
      };
    });
    console.log("new eval", newEvaluation);
    try {
      axios
        .post("http://192.168.50.74:5000/api/evaluations/all", newEvaluation)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title="Tout" onPress={() => showAll()}></AppButton>
        <AppButton title="Physique" onPress={() => showPhysics()}></AppButton>
        {showCriteriaPhysic && listCriterias.length ? (
          <FlatList
            data={listCriterias}
            keyExtractor={(criteria) => {
              return criteria.id.toString();
            }}
            renderItem={({ item }) => (
              <ButtonModal
                title={item.name + " : " + item.score}
                style={styles.modal}
              >
                <AppText style={styles.modalText}>{item.name}</AppText>
                <View style={styles.modalContainer}>
                  <Button
                    title="-"
                    style={styles.modalCrement}
                    onPress={() => decrement(item.score, item.id)}
                  />
                  <AppText style={styles.modalText}>{item.score}</AppText>
                  <Button
                    title="+"
                    style={styles.modalCrement}
                    onPress={() => increment(item.score, item.id)}
                  />
                </View>
              </ButtonModal>
            )}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}>Pas de critères (Physique)</AppText>
        )}

        {/* <AppButton
          title="Stratégique"
          onPress={() => showStrategic()}
        ></AppButton>
        {showCriteriaStrategic ? (
          <FlatList
            data={listCriterias}
            keyExtractor={(criteria) => criteria.id.toString()}
            renderItem={({ item }) => <AppButton title={item.name}></AppButton>}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}>
            Pas de critères (Stratégique)
          </AppText>
        )}
        <AppButton
          title="Psychologique"
          onPress={() => showPsychologic()}
        ></AppButton>
        {showCriteriaPsychologic ? (
          <FlatList
            data={listCriterias}
            keyExtractor={(criteria) => criteria.id.toString()}
            renderItem={({ item }) => <AppButton title={item.name}></AppButton>}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}>
            Pas de critères (Psychologique)
          </AppText>
        )}
        <AppButton title="Technique" onPress={() => showTechnic()}></AppButton>
        {showCriteriaTechnic ? (
          <FlatList
            data={listCriterias}
            keyExtractor={(criteria) => criteria.id.toString()}
            renderItem={({ item }) => <AppButton title={item.name}></AppButton>}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}>
            Pas de critères (Techniques)
          </AppText>
        )} */}
        <Button title="submit" onPress={() => postEvaluation()}></Button>
        <ButtonModal
          style={styles.modalInfo}
          title={
            <Entypo
              name="info"
              size={30}
              color={defaultStyles.colors.primary}
            />
          }
        >
          <AppText style={styles.titre}>Echelles de critères :</AppText>
          <AppText style={styles.sousTitre}>0 à 2 : médiocres</AppText>
          <AppText style={styles.sousTitre}>3 à 5 : mauvais</AppText>
          <AppText style={styles.sousTitre}>6 à 8 : bon</AppText>
          <AppText style={styles.sousTitre}>9 à 10 : excellent</AppText>
        </ButtonModal>
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
  btnCriteriaContainer: {
    display: "flex",
    justifyContent: "center",
    height: 100,
    width: 300,
    backgroundColor: "red",
  },

  btnInfoCriteria: {
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: "100%",
  },
  infoText: {
    color: "white",
    fontSize: 15,
  },
  modal: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "row",
  },
  modalCrement: {},
  modalInfo: {
    backgroundColor: "black",
  },
  modalText: {
    color: "white",
    fontSize: 45,
  },
  sousTitre: {
    color: "white",
    fontSize: 20,
  },
  textCriteria: {
    color: "white",
    fontSize: 18,
  },
  titre: {
    color: "white",
    fontSize: 25,
  },
});

export default PlayerEvaluationScreen;
