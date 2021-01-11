import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComboBox from "./ComboBox";

function Tracuuketquatuyensinh() {
  const navigation = useNavigation();
  return <ComboBox />;
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
});
export default Tracuuketquatuyensinh;
