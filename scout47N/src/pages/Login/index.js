import React, { useState } from 'react';
import { TextInput, Image, StyleSheet, View, Button } from 'react-native';
// import { AsyncStorage } from "@react-native-community/async-storage";

import AsyncStorage from '@react-native-async-storage/async-storage';

// import AppButton from "../components/AppButton";
// import TextInput from "../components/TextInput";
// import routes from "../navigation/routes";
// import Screen from "../components/Screen";
import axios from 'axios';

function LoginScreen({ navigation }) {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    console.log('email', email, 'password', password);
    try {
      let result = await axios({
        method: 'POST',
        url: 'http://192.168.50.74:5000/api/users/login',
        headers: { 'Content-Type': ' application/json' },
        data: { email: email, password: password },
      });

      await AsyncStorage.setItem('token', JSON.stringify(result.data.token));
      await AsyncStorage.setItem('user', JSON.stringify(result.data.user));

      console.log('hey', result.data);
      navigation.navigate('Main');
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/scout47Logo.png')}
      />
      <View style={styles.textInputContainer}>
        <TextInput
          icon="account"
          placeholder="Username"
          onChangeText={value => setMail(value)}
          style={styles.input}
        />
        <TextInput
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={value => setPassword(value)}
        />
      </View>

      <Button title="Login" onPress={() => handleSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(91, 87, 115)',
    height: 1000,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    // width: 200,
    // borderColor: 'black',
    // borderWidth: 1,
    // margin: 10,
    // color: 'black',

    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: 10,
    padding: 15,
    width: '85%',
  },
  textInputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default LoginScreen;
