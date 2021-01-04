import React from "react";
import { StyleSheet, View } from "react-native";

import PlayerProfileCard from "../components/PlayerProfileCard";
import Screen from "../components/Screen";

function PlayerProfileScreen({ playerInfo }) {
  return (
    <Screen>
      <View>
        <PlayerProfileCard
          firstname={playerInfo.firstname}
          lastname={playerInfo.lastname}
          picture={playerInfo.picture}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: { height: 100, width: 100 },
  text: {
    color: "white",
  },
});

export default PlayerProfileScreen;
