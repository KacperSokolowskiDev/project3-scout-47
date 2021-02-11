import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeButtom from '../components/HomeButton';
import Players from '../pages/Players';
import Player from '../pages/Player';
import AddPlayer from '../pages/AddPlayer';
import Home from '../pages/Home';
import Agenda from '../pages/Agenda';
import Me from '../pages/Me';
import Evaluation from '../pages/Evaluation';
import LoginScreen from '../pages/Login';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const PlayersNavigator = () => {
  StatusBar.setBarStyle('dark-content');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Players" component={Players} />
      {/* <Stack.Screen name="AddClub" component={AddClubScreen} /> */}
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="AddPlayer" component={AddPlayer} />
      {/* <Stack.Screen name="AgendaPage" component={PlayerAgendaScreen} /> */}
    </Stack.Navigator>
  );
};
const AppRoutes: React.FC = () => {
  const [home, setHome] = useState(true);
  StatusBar.setBarStyle('dark-content');
  if (Platform.OS === 'android') StatusBar.setBackgroundColor('#fff');
  // if (home) {
  //   StatusBar.setHidden(true);
  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor('#fff');
  //     StatusBar.setBarStyle('light-content');
  //   }
  // } else {
  //   StatusBar.setHidden(false);
  // }
  return (
    <Tab.Navigator
      shifting={false}
      barStyle={{
        backgroundColor: '#28DF99',
      }}
      initialRouteName="Home"
      activeColor={'#fff'}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{
          focus: () => setHome(true),
          blur: () => setHome(false),
        }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersNavigator}
        options={{
          tabBarLabel: 'Players',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-check"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Evaluation}
        listeners={({ navigation }) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            // Do something with the `navigation` object
            navigation.navigate('Evaluation');
          },
        })}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="camera-enhance"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-blank"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const RootStackScreen: React.FC = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Main"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Evaluation"
        component={Evaluation}
      />
    </Stack.Navigator>
  );
};
export default RootStackScreen;