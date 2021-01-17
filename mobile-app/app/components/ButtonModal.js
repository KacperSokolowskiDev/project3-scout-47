import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constant from "expo-constants";
//import Modal from "react-native-modal";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function ButtonModal({ children, title, style, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <AppText style={styles.title}>{title}</AppText>
      </TouchableWithoutFeedback>

      <Modal
        animationType="Slide"
        presentationStyle="Slide"
        visible={modalVisible}
      >
        <View style={[styles.container, style]}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          {children}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constant.statusBarHeight,
    height: "100%",
  },
  title: {
    color: defaultStyles.colors.white,
  },
});

export default ButtonModal;
