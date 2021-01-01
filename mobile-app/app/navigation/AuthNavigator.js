import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AddClubScreen,
  AddPlayerScreen,
  ListPlayerScreen,
  LoginScreen,
  PlayerProfileScreen,
} from "../screens";
import PlayerNavigator from "../navigation/PlayerNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PlayersListScreen" component={ListPlayerScreen} />
      <Stack.Screen name="AddPlayer" component={AddPlayerScreen} />
      <Stack.Screen name="AddClub" component={AddClubScreen} />
      <Stack.Screen name="PlayerPage" component={PlayerNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
