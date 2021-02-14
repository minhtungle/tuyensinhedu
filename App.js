import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { Colors, IconButton } from "react-native-paper";
//* Screen
import {
  Dangkytuyensinh,
  Dangnhap,
  Gopy,
  Huongdandangkytructuyen,
  Quydinhtuyensinh,
  Thongtintuyensinh,
  Tracuuketquatuyensinh,
  Trangdangky,
} from "./Screen/index";
//* Trang chủ
import Wallet from "./Wallet/Trangchu";

const ScreenStyle = {
  headerTitleStyle: {
    alignSelf: "center",
    marginRight: "18%",
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
// Trang chủ
function Trangchu({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const { Tinh } = route.params;
  return (
    <SafeAreaView>
      <View
        style={{
          position: "absolute",

          right: 0,
          top: 0,
          zIndex: 1,
          opacity: 0.9,
          paddingTop: 10,
          paddingRight: 10,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",

            borderRadius: 25,
            backgroundColor: "#FFF",
            alignSelf: "flex-end",
            justifyContent: "center",
          }}
        >
          <IconButton icon="factory" color={Colors.red500} size={16} />
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: "bold",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            {Tinh}
          </Text>
          <IconButton
            icon="close"
            color={Colors.red500}
            size={18}
            style={{
              backgroundColor: "#FFF",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 8,

              elevation: 1.5,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <ImageBackground
        source={require("./assets/background.png")}
        style={{ width: "100%", height: "100%" }}
        blurRadius={1.5}
      >
        <Wallet />
      </ImageBackground>
    </SafeAreaView>
  );
}
// <Wallet/>
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Đăng nhập" screenOptions={ScreenStyle}>
        {/* Đăng nhập */}
        <Stack.Screen name="Đăng nhập" component={Dangnhap} />
        {/* Trang chủ */}
        <Stack.Screen name="Trang chủ" component={Trangchu} />
        {/* Quy định tuyển sinh */}
        <Stack.Screen name="Quy định tuyển sinh" component={Quydinhtuyensinh} />
        {/* Thông tin tuyển sinh */}
        <Stack.Screen
          name="Thông tin tuyển sinh"
          component={Thongtintuyensinh}
        />
        {/* Đăng ký tuyển sinh */}
        <Stack.Screen name="Đăng ký tuyển sinh" component={Dangkytuyensinh} />
        <Stack.Screen name="Trang đăng ký" component={Trangdangky} />
        {/* Tra cứu kết quả tuyển sinh */}
        <Stack.Screen
          name="Tra cứu kết quả tuyển sinh"
          component={Tracuuketquatuyensinh}
        />
        {/* Hướng dẫn đăng ký trực tuyến */}
        <Stack.Screen
          name="Hướng dẫn đăng ký trực tuyến"
          component={Huongdandangkytructuyen}
        />
        {/* Góp ý */}
        <Stack.Screen name="Góp ý" component={Gopy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
