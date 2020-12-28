import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AddPlayerScreen,
  ListPlayerScreen,
  LoginScreen,
  PlayerProfileScreen,
} from "./app/screens";

const Stack = createStackNavigator();

function App() {
  return (
    /* Navigation Container allows to set the differents path of the screens of the app */
    <NavigationContainer>
      {/* initialRouteName => the first screen to be display */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="List Player" component={ListPlayerScreen} />
        <Stack.Screen name="Player Profile" component={PlayerProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
