import * as React from "react";
import { Button, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Gopy() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Góp ý</Text>
    </SafeAreaView>
  );
}
export default Gopy;
