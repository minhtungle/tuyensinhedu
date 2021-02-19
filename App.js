import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
//* Screen
import {
  Dangkytuyensinh,
  Dangnhap,
  Gopy,
  Huongdandangkytructuyen,
  Quydinhtuyensinh,
  Thongtintuyensinh,
  Tracuuketquatuyensinh,
  Trangchu,
  Trangdangky,
} from "./Screen/index";

const ScreenStyle = {
  headerTitleStyle: {
    alignSelf: "center",
    marginRight: "18%",
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

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
