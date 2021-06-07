import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");
function Huongdandangkytructuyen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Hướng dẫn đăng ký ",
    });
  });
  const [images, setImages] = useState({
    b1: {
      uri: [require("./Images/b1.png")],
      activeImg: 0,
    },
    b2: {
      uri: [require("./Images/b2.png")],
      activeImg: 0,
    },
    b3: {
      uri: [require("./Images/b3.png")],
      activeImg: 0,
    },
    b4: {
      uri: [
        require("./Images/b4_1.png"),
        require("./Images/b4_2.png"),
        require("./Images/b4_3.png"),
        require("./Images/b4_4.png"),
        require("./Images/b4_5.png"),
        require("./Images/b4_6.png"),
        require("./Images/b4_7.png"),
      ],
      activeImg: 0,
    },
    b5: {
      uri: [require("./Images/b5_1.png"), require("./Images/b5_2.png")],
      activeImg: 0,
    },
    b6: {
      uri: [require("./Images/b6.png")],
      activeImg: 0,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.block}>
            <View>
              <View style={styles.title}>
                <Text style={styles.titleText}>Bước 1</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>
                  Tại màn hình trang chủ, chọn{" "}
                  <Text style={{ fontWeight: "bold" }}>Đăng ký tuyển sinh</Text>
                </Text>
                <Carousel
                  sliderWidth={(screenWidth * 70) / 100}
                  sliderHeight={200}
                  itemWidth={screenWidth - 60}
                  data={images.b4.uri}
                  renderItem={({ item, index }) => (
                    <Image source={item} style={styles.image} />
                  )}
                  style={styles.imageContainer}
                  startAutoplay={true}
                  layout={"stack"}
                  onSnapToItem={(index) =>
                    setImages((prev) => ({
                      ...prev,
                      b4: {
                        uri: prev.b4.uri,
                        activeImg: index,
                      },
                    }))
                  }
                />
                <Pagination
                  dotsLength={images.b4.uri.length}
                  activeDotIndex={images.b4.activeImg}
                  containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                  }}
                  inactiveDotStyle={
                    {
                      // Define styles for inactive dots here
                    }
                  }
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                />
              </View>
            </View>
          </View>
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
  block: {
    width: "95%",
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
  title: {
    backgroundColor: "#61b15a",
    borderRadius: 25,
    position: "relative",
    top: -15,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingBottom: 5,
  },
  titleText: {
    width: "50%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  box: {
    alignItems: "center",
  },
  boxText: {
    paddingHorizontal: 10,
  },
  field: {
    borderColor: "white",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 10,
    marginBottom: "1%",
  },
  imageContainer: {
    flex: 1,
    //marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    //backgroundColor: "green",
    borderRadius: 8,
  },
  image: {
    //...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    height: 450,
    width: 250,
  },
});
export default Huongdandangkytructuyen;
