import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./app/navigation/AuthNavigator";

const Stack = createStackNavigator();

function App() {
  return (
    /* Navigation Container allows to set the differents path of the screens of the app */
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
