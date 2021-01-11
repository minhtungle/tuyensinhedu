import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Text,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.7;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    // justifyContent: "center",
  },
  textMain: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2%",
    padding: "2%",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  textSub: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: "5%",
    padding: "2%",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    borderRadius: 20,
  },
});
export var Cards;
(function (Cards) {
  Cards[(Cards["Card1"] = 0)] = "Card1";
  Cards[(Cards["Card2"] = 1)] = "Card2";
  Cards[(Cards["Card3"] = 2)] = "Card3";
  Cards[(Cards["Card4"] = 3)] = "Card4";
  Cards[(Cards["Card5"] = 4)] = "Card5";
  Cards[(Cards["Card6"] = 5)] = "Card6";
})(Cards || (Cards = {}));

export default ({ type }) => {
  const navigation = useNavigation();
  let source;
  let page;
  let title;
  let textSub;
  switch (type) {
    case Cards.Card1:
      page = "Quy định tuyển sinh";
      title = "Quy định \ntuyển sinh";
      textSub = "Các bài viết liên quan đến luật";
      source = require("../assets/blue.jpg");
      break;
    case Cards.Card2:
      page = "Thông tin tuyển sinh";
      title = "Thông tin \ntuyển sinh";
      textSub = "Thông tin, phân tuyến, chỉ tiêu kế hoạch từng trường";
      source = require("../assets/yellow.jpg");
      break;
    case Cards.Card3:
      page = "Đăng ký tuyển sinh";
      title = "Đăng ký \ntuyển sinh";
      textSub = "Tuyển sinh đầu cấp cho học sinh";
      source = require("../assets/pink.jpg");
      break;
    case Cards.Card4:
      page = "Tra cứu kết quả tuyển sinh";
      title = "Tra cứu kết quả tuyển sinh";
      textSub = "Tra cứu kết quả tuyển sinh";
      source = require("../assets/purple.jpg");
      break;
    case Cards.Card5:
      page = "Hướng dẫn đăng ký trực tuyến";
      title = "Hướng dẫn đăng ký trực tuyến";
      textSub = "Hướng dẫn đăng ký trực tuyến";
      source = require("../assets/orange.jpg");
      break;
    case Cards.Card6:
      page = "Góp ý";
      title = "Góp ý";
      textSub = "Tổng hợp các ý kiến phản ánh của công dân";
      source = require("../assets/white.jpg");
      break;
    default:
      throw Error("Không nhận diện được ảnh");
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(page);
      }}
    >
      <ImageBackground
        style={styles.card}
        {...{ source }}
        imageStyle={styles.image}
        blurRadius={1.5}
      >
        <Text style={styles.textMain}>{title}</Text>
        <Text style={styles.textSub}>{textSub}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
