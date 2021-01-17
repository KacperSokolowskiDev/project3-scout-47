import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  PlayerEvaluationScreen,
  PlayerProfileScreen,
  PlayerAgendaScreen,
  PlayerMatchScreen,
} from "../screens/index";
import defaultColor from "../config/color";

const Tab = createBottomTabNavigator();

function PlayerNavigator({ route }) {
  const { item } = route.params;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: defaultColor.primary,
        activeTintColor: defaultColor.white,
        inactiveBackgroundColor: defaultColor.secondary,
        inactiveTintColor: defaultColor.medium,
      }}
    >
      <Tab.Screen
        name="Profile"
        children={() => <PlayerProfileScreen playerInfo={item} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Evaluations"
        children={() => <PlayerEvaluationScreen playerInfo={item} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        children={() => <PlayerMatchScreen playerInfo={item} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        children={() => <PlayerAgendaScreen playerInfo={item} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PlayerNavigator;
