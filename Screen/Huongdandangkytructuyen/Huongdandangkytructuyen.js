import React, { useLayoutEffect } from "react";
import AnimatedEllipsis from "react-native-animated-ellipsis";
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
function Huongdandangkytructuyen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Hướng dẫn đăng ký ",
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.block}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DEEBFE",
  },
  main: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEEBFE",
    height: 500,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  block: {
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    alignItems: "center",
    //* bóng mờ
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default Huongdandangkytructuyen;
