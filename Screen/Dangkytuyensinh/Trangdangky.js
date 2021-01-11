import CheckBox from "@react-native-community/checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import RadioButtonRN from "radio-buttons-react-native";
import { Button } from "galio-framework";
import { BlurView } from "expo-blur";

import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, IconButton } from "react-native-paper";

function useInput() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  return {
    date,
    showDatepicker,
    show,
    mode,
    onChange,
  };
}
const date = require("s-date");
export default function Trangdangky({ route }) {
  const { DoiTuongTuyenSinh, IDKyThi } = route.params;
  const navigation = useNavigation();

  //#region DatePicker
  const inputMe = useInput(new Date());
  const inputCon = useInput(new Date());
  const inputCha = useInput(new Date());
  const inputNGH = useInput(new Date());
  //#endregion

  const [data, setData] = useState({
    MaHocSinh: "",
    MatKhau: "",
    HoTen: "",
    NgaySinh: "",
    DanToc: "",
    GioiTinh: false,

    IDTinhNS: "",
    IDHuyenNS: "",
    IDXaNS: "",
    DiaChiNS: "",

    IDTinhTT: "",
    IDHuyenTT: "",
    IDXaNS: "",
    DiaChiTT: "",

    IDTinh: "",
    IDHuyen: "",
    IDXa: "",
    DiaChi: "",
    NguyenVong: [
      {
        IDTruong: "",
        MaTruong: "",
        TenTruong: "",
      },
    ], //Id, MaTruong
    DoiTuongUuTien: [],
    CoGiaiThuongQuocGia: false,
    DanhSachFileDinhKem: [],

    HoTenMe: "",
    NgaySinhMe: "",
    CMNDMe: "",

    HoTenCha: "",
    NgaySinhCha: "",
    CMNDCha: "",

    HoTenNguoiGiamHo: "",
    NgaySinhNguoiGiamHo: "",
    CMNDNguoiGiamHo: "",

    DienThoaiLienHe: "",
    MailLienHe: "",
  });
  //#region DropPicker: Dữ liệu - Thay đổi value khi chọn
  //* Dữ liệu trong dropDown
  const [picker, setPicker] = useState({
    DanToc: [
      {
        id: "",
        name: "Chọn dân tộc",
      },
      {
        id: "1",
        name: "Kinh",
      },
      {
        id: "2",
        name: "Tày",
      },
      {
        id: "3",
        name: "Thái",
      },
      {
        id: "4",
        name: "Mường",
      },
      {
        id: "5",
        name: "Khơ me",
      },
      {
        id: "6",
        name: "Hoa (Hán)",
      },
      {
        id: "7",
        name: "Nùng",
      },
      {
        id: "8",
        name: "H'mông (Mèo)",
      },
      {
        id: "9",
        name: "Dao",
      },
      {
        id: "10",
        name: "Gia - rai",
      },
      {
        id: "11",
        name: "Ê-đê",
      },
      {
        id: "12",
        name: "Ba-na",
      },
      {
        id: "13",
        name: "Sán Chay (Cao Lan-Sán Chỉ)",
      },
      {
        id: "14",
        name: "Chăm (Chàm)",
      },
      {
        id: "15",
        name: "Cơ-ho",
      },
      {
        id: "16",
        name: "Xơ-đăng",
      },
      {
        id: "17",
        name: "Sán Dìu",
      },
      {
        id: "18",
        name: "Hrê",
      },
      {
        id: "19",
        name: "Ra-glai",
      },
      {
        id: "20",
        name: "Mnông",
      },
      {
        id: "21",
        name: "Thổ (4)",
      },
      {
        id: "22",
        name: "XTiêng",
      },
      {
        id: "23",
        name: "Khơ-mú",
      },
      {
        id: "24",
        name: "Bru-Vân Kiều",
      },
      {
        id: "25",
        name: "Cơ-Tu",
      },
      {
        id: "26",
        name: "Giáy",
      },
      {
        id: "27",
        name: "Tà-ôi",
      },
      {
        id: "28",
        name: "Mạ",
      },
      {
        id: "29",
        name: "Gié-Triêng",
      },
      {
        id: "30",
        name: "Co",
      },
      {
        id: "31",
        name: "Chơ - ro",
      },
      {
        id: "32",
        name: "Xinh-mun",
      },
      {
        id: "33",
        name: "Hà Nhì",
      },
      {
        id: "34",
        name: "Chu - ru",
      },
      {
        id: "35",
        name: "Lào",
      },
      {
        id: "36",
        name: "La Chí",
      },
      {
        id: "37",
        name: "Kháng",
      },
      {
        id: "38",
        name: "Phù Lá",
      },
      {
        id: "39",
        name: "La Hủ",
      },
      {
        id: "40",
        name: "La Ha",
      },
      {
        id: "41",
        name: "Pà Thẻn",
      },
      {
        id: "42",
        name: "Lự",
      },
      {
        id: "43",
        name: "Ngái",
      },
      {
        id: "44",
        name: "Chứt",
      },
      {
        id: "45",
        name: "Lô Lô",
      },
      {
        id: "46",
        name: "Mảng",
      },
      {
        id: "47",
        name: "Cơ Lao",
      },
      {
        id: "48",
        name: "Bố Y",
      },
      {
        id: "49",
        name: "Cống",
      },
      {
        id: "50",
        name: "Si La",
      },
      {
        id: "51",
        name: "Pu Péo",
      },
      {
        id: "52",
        name: "Rơ - măm",
      },
      {
        id: "53",
        name: "Brâu",
      },
      {
        id: "54",
        name: "Ơ Đu",
      },
    ],
    // Nơi sinh
    IDTinhNS: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyenNS: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXaNS: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    // Thường trú
    IDTinhTT: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyenTT: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXaTT: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    // Nơi ở
    IDTinh: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyen: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXa: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    DoiTuongUuTien: [],
    NguyenVong: [],
  });
  const [DSdoituonguutien, setDSdoituonguutien] = useState([]);
  //* Chọn giá trị cho Picker
  const changeValuePicker = (arg) => {
    setData((prevState) => ({
      ...prevState,
      ...arg,
    }));
  };
  //#endregion

  //#region Ảnh: Thêm - Xóa
  //* Dữ liệu ảnh
  const [pickerResult, setPickerResult] = useState(null);
  //* Nén ảnh thành base64
  const _pickImg = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });

    setPickerResult({
      pickerResult,
    });
  };
  let imageUri = pickerResult
    ? `data:image/png;base64,${pickerResult.base64}`
    : null;
  imageUri && console.log({ uri: imageUri.slice(0, 100) });
  //#endregion

  //#region Nguyện Vọng: Thêm - Xóa - Sửa Value - List - Call API
  //* Data nguyện vọng
  // const [aa, setDaaata] = useState([
  //   {
  //     id: "Mã trường",
  //     name: "Tên",
  //   },
  // ]);
  //* Thêm nguyện vọng
  const ThemNV = () => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.concat([
        {
          IDTruong: "",
          MaTruong: "",
          TenTruong: "",
        },
      ]),
    }));
  };
  //* Xóa nguyện vọng
  const XoaNV = (indexParent) => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.filter((item, index) => {
        return index !== indexParent;
      }),
    }));
  };
  //* Thay đổi mã trường
  const ChangeMaTruong = (indexParent, itemParent, itemValue) => {
    let obj = {
      ...itemParent,
      IDTruong: itemValue.IDTruong,
      MaTruong: itemValue.MaTruong,
      TenTruong: itemValue.TenTruong,
    };
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.map((item, index) =>
        indexParent === index ? obj : item
      ),
    }));
  };
  const KiemtraNV = (itemChild) => {
    return data.NguyenVong.some((item) => item === itemChild);
  };
  //* List nguyện vọng
  const ListNV = () =>
    data.NguyenVong.map((itemParent, indexParent) => {
      return indexParent === 0 ? (
        //* Nguyện vọng mặc định
        <View
          style={{
            backgroundColor: "#d4e2d4",
            padding: 5,
            marginBottom: 15,
            flexDirection: "row",
          }}
          key={indexParent.toString()}
        >
          {/*------------- Left ----------------*/}
          <View
            style={{
              flexDirection: "column",
              flexGrow: 1,
              borderWidth: 1,
            }}
          >
            {/*--------- Top ---------*/}
            <View>
              <Text
                style={{
                  padding: 8,
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
                numberOfLines={1}
              >
                Nguyện vọng {indexParent + 1}
              </Text>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Picker
                selectedValue={data.NguyenVong[indexParent]}
                style={{ height: 40, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  ChangeMaTruong(indexParent, itemParent, itemValue)
                }
              >
                {picker.NguyenVong.map((itemChild, indexChild) => {
                  return (
                    <Picker.Item
                      key={indexChild.toString()}
                      label={itemChild.MaTruong + ": " + itemChild.TenTruong}
                      value={{
                        IDTruong: itemChild.IDTruong,
                        MaTruong: itemChild.MaTruong,
                        TenTruong: itemChild.TenTruong,
                      }}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          {/*------------- Right ----------------*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon="plus"
              color={Colors.red500}
              size={25}
              onPress={() => ThemNV()}
            />
          </View>
        </View>
      ) : (
        //*Nguyện vọng thêm
        <View
          style={{
            backgroundColor: "#fcf8e8",
            padding: 5,
            marginBottom: "2%",
            flexDirection: "row",
          }}
          key={indexParent.toString()}
        >
          {/*------------- Left ----------------*/}
          <View
            style={{
              flexDirection: "column",
              flexGrow: 1,
              borderWidth: 1,
            }}
          >
            {/*--------- Top ---------*/}
            <View>
              <Text
                style={{
                  padding: 8,
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
                numberOfLines={1}
              >
                Nguyện vọng {indexParent + 1}
              </Text>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Picker
                selectedValue={data.NguyenVong[indexParent]}
                style={{ height: 40, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  ChangeMaTruong(indexParent, itemParent, itemValue)
                }
              >
                {picker.NguyenVong.map((itemChild, indexChild) => {
                  return (
                    <Picker.Item
                      key={indexChild.toString()}
                      label={itemChild.MaTruong + ": " + itemChild.TenTruong}
                      value={{
                        IDTruong: itemChild.IDTruong,
                        MaTruong: itemChild.MaTruong,
                        TenTruong: itemChild.TenTruong,
                      }}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          {/*------------- Right ----------------*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon="minus"
              color={Colors.red500}
              size={25}
              onPress={() => XoaNV(indexParent)}
            />
          </View>
        </View>
      );
    });
  //#endregion

  //#region Pass - Modal : Ẩn hiện
  //* Ẩn hiện pass
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //* Ẩn hiện modal Đối tượng ưu tiên
  const [modalVisible, setModalVisible] = useState(false);
  //* Ẩn hiện modal Kiểm tra thông tin Đăng ký
  const [modal_KiemTraVisible, setModal_KiemTraVisible] = useState(false);
  //#endregion

  //#region API - Call:  tỉnh-huyện-xã
  //#region Tỉnh
  //* Tỉnh:
  useEffect(() => {
    fetch(
      "http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=1&level=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Tỉnh/Thành phố",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDTinhNS: arrData,
          IDTinhTT: arrData,
          IDTinh: arrData,
        }));
      })
      .catch((error) => {
        const arrDataFail = [
          {
            id: "",
            name: "Chọn Tỉnh/Thành phố",
          },
        ];
        setPicker((prevState) => ({
          ...prevState,
          IDTinhNS: arrDataFail,
          IDTinhTT: arrDataFail,
          IDTinh: arrDataFail,
        }));
      });
  }, [0]);
  //#endregion
  //#region Huyện
  //* Huyện NS
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyenNS: "", IDXaNS: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyenNS: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXaNS: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDTinhNS}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Quận/Huyện",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenNS: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenNS: [
            {
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinhNS]);
  //* Huyện TT
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyenTT: "", IDXaTT: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyenTT: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXaTT: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDTinhTT}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Quận/Huyện",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenTT: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenTT: [
            {
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinhTT]);
  //* Huyện
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyen: "", IDXa: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyen: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXa: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDTinh}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Quận/Huyện",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDHuyen: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyen: [
            {
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinh]);
  //#endregion
  //#region Xã
  //* Xã NS
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXaNS: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXaNS: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDHuyenNS}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Phường/Xã",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDXaNS: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXaNS: [
            {
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyenNS]);
  //* Xã TT
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXaTT: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXaTT: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDHuyenTT}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Phường/Xã",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDXaTT: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXaTT: [
            {
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyenTT]);
  //* Xã
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXa: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXa: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getaddress?idParent=${data.IDHuyen}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            name: "Chọn Phường/Xã",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDXa: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXa: [
            {
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyen]);
  //#endregion
  //#region Trường
  // useEffect(() => {
  //   fetch(
  //     `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getschools?idTinh_ThuongTru=${data.IDTinhTT}&Cap=${DoiTuongTuyenSinh}`
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       const arrData = [
  //         {
  //           id: "",
  //           idtruong: "",
  //           matruong: "",
  //           tentruong: "Chọn trường",
  //         },
  //       ];
  //       responseJson.Result.results.map((item, index) => {
  //         const obj = {
  //           id: index + 1,
  //           idtruong: item.ID,
  //           matruong: item.MaTruong,
  //           tentruong: item.TenTruong,
  //         };
  //         arrData.push(obj);
  //       });
  //       setPicker((prevState) => ({
  //         ...prevState,
  //         listTruong: arrData,
  //       }));
  //     })
  //     .catch((error) => error);
  // }, [data.IDTinhTT]);
  //#endregion
  //#region Đối tượng ưu tiên
  useEffect(() => {
    fetch("http://tuyensinh.huongvietedm.vn/api/TSAPIService/getdoituonguutien")
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [];
        responseJson.Result.results.map((itemParent, indexParent) => {
          const obj = {
            TenLoai: itemParent.TenLoai,
            lstDanhSach: itemParent.lstDanhSach.map(
              (itemChild, indexChild) => ({
                Ma: itemChild.Ma,
                Ten: itemChild.Ten,
                ID: itemChild.ID,
                check: false,
              })
            ),
          };
          arrData.push(obj);
        });
        setDSdoituonguutien(arrData);
      })
      .catch((error) => setDSdoituonguutien([]));
  }, [0]);
  //#endregion
  //#region Nguyện vọng
  useEffect(() => {
    fetch(
      `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getschools?idTinh_ThuongTru=${data.IDTinhTT}&Cap=${DoiTuongTuyenSinh}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            IDTruong: 0,
            MaTruong: "Chọn trường",
            TenTruong: "...",
          },
        ];
        responseJson.Result.results.map((item, index) => {
          // console.log(item);
          const obj = {
            IDTruong: item.ID,
            MaTruong: item.MaTruong,
            TenTruong: item.TenTruong,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          NguyenVong: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          NguyenVong: [
            {
              IDTruong: 0,
              MaTruong: "Chọn trường",
              TenTruong: "...",
            },
          ],
        }));
      });
  }, [data.IDTinhTT]);
  //#endregion
  //#endregion

  //#region Chọn loại ưu tiên
  //* Hàm xử lí thay đổi kiểu check (true/false)
  //#region Code cũ thêm - xóa loại ưu tiên
  // //* Thêm loại ưu tiên
  // const Them_DoiTuongUuTien = (indexParent, indexChild, value) => {
  //   // Chuyển kiểu check
  //   let DS = Check(indexParent, indexChild, value);
  //   setDSdoituonguutien(DS);
  //   // Thêm đối tượng vào danh sách đôi tượng
  //   setData((prevState) => ({
  //     ...prevState,
  //     DoiTuongUuTien: prevState.DoiTuongUuTien.concat({
  //       id: indexParent.toString() + indexChild.toString(),
  //       ma: DSdoituonguutien[indexParent].lstDanhSach[indexChild].Ma,
  //     }),
  //   }));
  // };
  // //* Xóa loại ưu tiên
  // const Xoa_DoiTuongUuTien = (indexParent, indexChild, value) => {
  //   // Chuyển kiểu check
  //   let DS = Check(indexParent, indexChild, value);
  //   setDSdoituonguutien(DS);
  //   // Xóa đối tượng khỏi danh sach đối tượng
  //   setData((prevState) => ({
  //     ...prevState,
  //     DoiTuongUuTien: prevState.DoiTuongUuTien.filter((item) => {
  //       return item.id !== indexParent.toString() + indexChild.toString();
  //     }),
  //   }));
  // };
  //#endregion
  const Check = (indexParent, indexChild, value) => {
    let arr = DSdoituonguutien.map(
      (item_DSdoituonguutien, index_DSdoituonguutien) =>
        index_DSdoituonguutien === indexParent
          ? {
              ...item_DSdoituonguutien,
              lstDanhSach: item_DSdoituonguutien.lstDanhSach.map(
                (lstDanhSach_item, lstDanhSach_index) =>
                  lstDanhSach_index === indexChild
                    ? {
                        ...lstDanhSach_item,
                        check: value,
                      }
                    : lstDanhSach_item
              ),
            }
          : item_DSdoituonguutien
    );
    setDSdoituonguutien(arr);
  };
  //* Thêm loại ưu tiên *
  const Them = () => {
    let arr = [];
    DSdoituonguutien.map((item_DSdoituonguutien, index_DSdoituonguutien) =>
      item_DSdoituonguutien.lstDanhSach
        .filter((item) => item.check != false)
        .map((lstDanhSach_item, lstDanhSach_index) =>
          arr.push({ ID: lstDanhSach_item.ID, Ma: lstDanhSach_item.Ma })
        )
    );
    // console.log(arr);
    setData((prevState) => ({
      ...prevState,
      DoiTuongUuTien: arr,
    }));
  };
  //* View DS đối tượng ưu tiên
  const DSDoiTuongUuTien = () => {
    return DSdoituonguutien.map((itemParent, indexParent) => {
      return (
        <View
          style={{
            paddingTop: 20,
            paddingVertical: 20,
            flexDirection: "column",
          }}
          key={indexParent.toString()}
        >
          <Text
            style={{
              color: Colors.red500,
              fontWeight: "bold",
              paddingLeft: 2,
            }}
          >
            ● {itemParent.TenLoai}
          </Text>
          {itemParent.lstDanhSach.map((itemChild, indexChild) => {
            return (
              <View
                style={{
                  marginVertical: 5,
                  backgroundColor: "#FFFFFF",
                  width: "90%",
                  borderColor: "#f1f1f1",

                  flexDirection: "row",
                  alignSelf: "center",
                  justifyContent: "flex-start",
                  padding: 5,
                  paddingRight: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,

                  elevation: 10,
                }}
                key={indexChild.toString()}
              >
                <CheckBox
                  style={{ alignSelf: "center" }}
                  value={itemChild.check}
                  tintColors={{ true: "#ff4646", false: "#008577" }}
                  onValueChange={(value) => {
                    Check(indexParent, indexChild, value);
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    flexShrink: 1,
                    textAlign: "justify",
                    flexGrow: 1,
                  }}
                >
                  {itemChild.Ma}-{itemChild.Ten}
                </Text>
              </View>
            );
          })}
        </View>
      );
    });
  };
  //#endregion

  //#region API - Push: Đăng ký
  //* Đăng ký
  const DangKy = async () => {
    const DataPush = {
      MaHocSinh: data.MaHocSinh || "bbbb", //string
      MatKhau: data.MatKhau || "matkhau", //string
      HoTen: data.HoTen || "hoten", //string
      NgaySinh: date("{dd}/{mm}/{yyyy}", inputCon.date), //string
      DanToc: data.DanToc || "dantoc", //string
      GioiTinh: data.GioiTinh, //bool

      IDTinhNS: parseInt(data.IDTinhNS, 10) || 1,
      IDHuyenNS: parseInt(data.IDHuyenNS, 10) || 1,
      IDXaNS: parseInt(data.IDXaNS, 10) || 1,
      DiaChiNS: data.DiaChiNS || "diachiNS", //string

      IDTinhTT: parseInt(data.IDTinhTT, 10) || 1,
      IDQuanTT: parseInt(data.IDHuyenTT, 10) || 1,
      IDXaTT: parseInt(data.IDXaTT, 10) || 1,
      DiaChiTT: data.DiaChiTT || "diachiTT", //string

      IDTinh: parseInt(data.IDTinh, 10) || 1,
      IDQuan: parseInt(data.IDHuyen, 10) || 1,
      IDPhuong: parseInt(data.IDXa, 10) || 1,
      DiaChi: data.DiaChi || "diachi", //string

      CoGiaiThuongQuocGia: data.CoGiaiThuongQuocGia,

      lstNguyenVong: data.NguyenVong,
      lstDoiTuongUuTien: data.DoiTuongUuTien,
      lstFileDinhKem: [],

      HoTenMe: data.HoTenMe || "hotenme", //string
      NamSinhMe: date("{dd}/{mm}/{yyyy}", inputMe.date), //string
      CMNDMe: data.CMNDMe || "cmndme", //string

      HoTenCha: data.HoTenCha || "hotencha", //string
      NamSinhCha: date("{dd}/{mm}/{yyyy}", inputCha.date), //string
      CMNDCha: data.CMNDCha || "cmndcha", //string

      HoTenNguoiGiamHo: data.HoTenNguoiGiamHo || "hotenNGH", //string
      NamSinhNguoiGiamHo: date("{dd}/{mm}/{yyyy}", inputNGH.date), //string
      CMNDNguoiGiamHo: data.CMNDNguoiGiamHo || "cmndNGH", //string

      DienThoai: data.DienThoaiLienHe || "dienthoai", //string
      Email: data.MailLienHe || "email", //string

      IDKyThi: IDKyThi,
    };
    console.log(DataPush);
    try {
      await fetch(
        "http://tuyensinh.huongvietedm.vn/api/TSAPIService/dangkytuyensinh",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(DataPush),
        }
      )
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson.Result));
    } catch (e) {
      console.log(e);
    }
  };
  //#endregion

  //#region Kiểm tra tất cả thông tin
  const TrangThai = () => {
    return ((data.MaHocSinh &&
      data.MatKhau &&
      data.HoTen &&
      data.DanToc &&
      data.IDTinhNS &&
      data.IDHuyenNS &&
      data.IDXaNS &&
      data.IDTinhTT &&
      data.IDHuyenTT &&
      data.IDXaTT &&
      data.IDTinh &&
      data.IDHuyen &&
      data.IDXa &&
      data.DienThoaiLienHe &&
      data.MailLienHe) != "" ||
      null) &&
      data.NguyenVong.length !== 0
      ? true
      : false;
  };
  const ModalKiemTraThongTin = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal_KiemTraVisible}
      >
        <BlurView
          style={[
            StyleSheet.absoluteFill,
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            },
          ]}
          intensity={200}
        >
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
            <ScrollView
              nestedScrollEnabled
              style={{ maxHeight: 500, padding: 15 }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "center",
                      fontSize: 18,
                      color: "#045762",
                    }}
                  >
                    THÔNG TIN HỌC SINH
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{ flex: 1, height: 1, backgroundColor: "black" }}
                    />
                  </View>
                  {/* Dữ liệu */}
                  <View
                    style={{
                      marginBottom: "2%",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      {/*Mã học sinh*/}
                      <View
                        style={{
                          marginTop: "5%",
                          width: "100%",
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>Mã học sinh:</Text>
                        <Text style={{ fontSize: 16 }}>{data.MaHocSinh}</Text>
                      </View>
                      {/*Mật khẩu*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Mật khẩu:</Text>
                        <Text style={{ fontSize: 16 }}>{data.MatKhau}</Text>
                      </View>
                      {/*Họ tên*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Họ tên:</Text>
                        <Text style={{ fontSize: 16 }}>{data.HoTen}</Text>
                      </View>
                      {/*Ngày sinh*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Ngày sinh:</Text>
                        <Text style={{ fontSize: 16 }}>
                          {date("{dd}/{mm}/{yyyy}", inputCon.date)}
                        </Text>
                      </View>
                      {/*Dân tộc*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Dân tộc:</Text>
                        <Text style={{ fontSize: 16 }}>{data.DanToc}</Text>
                      </View>
                      {/*Giới tính*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Giới tính:</Text>
                        <Text style={{ fontSize: 16 }}>{data.GioiTinh}</Text>
                      </View>
                      {/*Họ tên*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Họ tên:</Text>
                        <Text style={{ fontSize: 16 }}>{data.HoTen}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      {/*Quê quán*/}
                      <View
                        style={{
                          marginTop: "5%",
                          width: "100%",
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>Quê quán:</Text>
                        <Text style={{ fontSize: 16 }}>a</Text>
                      </View>
                      {/*Ngày nộp hồ sơ*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Ngày nộp hồ sơ:</Text>
                        <Text style={{ fontSize: 16 }}>a</Text>
                      </View>
                      {/*Trường đăng ký*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Trường đăng ký:</Text>
                        <Text style={{ fontSize: 16 }}>a</Text>
                      </View>
                      {/*Trạng thái hồ sơ*/}
                      <View style={{ marginTop: "5%", width: "100%" }}>
                        <Text style={{ fontSize: 16 }}>Trạng thái hồ sơ:</Text>
                        <Text style={{ fontSize: 16 }}>a</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
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
                  setModal_KiemTraVisible(!modal_KiemTraVisible);
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
                onPress={() => DangKy()}
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
        </BlurView>
      </Modal>
    );
  };
  //#endregion
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ width: "100%", height: "100%", backgroundColor: "#eff8ff" }}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <View style={styles.container}>
          {/* -------------Thông tin học sinh------------- */}
          <View style={styles.block}>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                borderColor: "white",
                borderRadius: 15,

                margin: 20,
                padding: "5%",

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#145374",
                    width: "100%",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  Thông tin học sinh
                </Text>
              </View>
              <View style={styles.box}>
                {/* Mã học sinh */}
                <View style={styles.field}>
                  <Text>
                    Mã học sinh <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ MaHocSinh: value })
                    }
                  >
                    {data.MaHocSinh}
                  </TextInput>
                </View>
                {/* Mật khẩu */}
                <View style={[styles.field, { marginBottom: "5%" }]}>
                  <Text>
                    Mật khẩu <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <TextInput
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                      secureTextEntry={secureTextEntry}
                      onChangeText={(value) =>
                        changeValuePicker({ MatKhau: value })
                      }
                    >
                      {data.MatKhau}
                    </TextInput>
                    <IconButton
                      icon="eye"
                      color={Colors.red500}
                      size={18}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  </View>
                </View>
                {/* Họ và tên */}
                <View style={styles.field}>
                  <Text>
                    Họ và tên <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ HoTen: value })
                    }
                  >
                    {data.HoTen}
                  </TextInput>
                </View>
                {/* Ngày sinh */}
                <View style={styles.field}>
                  <Text>
                    Ngày sinh <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",
                        fontSize: 18,
                        paddingLeft: 5,
                      }}
                    >
                      {date("{dd}/{mm}/{yyyy}", inputCon.date)}
                    </Text>
                    <IconButton
                      icon="calendar"
                      color={Colors.red500}
                      size={18}
                      onPress={inputCon.showDatepicker}
                    />
                    {inputCon.show && (
                      <DateTimePicker
                        testID="Con"
                        value={inputCon.date}
                        mode={inputCon.mode}
                        is24Hour={true}
                        display="default"
                        onChange={inputCon.onChange}
                      />
                    )}
                  </View>
                </View>
                {/* Dân tộc */}
                <View style={styles.field}>
                  <Text>
                    Dân tộc <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.DanToc}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ DanToc: itemValue })
                    }
                  >
                    {picker.DanToc.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.name}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/* Giới tính */}
                <View style={styles.field}>
                  <Text>Giới tính</Text>
                  <RadioButtonRN
                    data={[
                      {
                        label: "Nữ",
                        status: false,
                      },
                      {
                        label: "Nam",
                        status: true,
                      },
                    ]}
                    circleSize={10}
                    activeColor="#61b15a"
                    style={styles.radioButton}
                    selectedBtn={(e) =>
                      changeValuePicker({ GioiTinh: e.status })
                    }
                  />
                </View>
                {/*//? NƠI SINH ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  NƠI SINH :
                </Text>
                {/*// Tỉnh thành phố */}
                <View style={styles.field}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinhNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinhNS: itemValue })
                    }
                  >
                    {picker.IDTinhNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Quận huyện */}
                <View style={styles.field}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyenNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyenNS: itemValue })
                    }
                  >
                    {picker.IDHuyenNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Phường xã */}
                <View style={styles.field}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXaNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXaNS: itemValue })
                    }
                  >
                    {picker.IDXaNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChiNS: value })
                    }
                  >
                    {data.DiaChiNS}
                  </TextInput>
                </View>

                {/*//? HỘ KHẨU THƯỜNG TRÚ ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  HỘ KHẨU THƯỜNG TRÚ :
                </Text>
                {/*// Tỉnh thành phố */}
                <View style={styles.field}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinhTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinhTT: itemValue })
                    }
                  >
                    {picker.IDTinhTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Quận huyện */}
                <View style={styles.field}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyenTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyenTT: itemValue })
                    }
                  >
                    {picker.IDHuyenTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Phường xã */}
                <View style={styles.field}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXaTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXaTT: itemValue })
                    }
                  >
                    {picker.IDXaTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChiTT: value })
                    }
                  >
                    {data.DiaChiTT}
                  </TextInput>
                </View>

                {/*//? NƠI Ở HIỆN TẠI ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  NƠI Ở HIỆN TẠI :
                </Text>
                {/*// Tỉnh thành phố */}
                <View style={styles.field}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinh}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinh: itemValue })
                    }
                  >
                    {picker.IDTinh.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Quận huyện */}
                <View style={styles.field}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyen}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyen: itemValue })
                    }
                  >
                    {picker.IDHuyen.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Phường xã */}
                <View style={styles.field}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXa}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXa: itemValue })
                    }
                  >
                    {picker.IDXa.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*// Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChi: value })
                    }
                  >
                    {data.DiaChi}
                  </TextInput>
                </View>
              </View>
            </View>
          </View>
          {/* -------------Đăng ký nguyện vọng------------- */}
          <View style={styles.block}>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                borderColor: "white",
                borderRadius: 15,

                margin: 20,
                padding: "5%",

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#145374",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  Đăng ký nguyện vọng
                </Text>
              </View>
              {/* Đăng ký nguyện vọng */}
              <View style={styles.box}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 400 }}>
                  <ListNV />
                </ScrollView>
              </View>
            </View>
          </View>
          {/* -------------Chế độ ưu tiên------------- */}
          <View style={styles.block}>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                borderColor: "white",
                borderRadius: 15,

                margin: 20,
                padding: "5%",

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#145374",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Chế độ ưu tiên
                </Text>
              </View>
              <View style={styles.box}>
                {/* Đối tượng ưu tiên */}
                <View style={styles.field}>
                  <Text>Đối tượng ưu tiên</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                    >
                      0 mục đã chọn
                    </Text>
                    <IconButton
                      icon="file"
                      color={Colors.red500}
                      size={20}
                      onPress={() => setModalVisible(true)}
                    />
                  </View>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                  >
                    <BlurView
                      style={[
                        StyleSheet.absoluteFill,
                        {
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: 50,
                        },
                      ]}
                      intensity={200}
                    >
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
                        <ScrollView
                          nestedScrollEnabled
                          style={{ maxHeight: 500, padding: 20 }}
                        >
                          <DSDoiTuongUuTien />
                        </ScrollView>
                        <TouchableOpacity
                          style={{
                            marginTop: 10,
                            backgroundColor: "#F194FF",
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3",
                          }}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                            Them();
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Chấp nhận
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </BlurView>
                  </Modal>

                  {/* Checkbox */}
                  <View
                    style={{
                      margin: 5,
                      backgroundColor: "#FFFFFF",
                      width: "100%",
                      borderColor: "#f1f1f1",
                      alignItems: "stretch",
                      flexDirection: "row",
                      alignSelf: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,

                      elevation: 10,
                    }}
                  >
                    <CheckBox
                      value={data.CoGiaiThuongQuocGia}
                      tintColors={{ true: "#ff4646", false: "#008577" }}
                      // onValueChange={setData(false)}
                      onValueChange={() =>
                        setData((prevState) => ({
                          ...prevState,
                          CoGiaiThuongQuocGia: !prevState.CoGiaiThuongQuocGia,
                        }))
                      }
                    />
                    <Text style={{ fontSize: 14, alignSelf: "center" }}>
                      Có giải thưởng cấp quốc gia
                    </Text>
                  </View>
                </View>
                <View style={styles.field}>
                  <Text>
                    Bổ sung các giấy tờ liên quan
                    <Text style={{ color: "red" }}> *</Text>
                  </Text>
                  <View
                    style={{
                      marginTop: 5,
                      alignItems: "center",
                      backgroundColor: "#fff5c0",
                    }}
                  >
                    <IconButton
                      icon="camera"
                      color={Colors.red500}
                      size={25}
                      // onPress={() => console.log(data)}
                      onPress={() => {
                        navigation.navigate("Images");
                      }}
                    />
                    {/*--------Camera--------*/}
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingTop: Constants.statusBarHeight,
                        backgroundColor: "#ecf0f1",
                      }}
                    >
                      {pickerResult ? (
                        <Image
                          source={{ uri: imageUri }}
                          style={{ width: 200, height: 200 }}
                        />
                      ) : null}
                      {pickerResult ? (
                        <Text style={styles.paragraph}>
                          Keys on pickerResult:{" "}
                          {JSON.stringify(Object.keys(pickerResult))}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* -------------Thông tin cha mẹ, người giám hộ------------- */}
          <View style={styles.block}>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                borderColor: "white",
                borderRadius: 15,

                margin: 20,
                padding: "5%",

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#145374",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Thông tin cha mẹ, người giám hộ
                </Text>
              </View>
              <View style={styles.box}>
                {/*//? THÔNG TIN MẸ ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  THÔNG TIN MẸ :
                </Text>
                {/* Họ và tên */}
                <View style={styles.field}>
                  <Text>Họ và tên</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ HoTenMe: value })
                    }
                  >
                    {data.HoTenMe}
                  </TextInput>
                </View>
                {/* Số CMND/Thẻ căn cước */}
                <View style={styles.field}>
                  <Text>Số CMND/Thẻ căn cước</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ CMNDMe: value })
                    }
                  >
                    {data.CMNDMe}
                  </TextInput>
                </View>
                {/* Ngày sinh */}
                <View style={styles.field}>
                  <Text>Ngày sinh</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                    >
                      {date("{dd}/{mm}/{yyyy}", inputMe.date)}
                    </Text>
                    <IconButton
                      icon="calendar"
                      color={Colors.red500}
                      size={18}
                      onPress={inputMe.showDatepicker}
                    />
                    {inputMe.show && (
                      <DateTimePicker
                        testID="Me"
                        value={inputMe.date}
                        mode={inputMe.mode}
                        is24Hour={true}
                        display="default"
                        onChange={inputMe.onChange}
                      />
                    )}
                  </View>
                </View>
                {/*//? THÔNG TIN CHA ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  THÔNG TIN CHA :
                </Text>
                {/* Họ và tên */}
                <View style={styles.field}>
                  <Text>Họ và tên</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ HoTenCha: value })
                    }
                  >
                    {data.HoTenCha}
                  </TextInput>
                </View>
                {/* Số CMND/Thẻ căn cước */}
                <View style={styles.field}>
                  <Text>Số CMND/Thẻ căn cước</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ CMNDCha: value })
                    }
                  >
                    {data.CMNDCha}
                  </TextInput>
                </View>
                {/* Ngày sinh */}
                <View style={styles.field}>
                  <Text>Ngày sinh</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                    >
                      {date("{dd}/{mm}/{yyyy}", inputCha.date)}
                    </Text>
                    <IconButton
                      icon="calendar"
                      color={Colors.red500}
                      size={18}
                      onPress={inputCha.showDatepicker}
                    />
                    {inputCha.show && (
                      <DateTimePicker
                        testID="Me"
                        value={inputCha.date}
                        mode={inputCha.mode}
                        is24Hour={true}
                        display="default"
                        onChange={inputCha.onChange}
                      />
                    )}
                  </View>
                </View>
                {/*//? THÔNG TIN NGƯỜI GIÁM HỘ ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  THÔNG TIN NGƯỜI GIÁM HỘ :
                </Text>
                {/* Họ và tên */}
                <View style={styles.field}>
                  <Text>Họ và tên</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ HoTenNguoiGiamHo: value })
                    }
                  >
                    {data.HoTenNguoiGiamHo}
                  </TextInput>
                </View>
                {/* Số CMND/Thẻ căn cước */}
                <View style={styles.field}>
                  <Text>Số CMND/Thẻ căn cước</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ CMNDNguoiGiamHo: value })
                    }
                  >
                    {data.CMNDNguoiGiamHo}
                  </TextInput>
                </View>
                {/* Ngày sinh */}
                <View style={styles.field}>
                  <Text>Ngày sinh</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                    >
                      {date("{dd}/{mm}/{yyyy}", inputNGH.date)}
                    </Text>
                    <IconButton
                      icon="calendar"
                      color={Colors.red500}
                      size={18}
                      onPress={inputNGH.showDatepicker}
                    />
                    {inputNGH.show && (
                      <DateTimePicker
                        testID="Me"
                        value={inputNGH.date}
                        mode={inputNGH.mode}
                        is24Hour={true}
                        display="default"
                        onChange={inputNGH.onChange}
                      />
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* -------------Thông tin liên lạc------------- */}
          <View style={styles.block}>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                borderColor: "white",
                borderRadius: 15,

                margin: 20,
                padding: "5%",

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#145374",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Thông tin liên lạc
                </Text>
              </View>
              <View style={styles.box}>
                {/*//? THÔNG TIN LIÊN LẠC ---------------------------------*/}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    margin: "2%",
                    fontStyle: "italic",
                  }}
                >
                  Vui lòng nhập số điện thoại và địa chỉ email để cơ quan chức
                  năng liên hệ với ông/bà khi có kết quả.
                </Text>
                {/* Điện thoại liên hệ */}
                <View style={styles.field}>
                  <Text>
                    Điện thoại liên hệ <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    keyboardType={"number-pad"}
                    multiline={false}
                    onChangeText={(value) =>
                      changeValuePicker({ DienThoaiLienHe: value })
                    }
                  >
                    {data.DienThoaiLienHe}
                  </TextInput>
                </View>

                {/* Email liên hệ */}
                <View style={styles.field}>
                  <Text>
                    Email liên hệ <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="email@gmail.com"
                    keyboardType={"email-address"}
                    multiline={false}
                    onChangeText={(value) =>
                      changeValuePicker({ MailLienHe: value })
                    }
                  >
                    {data.MailLienHe}
                  </TextInput>
                </View>
              </View>
            </View>
          </View>
          {/*Đăng ký*/}
          {TrangThai() ? (
            <View style={{ marginBottom: "10%" }}>
              <Button
                round
                title="Đăng ký"
                style={styles.button}
                onPress={() => setModal_KiemTraVisible(true)}
              >
                <Text style={{ color: "white" }}>Đăng ký</Text>
              </Button>
              <ModalKiemTraThongTin />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  //? Phân cấp View : container > block = title > box > field(...element)
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#eff8ff",
  },
  block: {
    backgroundColor: "#eff8ff",
    width: "100%",
  },
  title: {
    width: "100%",

    borderRadius: 15,
    // left: "10%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 5,
    marginBottom: 10,
  },
  box: {
    // borderColor: "red",
    // borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  field: {
    borderColor: "white",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 5,
    marginBottom: "1%",
  },
  textInput: {
    fontSize: 18,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingLeft: 5,
  },
  //? Dropdown
  dropDownStyle: {
    backgroundColor: "#e8e8e8",
    borderColor: "#222831",
    borderWidth: 1,
  },
  labelStyle: {
    fontSize: 16,
    textAlign: "left",
    color: "#000",
  },
  button: {
    maxWidth: "50%",
    borderRadius: 25,
    textShadowColor: "#bbbbbb",

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
