import { Button } from "galio-framework";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { Alert } from "../../assets/components/index";

export function Images(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const json = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4",
    },
    {
      id: 5,
      name: "5",
    },
  ];
  const json1 = [
    {
      id: 1,
      name: "1",
    },
  ];
  const KiemtraNV = (itemChild) => {
    return json1.some((item) => item.id == itemChild.id);
  };
  const Type = {
    success: {
      color: "#9CDC78",
      image: "emoticon-excited",
    },
    error: {
      color: "#FF8E9E",
      image: "emoticon-confused",
    },
    waring: {
      color: "#F8C03E",
      image: "emoticon-tongue-outline",
    },
    info: {
      color: "#84AFF7",
      image: "emoticon-wink-outline",
    },
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setAlert(true)}>Alert</Button>
      <Button onPress={() => setModalVisible(true)}>Modal</Button>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: "#9CDC78",
              margin: 20,
              borderRadius: 20,
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
            <IconButton
              icon="close"
              color="white"
              size={22}
              style={{
                backgroundColor: "#9CDC78",
                alignSelf: "flex-end",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,

                elevation: 10,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
            {/* Body Alert*/}
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <View>
                <IconButton
                  icon="emoticon-wink-outline"
                  color="white"
                  size={100}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 15,
                    alignSelf: "center",
                    width: 45,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: "black",
                    opacity: 0.1,
                    transform: [{ scaleX: 2 }],
                  }}
                />
              </View>
              <Text style={styles.title}>THÀNH CÔNG !</Text>
            </View>
          </View>
        </View>
      </Modal>
      <Alert title="Hello" visible={alert} type="error"></Alert>
      {json.map((item, index) => {
        return (
          !KiemtraNV(item) && (
            <Text key={index}>
              ID: {item.id}
              {"\n"}Name: {item.name}
            </Text>
          )
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    flexGrow: 1,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

export default Images;
