import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Colors, IconButton } from "react-native-paper";
//* Screen
import {
  Dangnhap,
  Dangkytuyensinh,
  Trangdangky,
  Images,
  Thongtintuyensinh,
  Quydinhtuyensinh,
  Tracuuketquatuyensinh,
  Ketqua,
  Huongdandangkytructuyen,
  Gopy,
} from "./Screen/index";
//* Trang chủ
import Wallet from "./Wallet/Trangchu";

// Trang chủ
function Trangchu({ route }) {
  const navigation = useNavigation();
  const { Tinh } = route.params;
  return (
    <View>
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
          <IconButton
            icon="factory"
            color={Colors.red500}
            size={16}
            style={{}}
            onPress={() => {}}
          />
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
              shadowColor: "#c7cfb7",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 8,

              elevation: 10,
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
    </View>
  );
}
// <Wallet/>
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Đăng nhập"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* Đăng nhập */}
        <Stack.Screen
          name="Đăng nhập"
          component={Dangnhap}
          options={{
            headerShown: false,
          }}
        />
        {/* Trang chủ */}
        <Stack.Screen
          name="Trang chủ"
          component={Trangchu}
          // options={{
          //   title: "Trang chủ",
          //   headerStyle: {
          //     //  "#0a043c","#1f1d4a", "#eb2188", "#f855a8"
          //     backgroundColor: "#1f1d4a",
          //     borderBottomWidth: 0.25,
          //     borderBottomColor: "#e8e8e8",
          //   },
          //   headerTitleStyle: {
          //     alignSelf: "center",
          //     color: "#fff",
          //   },
          // }}
          options={{
            headerShown: false,
          }}
        />
        {/* Quy định tuyển sinh */}
        <Stack.Screen
          name="Quy định tuyển sinh"
          component={Quydinhtuyensinh}
          options={{
            title: "Quy định tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        {/* Thông tin tuyển sinh */}
        <Stack.Screen
          name="Thông tin tuyển sinh"
          component={Thongtintuyensinh}
          options={{
            title: "Thông tin tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        {/* Đăng ký tuyển sinh */}
        <Stack.Screen
          name="Đăng ký tuyển sinh"
          component={Dangkytuyensinh}
          options={{
            title: "Đăng ký tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Trangdangky"
          component={Trangdangky}
          options={{
            title: "Đăng ký",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Images"
          component={Images}
          options={{
            title: "Images",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        {/* Tra cứu kết quả tuyển sinh */}
        <Stack.Screen
          name="Tra cứu kết quả tuyển sinh"
          component={Tracuuketquatuyensinh}
          options={{
            title: "Tra cứu kết quả tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
            headerStyle: {
              //  "#0a043c","#1f1d4a", "#eb2188", "#f855a8"
            },
          }}
        />
        <Stack.Screen
          name="Ketqua"
          component={Ketqua}
          options={{
            title: "Kết quả",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        {/* Hướng dẫn đăng ký trực tuyến */}
        <Stack.Screen
          name="Hướng dẫn đăng ký trực tuyến"
          component={Huongdandangkytructuyen}
          options={{
            title: "Hướng dẫn đăng ký trực tuyến",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        {/* Góp ý */}
        <Stack.Screen
          name="Góp ý"
          component={Gopy}
          options={{
            title: "Góp ý",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
