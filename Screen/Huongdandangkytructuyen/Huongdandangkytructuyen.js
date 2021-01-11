import * as React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Huongdandangkytructuyen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hướng dẫn đăng ký trực tuyến</Text>
    </View>
  );
}
export default Huongdandangkytructuyen;
