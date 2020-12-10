import React from "react";
import { Button, Text, View } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        Login screen
      </Text>
      <Button
        title="Go to list of player"
        onPress={() => navigation.navigate("List Player")}
      />
    </View>
  );
}

export default LoginScreen;
