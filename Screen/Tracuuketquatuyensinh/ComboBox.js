import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Button } from "galio-framework";
import Inputs from "./Input";

import { useNavigation } from "@react-navigation/native";

export default function ComboBox() {
  //* State :
  const navigation = useNavigation();
  const [checkboxValue, setCheckboxValue] = useState([
    {
      label: "Mã hồ sơ tuyển sinh",
      value1: "",
      type: "1",
      checked: true,
    },
    { label: "Mã học sinh", value1: "", value2: "", type: "2", checked: false },
    {
      label: "Số báo danh (Nếu có)",
      value1: "",
      type: "3",
      checked: false,
    },
  ]);
  const [data, setData] = useState();
  //* Lấy API
  const getApi = async (type, value1, value2) => {
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
    const URL = `http://tuyensinh.huongvietedm.vn/api/TSAPIService/tracuuketqua?type=${type}&mahoso=${mahoso}&mahocsinh=${mahocsinh}&matkhau=${matkhau}&sbd=${sbd}`;
    const results = await fetch(URL).then((x) => x.json());
    let a = results.Result.data;

    setData(a);
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

  //* Sự kiện cho nút Tra cứu
  const onSubmit = () => {
    let type = "",
      value1 = "",
      value2 = "";

    let check = false; // Khi có box được check
    let status = false; // Khi thông tin nhập đầy đủ

    for (var i = 0; i < checkboxValue.length; i++) {
      if (checkboxValue[i].checked) {
        check = true;
        EmptyOrNot(i)
          ? (status = false)
          : ((type = checkboxValue[i].type),
            (value1 = checkboxValue[i].value1),
            (value2 = checkboxValue[i].value2),
            getApi(type, value1, value2),
            (status = true));
      }
    }
    // return check ? (status ? true : false) : false;
    return { check, status };
  };
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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.block}>
        <View style={styles.checkBoxContainer}>
          {/* Checkbox */}
          {checkboxValue.map((checkbox, i) => (
            <View key={i} style={styles.perCheckContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checkbox.checked}
                tintColors={{ true: "#ff4646", false: "#008577" }}
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
          <Button
            round
            style={styles.button}
            color="#61b15a"
            onPress={() => {
              let submit = onSubmit();
              submit.check
                ? submit.status
                  ? data != null || undefined
                    ? navigation.navigate("Ketqua", {
                        data: data,
                      })
                    : Alert.alert(
                        "Không tồn tại kết quả tra cứu ! Vui lòng kiểm tra lại thông tin đã nhập "
                      )
                  : Alert.alert(
                      "Mời bạn nhập đầy đủ thông tin trước khi tra cứu"
                    )
                : Alert.alert("Mời bạn chọn loại tra cứu trước");
            }}
            // onPress={() => navigation.navigate("Images")}
          >
            Tra cứu
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
    textShadowColor: "black",
    backgroundColor: "#008577",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
