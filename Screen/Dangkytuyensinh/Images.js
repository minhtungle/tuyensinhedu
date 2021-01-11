import React, { Component, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

export function Images() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AwesomeButton
        progress
        onPress={(next) => {
          setModalVisible(true);
          next();
        }}
      >
        Text
      </AwesomeButton>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            width: "95%",
            backgroundColor: "#eff8ff",
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F194FF",
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#2196F3",
                width: "40%",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Quay lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F194FF",
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#2196F3",
                width: "40%",
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Đồng ý
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderBottomColor: "red",
    zIndex: 1,
  },
});

export default Images;
