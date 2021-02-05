import React, { useState } from "react";
import { AsyncStorage, Image, StyleSheet, View } from "react-native";
//import { AsyncStorage } from "@react-native-community/async-storage";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import axios from "axios";

function LoginScreen({ navigation }) {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log("email", email, "password", password);
    try {
      let result = await axios({
        method: "POST",
        url: "http://192.168.50.74:5000/api/users/login",
        headers: { "Content-Type": " application/json" },
        data: { email: email, password: password },
      });

      await AsyncStorage.setItem("token", JSON.stringify(result.data.token));

      console.log("hey", result.data);
      navigation.navigate(routes.PLAYERSLISTSCREEN);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/scout47Logo.png")}
      />
      <View>
        <AppTextInput
          icon="account"
          placeholder="Username"
          onChangeText={(value) => setMail(value)}
        />
        <AppTextInput
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <AppButton title="Login" onPress={() => handleSubmit()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    backgroundColor: "red",
    color: "white",
  },
});
export default LoginScreen;
