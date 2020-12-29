import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constant from "expo-constants";

import AppText from "./AppText";

function ButtonModal({ children, title, style, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <AppText style={styles.title}>{title}</AppText>
      </TouchableWithoutFeedback>

      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.container}>
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
  },
  title: {
    color: "white",
  },
});

export default ButtonModal;
