import { StyleSheet } from "react-native";
import Constant from "expo-constants";
import defaultStyles from "../../config/color";

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "#6CDCA1",
    position: "absolute",
    alignSelf: "flex-start",
    top: "90%",
    right: "6%",
  },
  container2: {
    paddingTop: Constant.statusBarHeight,
    height: "100%",
  },
  title: {
    display: "flex",
    //color: defaultStyles.colors.white,
    fontSize: 25,
  },
  modalContainer: { flex: 1, alignItems: "center", backgroundColor: "black" },
});
export default styles;
