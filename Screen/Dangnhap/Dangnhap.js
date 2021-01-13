import React from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default class Dangnhap extends React.Component {
  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#eee",
          }}
          source={require("./assets/loading_begin_.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
