import React from "react";
import Constant from "expo-constants";
import { View, SafeAreaView, StyleSheet } from "react-native";

import colors from "../config/color";

// Component Screen which set the frame for every screen of the app
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: Constant.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
