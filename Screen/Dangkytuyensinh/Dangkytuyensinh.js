import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import AnimatedEllipsis from "react-native-animated-ellipsis";

export default function Dangkytuyensinh() {
  const navigation = useNavigation();
  const [status, setStatus] = useState(0);
  const image = [
    require("./img/c0.jpg"),
    require("./img/c1.png"),
    require("./img/c2.jpg"),
    require("./img/c3.png"),
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://tuyensinh.huongvietedm.vn/api/TSAPIService/getkythi")
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: index + 1,
            TenKyThi: item.TenKyThi,
            TrangThai: item.TrangThai,
            DoiTuongTuyenSinh: item.DoiTuongTuyenSinh,
            IDKyThi: item.ID,
          };
          arrData.push(obj);
        });
        setData(arrData);
        setStatus(1);
      })
      .catch((error) => {
        setStatus(-1);
        setData([]);
      });
  }, []);
  const Load_View = () => {
    return (
      <SafeAreaView style={styles.container}>
        <AnimatedEllipsis
          numberOfDots={3}
          minOpacity={0.4}
          animationDelay={200}
          style={{
            color: "#61b15a",
            fontSize: 100,
            letterSpacing: -15,
          }}
        />
      </SafeAreaView>
    );
  };
  const Success_View = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.block}>
          {data.map((item, index) => (
            <View style={styles.box} key={index}>
              <View style={styles.image}>
                <Image
                  source={
                    item.DoiTuongTuyenSinh == 0
                      ? image[0]
                      : item.DoiTuongTuyenSinh == 1
                      ? image[1]
                      : item.DoiTuongTuyenSinh == 2
                      ? image[2]
                      : image[3]
                  }
                  style={styles.image}
                  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
                />
              </View>

              <Text style={styles.text}>{item.TenKyThi}</Text>

              <Button
                round
                title="Đăng ký"
                style={styles.button}
                color={item.TrangThai === 1 ? "#61b15a" : "#fc8621"}
                onPress={() => {
                  item.TrangThai === 1
                    ? navigation.navigate("Trangdangky", {
                        DoiTuongTuyenSinh: item.DoiTuongTuyenSinh,
                        IDKyThi: item.IDKyThi,
                      })
                    : null;
                }}
              >
                <Text style={{ color: "white" }}>
                  {item.TrangThai === 1 ? "Đăng ký" : "Hết hạn"}
                </Text>
              </Button>
            </View>
          ))}
        </View>
      </SafeAreaView>
    );
  };
  const Error_View = () => {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground
          source={require("./img/error.png")}
          style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
          blurRadius={2}
        >
          <Text
            style={{
              color: "white",
              fontSize: 42,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#000000a0",
            }}
          >
            Không có kỳ tuyển sinh nào trong khoảng thời gian này
          </Text>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  return status === 0 ? (
    <Load_View />
  ) : status === 1 ? (
    <Success_View />
  ) : (
    <Error_View />
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEEBFE",
  },
  block: {
    width: "100%",
    alignItems: "center",
    marginBottom: "10%",
  },
  box: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    margin: "2%",
    backgroundColor: "#FFFF",
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
  image: {
    marginLeft: 3,
    borderRadius: 75,
    minWidth: 50,
    minHeight: 50,
    maxWidth: 50,
    maxHeight: 50,
  },
  text: {
    flexShrink: 1,

    paddingLeft: 20,
    alignItems: "stretch",
    flexGrow: 1,
    fontSize: 20,
  },
  button: {
    marginRight: "0%",
    maxWidth: "30%",
    borderRadius: 25,
    textShadowColor: "#bbbbbb",

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
