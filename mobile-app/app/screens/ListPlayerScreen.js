import React from "react";
import { Button, View, Text } from "react-native";

function ListPlayerScreen({ navigation }) {
  return (
    <View>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        List of player Screen
      </Text>
      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Go to Card player"
        onPress={() => navigation.navigate("Player Profile")}
      />
    </View>
  );
}

export default ListPlayerScreen;
