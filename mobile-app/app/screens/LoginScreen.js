import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/scout47Logo.png")}
      />
      <View>
        <AppTextInput icon="account" placeholder="Username" />
        <AppTextInput icon="lock" placeholder="Password" />
      </View>

      <AppButton
        title="Login"
        onPress={() => navigation.navigate("List Player")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});
export default LoginScreen;
