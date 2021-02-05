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
import AppTextInput from "../components/AppTextInput";

function PlayerEvaluationScreen({ playerInfo }) {
  const [download, setDownload] = useState(false);
  const [showCriteriaPhysic, setShowCriteriaPhysic] = useState(false);
  const [listPhysic, setListPhysic] = useState([]);
  const [showCriteriaStrategic, setShowCriteriaStrategic] = useState(false);
  const [showCriteriaPsychologic, setShowCriteriaPsychologic] = useState(false);
  const [showCriteriaTechnic, setShowCriteriaTechnic] = useState(false);
  const [listCriteria, setListCriteria] = useState([]);
  const [evaluation, setEvaluation] = useState([]);

  const FetchCriteria = async () => {
    console.log("dans fecth criteria");
    try {
      axios
        .get("http://192.168.50.74:5000/api/criteria")
        .then((res) => {
          let result = res.data;
          setListCriteria(result);
          console.log("resule dans fectch critieria", result);
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

  const showPhysics = () => {
    setShowCriteriaPhysic(!showCriteriaPhysic);
  };

  const showTechnic = () => {
    setShowCriteriaTechnic(!showCriteriaTechnic);
  };

  const showStrategic = () => {
    setShowCriteriaStrategic(!showCriteriaStrategic);
  };

  const showPsychologic = () => {
    setShowCriteriaPsychologic(!showCriteriaPsychologic);
  };

  useEffect(() => {
    FetchCriteria();
  }, []);

  const decrement = (score, id) => {
    score--;
    if (score <= 1) {
      score = 1;
    }
    const newList = listCriteria.map((criteria) => {
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
    const newList = listCriteria.map((criteria) => {
      if (criteria.id === id) {
        criteria.score = score;
      }
      return criteria;
    });
    setListCriteria(newList);
  };

  const setDescription = (value, description, id) => {
    console.log("value", value, "description", description, "id", id);
    const newList = listCriteria.map((criteria) => {
      if (criteria.id === id) {
        console.log("id = ", id);
        criteria.description = value;
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
    const newEvaluation = listCriteria.map((criteria) => {
      return {
        PlayerId: playerInfo.id,
        CriterionId: criteria.id,
        score: criteria.score,
        date: date,
        description: criteria.description,
        audio: criteria.audio,
        video: criteria.video,
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
        {/* <AppButton title="Tout" onPress={() => showAll()}></AppButton> */}
        <AppButton title="Physique" onPress={() => showPhysics()}></AppButton>
        {showCriteriaPhysic && listCriteria.length ? (
          <FlatList
            data={listCriteria}
            keyExtractor={(criteria) => {
              return criteria.id.toString();
            }}
            renderItem={({ item }) => {
              if (item.groupe == "Physique") {
                return (
                  <ButtonModal
                    title={item.name + " : " + item.score}
                    style={styles.modal}
                  >
                    <View style={styles.modalContainer}>
                      <AppText style={styles.modalText}>{item.name}</AppText>
                      <View style={styles.modalScoreContainer}>
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
                      <View style={styles.modalDescritpion}>
                        <AppTextInput
                          placeholder={
                            item.description ? item.description : "description"
                          }
                          onChangeText={(value) =>
                            setDescription(value, item.description, item.id)
                          }
                          style={styles.description}
                        />
                      </View>
                    </View>
                  </ButtonModal>
                );
              }
            }}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}></AppText>
        )}

        <AppButton title="Technique" onPress={() => showTechnic()}></AppButton>
        {showCriteriaTechnic && listCriteria.length ? (
          <FlatList
            data={listCriteria}
            keyExtractor={(criteria) => {
              return criteria.id.toString();
            }}
            renderItem={({ item }) => {
              if (item.groupe == "Technique") {
                return (
                  <ButtonModal
                    title={item.name + " : " + item.score}
                    style={styles.modal}
                  >
                    <View style={styles.modalContainer}>
                      <AppText style={styles.modalText}>{item.name}</AppText>
                      <View style={styles.modalScoreContainer}>
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
                      <View style={styles.modalDescritpion}>
                        <AppTextInput
                          placeholder={
                            item.description ? item.description : "description"
                          }
                          onChangeText={(value) =>
                            setDescription(value, item.description, item.id)
                          }
                          style={styles.description}
                        />
                      </View>
                    </View>
                  </ButtonModal>
                );
              }
            }}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}></AppText>
        )}

        <AppButton
          title="Stratégique"
          onPress={() => showStrategic()}
        ></AppButton>
        {showCriteriaStrategic && listCriteria.length ? (
          <FlatList
            data={listCriteria}
            keyExtractor={(criteria) => {
              return criteria.id.toString();
            }}
            renderItem={({ item }) => {
              if (item.groupe == "Stratégique") {
                return (
                  <ButtonModal
                    title={item.name + " : " + item.score}
                    style={styles.modal}
                  >
                    <View style={styles.modalContainer}>
                      <AppText style={styles.modalText}>{item.name}</AppText>
                      <View style={styles.modalScoreContainer}>
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
                      <View style={styles.modalDescritpion}>
                        <AppTextInput
                          placeholder={
                            item.description ? item.description : "description"
                          }
                          onChangeText={(value) =>
                            setDescription(value, item.description, item.id)
                          }
                          style={styles.description}
                        />
                      </View>
                    </View>
                  </ButtonModal>
                );
              }
            }}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}></AppText>
        )}

        <AppButton
          title="Psychologique"
          onPress={() => showPsychologic()}
        ></AppButton>
        {showCriteriaPsychologic && listCriteria.length ? (
          <FlatList
            data={listCriteria}
            keyExtractor={(criteria) => {
              return criteria.id.toString();
            }}
            renderItem={({ item }) => {
              if (item.groupe == "Psychologique") {
                return (
                  <ButtonModal
                    title={item.name + " : " + item.score}
                    style={styles.modal}
                  >
                    <View style={styles.modalContainer}>
                      <AppText style={styles.modalText}>{item.name}</AppText>
                      <View style={styles.modalScoreContainer}>
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
                      <View style={styles.modalDescritpion}>
                        <AppTextInput
                          placeholder={
                            item.description ? item.description : "description"
                          }
                          onChangeText={(value) =>
                            setDescription(value, item.description, item.id)
                          }
                          style={styles.description}
                        />
                      </View>
                    </View>
                  </ButtonModal>
                );
              }
            }}
          ></FlatList>
        ) : (
          <AppText style={styles.infoText}></AppText>
        )}

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
          <View style={styles.sousTitreContainer}>
            <AppText style={styles.sousTitre}>1-2 : mauvais</AppText>
            <AppText style={styles.sousTitre}>3-5 : peu convaincant</AppText>
            <AppText style={styles.sousTitre}>6-8 : correct</AppText>
            <AppText style={styles.sousTitre}>9-10 : accompli</AppText>
          </View>
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
  description: {
    width: "100%",
  },
  infoText: {
    color: "white",
    fontSize: 15,
  },
  modal: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  modalCrement: {
    height: 35,
    fontSize: 20,
  },
  modalDescritpion: {
    display: "flex",
    height: 500,
    marginLeft: "0%",
    width: "100%",
  },
  modalScoreContainer: {
    display: "flex",
    flexDirection: "row",
  },
  modalInfo: {
    backgroundColor: "black",
    alignItems: "center",
  },
  modalText: {
    color: "white",
    fontSize: 45,
  },
  sousTitreContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  sousTitre: {
    color: "white",
    fontSize: 25,
  },
  textCriteria: {
    color: "white",
    fontSize: 18,
  },
  titre: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
  },
});

export default PlayerEvaluationScreen;
