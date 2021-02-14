import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text } from "react-native";
function Gopy({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Góp ý",
    });
  });
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Góp ý</Text>
    </SafeAreaView>
  );
}
export default Gopy;
