import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ButtonModal from "../components/ButtonModal";
import defaultColor from "../config/color";
import PlayerProfileCard from "../components/PlayerProfileCard";
import Screen from "../components/Screen";

function PlayerProfileScreen({ playerInfo, navigation }) {
  return (
    <Screen>
      <View>
        <PlayerProfileCard playerInfo={playerInfo} />
      </View>

      <Button
        style={{ color: "white", width: 10 }}
        title="info"
        onPress={() => {
          console.log(playerInfo);
        }}
      />

      <ButtonModal
        style={{ backgroundColor: "black" }}
        title={
          <MaterialCommunityIcons
            name="school"
            size={50}
            color={defaultColor.primary}
          />
        }
      >
        <Button title={"Telecharger bulletin"}></Button>
      </ButtonModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: { height: 100, width: 100 },
  school: {
    backgroundColor: defaultColor.primary,
    borderRadius: 25,
    width: 50,
  },
  text: {
    color: "white",
  },
});

export default PlayerProfileScreen;
