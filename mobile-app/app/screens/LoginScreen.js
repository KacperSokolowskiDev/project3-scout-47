import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

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
        onPress={() => navigation.navigate(routes.PLAYERSLISTSCREEN)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 130,
    marginBottom: 50,
  },
});
export default LoginScreen;
