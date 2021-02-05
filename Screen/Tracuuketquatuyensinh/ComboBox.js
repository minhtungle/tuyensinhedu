import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimatedEllipsis from "react-native-animated-ellipsis";
import CheckBox from "@react-native-community/checkbox";
import { Button } from "galio-framework";
import Inputs from "./Input";

export default function ComboBox() {
  //* State :
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [checkboxValue, setCheckboxValue] = useState([
    {
      label: "Mã hồ sơ tuyển sinh",
      value1: "",
      type: "1",
      checked: false,
    },
    { label: "Mã học sinh", value1: "", value2: "", type: "2", checked: false },
    {
      label: "Số báo danh (Nếu có)",
      value1: "",
      type: "3",
      checked: false,
    },
  ]);

  //#region API
  //* Lấy API
  const getApi = async (type, value1, value2) => {
    setLoading(true);
    let mahoso = "",
      mahocsinh = "",
      matkhau = "",
      sbd = "";
    switch (type) {
      case "1":
        mahoso = value1;
        break;
      case "2":
        mahocsinh = value1;
        matkhau = value2;
        break;
      case "3":
        sbd = value1;
        break;
      default:
        break;
    }
    await fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/tracuuketqua?type=${type}&mahoso=${mahoso}&mahocsinh=${mahocsinh}&matkhau=${matkhau}&sbd=${sbd}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        let result = responseJson.Result.data;
        result === null || undefined || ""
          ? (Alert.alert(
              "Không tồn tại kết quả tra cứu ! Vui lòng kiểm tra lại thông tin đã nhập "
            ),
            setData(null))
          : setData(result);
      })
      .catch(() => {
        Alert.alert(
          "Không tồn tại kết quả tra cứu ! Vui lòng kiểm tra lại thông tin đã nhập "
        );
        setData(null);
      });
    setLoading(false);
  };
  //#endregion

  //#region Xử lý điều kiện ô nhập
  //* Cập nhật value
  const updateValue = (value, valueIndex) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      return checkbox.checked
        ? valueIndex == 1
          ? {
              ...checkbox,
              value1: value,
            }
          : {
              ...checkbox,
              value2: value,
            }
        : {
            ...checkbox,
          };
    });
    setCheckboxValue(newValue);
  };
  //* Chỉ cho check 1
  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        };
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        };
        return item;
      }
      return checkbox;
    });
    setCheckboxValue(newValue);
  };
  //TODO Kiểm tra lại điều kiện chỗ checkboxValue[1] tại sao chỉ check null của ô 1
  //* Kiểm tra value tại ô đó có rỗng không
  const EmptyOrNot = (i) => {
    return i == 0 || 2
      ? checkboxValue[i].value1 == ""
        ? true
        : false
      : checkboxValue[i].value1 == "" || checkboxValue[i].value2 == ""
      ? true
      : false;
  };
  //#endregion
  //* Tra cứu
  const Tracuu = () => {
    for (var i = 0; i < checkboxValue.length; i++) {
      if (checkboxValue[i].checked) {
        if (EmptyOrNot(i)) {
          return Alert.alert("Mời bạn nhập đầy đủ thông tin trước khi tra cứu");
        }
        return getApi(
          checkboxValue[i].type,
          checkboxValue[i].value1,
          checkboxValue[i].value2
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {loading && (
        <View style={{ position: "absolute", top: 5 }}>
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
        </View>
      )}
      <View style={styles.block}>
        <View style={styles.checkBoxContainer}>
          {/* Checkbox */}
          {checkboxValue.map((checkbox, i) => (
            <View key={i} style={styles.perCheckContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checkbox.checked}
                tintColors={{ true: "#61b15a", false: "#008577" }}
                onValueChange={(value) => checkboxHandler(value, i)}
              />
              <Text style={styles.label}>{"" + checkbox.label + ""}</Text>
            </View>
          ))}
        </View>
        {/* Input */}
        <View style={styles.inputContainer}>
          <Inputs checkboxValue={checkboxValue} updateValue={updateValue} />
        </View>
        {/* Button */}
        <View
          style={[styles.inputContainer, { borderSize: 0, borderColor: "" }]}
        >
          {checkboxValue.some((item) => item.checked) && (
            <Button
              round
              style={styles.button}
              color="#61b15a"
              onPress={() => {
                Keyboard.dismiss();
                Tracuu();
              }}
            >
              Tra cứu
            </Button>
          )}
          <Button
            round
            style={styles.button}
            color="#61b15a"
            onPress={() => console.log(data)}
          >
            Data
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff8ff",
  },
  block: {
    width: "90%",
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
  checkBoxContainer: {
    alignItems: "stretch",
    marginTop: "7%",
    width: "80%",
  },
  perCheckContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    alignItems: "stretch",
    flexDirection: "row",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  inputContainer: {
    alignItems: "stretch",
    width: "90%",
    margin: "2%",
  },
  checkbox: {
    margin: "4%",
  },
  label: {
    fontSize: 18,
    paddingTop: "5.7%",
  },
  button: {
    marginBottom: "5%",
    alignSelf: "center",
    borderRadius: 25,
    textShadowColor: "#bbbbbb",

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
