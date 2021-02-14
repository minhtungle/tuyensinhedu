import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text } from "react-native";
function Huongdandangkytructuyen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Hướng dẫn đăng ký ",
    });
  });
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Hướng dẫn đăng ký trực tuyến</Text>
    </SafeAreaView>
  );
}
export default Huongdandangkytructuyen;
