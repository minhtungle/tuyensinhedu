import { Picker } from "@react-native-picker/picker";
import { Button } from "galio-framework";
import React, { useEffect, useState } from "react";
import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, IconButton } from "react-native-paper";

export default function Thongtintuyensinh() {
  const [data, setData] = useState({
    IDTinh: "",
    IDHuyen: "",
    IDXa: "",
    CapTS: "",
    NamTS: "",
    ketqua: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  //#region DropPicker: Dữ liệu - Thay đổi value khi chọn - Ràng buộc picker child với parent
  //* Dữ liệu trong dropDown
  const [picker, setPicker] = useState({
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
    CapTS: [
      {
        id: "",
        name: "Chọn cấp tuyển sinh",
      },
      {
        id: "1",
        name: "Cấp 1",
      },
      {
        id: "2",
        name: "Cấp 2",
      },
      {
        id: "3",
        name: "Cấp 3",
      },
    ],
    NamTS: [
      {
        id: "",
        name: "Chọn năm tuyển sinh",
      },
      {
        id: "2018",
        name: "2018",
      },
      {
        id: "2019",
        name: "2019",
      },
      {
        id: "2020",
        name: "2020",
      },
      {
        id: "2021",
        name: "2021",
      },
    ],
  });
  //* Chọn giá trị cho Picker
  const changeValuePicker = (arg) => {
    setData((prevState) => ({
      ...prevState,
      ...arg,
    }));
  };
  //#endregion
  //#region API - Call:  tỉnh-huyện-xã
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
          IDTinh: arrDataFail,
        }));
      });
  }, [0]);
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
  //#region Button: Ẩn hiện - Tra cứu - Lấy API Tra cứu
  const Trangthai = () => {
    if (
      (data.IDTinh && data.IDHuyen && data.IDXa && data.CapTS && data.NamTS) !=
      ""
    ) {
      return true;
    }
    return false;
  };
  const Tracuu = async () => {
    try {
      await fetch(
        `http://tuyensinh.huongvietedm.vn/api/TSAPIService/getkehoachbyyear?namhoc=${data.NamTS}&caphoc=${data.CapTS}&idquanhuyen=${data.IDHuyen}&idxaphuong=${data.IDXa}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          let obj = {
            id: "",
            idTruong: "",
            tenFile: "",
            tieuDe: "",
            fileDinhkem: "",
          };
          let rs = [];
          /*  if (responseJson.Result.Message != "The request is invalid.") {
            for (let i = 0; i < responseJson.Result.results.length; i++) {
              obj.id = responseJson.Result.results[i].ID;
              obj.idTruong = responseJson.Result.results[i].IDTruong;
              obj.tenFile = responseJson.Result.results[i].TenFile;
              obj.tieuDe = responseJson.Result.results[i].TieuDe;
              obj.fileDinhkem = responseJson.Result.results[i].FileDinhKem;
              rs.push(obj);
              obj = {};
            }
            changeValuePicker({ ketqua: rs });
          } else {
            changeValuePicker({ ketqua: [] });
          } */
          for (let i = 0; i < responseJson.Result.results.length; i++) {
            obj.id = responseJson.Result.results[i].ID;
            obj.idTruong = responseJson.Result.results[i].IDTruong;
            obj.tenFile = responseJson.Result.results[i].TenFile;
            obj.tieuDe = responseJson.Result.results[i].TieuDe;
            obj.fileDinhkem = responseJson.Result.results[i].FileDinhKem;
            rs.push(obj);
            obj = {};
          }
          changeValuePicker({ ketqua: rs });
        });
    } catch (e) {
      changeValuePicker({ ketqua: [] });
    }
  };
  //#endregion
  const ExternalLinkBtn = (props) => {
    return (
      <Button
        round
        size="large"
        color="#61b15a"
        title={props.title}
        onPress={() => {
          Linking.openURL(props.url).catch((err) => {
            console.error("Không thể kết nối trang web bởi: ", err);
            alert("Không tải được tệp");
          });
        }}
        key={props.key}
      >
        {props.title}
      </Button>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        {/*// Tỉnh thành phố */}
        <View style={[styles.field, { zIndex: 11003 }]}>
          {data.IDTinh == "" || null ? null : (
            <View style={styles.label}>
              <IconButton
                style={{ backgroundColor: "#61b15a" }}
                icon="check"
                color="#FFFF"
                size={10}
              />
            </View>
          )}
          <Picker
            selectedValue={data.IDTinh}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              changeValuePicker({ IDTinh: itemValue })
            }
            dropdownIconColor={
              data.IDTinh == "" || null ? Colors.red500 : "#61b15a"
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
        <View style={[styles.field, { zIndex: 11002 }]}>
          {data.IDHuyen == "" || null ? null : (
            <View style={styles.label}>
              <IconButton
                style={{ backgroundColor: "#61b15a" }}
                icon="check"
                color="#FFFF"
                size={10}
              />
            </View>
          )}
          <Picker
            selectedValue={data.IDHuyen}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              changeValuePicker({ IDHuyen: itemValue })
            }
            dropdownIconColor={
              data.IDHuyen == "" || null ? Colors.red500 : "#61b15a"
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
        <View style={[styles.field, { zIndex: 11001 }]}>
          {data.IDXa == "" || null ? null : (
            <View style={styles.label}>
              <IconButton
                style={{ backgroundColor: "#61b15a" }}
                icon="check"
                color="#FFFF"
                size={10}
              />
            </View>
          )}
          <Picker
            selectedValue={data.IDXa}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              changeValuePicker({ IDXa: itemValue })
            }
            dropdownIconColor={
              data.IDXa == "" || null ? Colors.red500 : "#61b15a"
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
        {/*// Cấp tuyển sinh */}
        <View style={[styles.field, { zIndex: 11001 }]}>
          {data.CapTS == "" || null ? null : (
            <View style={styles.label}>
              <IconButton
                style={{ backgroundColor: "#61b15a" }}
                icon="check"
                color="#FFFF"
                size={10}
              />
            </View>
          )}
          <Picker
            selectedValue={data.CapTS}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              changeValuePicker({ CapTS: itemValue })
            }
            dropdownIconColor={
              data.CapTS == "" || null ? Colors.red500 : "#61b15a"
            }
          >
            {picker.CapTS.map((item, index) => {
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
        {/*// Năm tuyển sinh */}
        <View style={[styles.field, { zIndex: 11001 }]}>
          {data.NamTS == "" ? null : (
            <View style={styles.label}>
              <IconButton
                style={{ backgroundColor: "#61b15a" }}
                icon="check"
                color="#FFFF"
                size={10}
              />
            </View>
          )}
          <Picker
            selectedValue={data.NamTS}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              changeValuePicker({ NamTS: itemValue })
            }
            dropdownIconColor={
              data.NamTS == "" || null ? Colors.red500 : "#61b15a"
            }
          >
            {picker.NamTS.map((item, index) => {
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
      </View>
      {Trangthai() ? (
        <View style-={{}}>
          <Button
            round
            style={styles.button}
            color="#61b15a"
            onPress={() => setModalVisible(true)}
          >
            Tra cứu
          </Button>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
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
                  margin: 20,
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 35,
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
                {data.ketqua.length !== 0 ? (
                  <View>
                    {data.ketqua.map((item, index) => {
                      return (
                        <ExternalLinkBtn
                          title={item.tieuDe}
                          url={item.fileDinhkem}
                          key={index}
                        />
                      );
                    })}
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          alignItems: "center",
                          backgroundColor: "#DDDDDD",
                          padding: 10,
                        }}
                      >
                        <Text>Kết quả tìm kiếm không tồn tại</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                <Button
                  round
                  style={styles.button}
                  color="#61b15a"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  Đóng
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  //? Phân cấp View : container > block = title > box > field(...element)
  container: {
    backgroundColor: "#eff8ff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  block: {
    width: "95%",
    marginBottom: 10,
  },
  box: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
    // borderColor: "red",
    // borderWidth: 1,
  },
  field: {
    borderColor: "white",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 5,
    marginBottom: "2%",
    flexDirection: "row",

    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  label: {
    alignSelf: "center",
    // marginRight: 10,
  },
  picker: {
    height: 50,
    flexGrow: 1,
  },
  button: {
    alignSelf: "center",
    borderRadius: 25,
    textShadowColor: "black",
    backgroundColor: "#61b15a",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
