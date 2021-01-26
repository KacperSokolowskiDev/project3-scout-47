import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// Local imports
import styles from "./style";
const AddButton = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <AntDesign name="plus" size={32} color="white" />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="Slide"
        presentationStyle="Slide"
        visible={modalVisible}
      >
        <View style={[styles.container2, styles.modalContainer]}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <Text style={{ color: "white" }}>ssss</Text>
        </View>
      </Modal>
    </>
  );
};
export default AddButton;
