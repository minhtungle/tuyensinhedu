import * as React from "react";
import { Button, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Huongdandangkytructuyen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Hướng dẫn đăng ký trực tuyến</Text>
    </SafeAreaView>
  );
}
export default Huongdandangkytructuyen;
