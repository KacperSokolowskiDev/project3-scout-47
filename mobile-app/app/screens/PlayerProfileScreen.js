import React from "react";
import { Button, Text, View } from "react-native";

function PlayerProfileScreen({ navigation }) {
  return (
    <View>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        Player profile Screen
      </Text>
      <Button title="Go Login page" onPress={() => navigation.popToTop()} />
      <Button
        title="Go List Page"
        onPress={() => navigation.navigate("Login")}
      />
      <Button title="Go Previous Page" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default PlayerProfileScreen;
