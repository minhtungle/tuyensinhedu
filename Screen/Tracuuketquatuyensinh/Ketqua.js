import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export default function Ketqua(props) {
  const { data, bottom } = props;
  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <ScrollView>
        <View style={styles.title1}>
          <Text
            numberOfLines={1}
            style={{
              alignSelf: "center",
              fontSize: 18,
              color: "#045762",
              fontWeight: "bold",
            }}
          >
            THÔNG TIN TUYỂN SINH
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          {/* Dữ liệu */}
          <View style={styles.thongtin}>
            <View style={styles.thongtinLeft}>
              {/*Mã hồ sơ*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Mã hồ sơ:</Text>
                <Text style={styles.textData}>{data.ThongTinHoSo.MaHoSo}</Text>
              </View>
              {/*Họ tên*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Họ tên:</Text>
                <Text style={styles.textData}>{data.ThongTinHoSo.HoTen}</Text>
              </View>
              {/*Ngày sinh*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Ngày sinh:</Text>
                <Text style={styles.textData}>
                  {data.ThongTinHoSo.NgaySinh}
                </Text>
              </View>
              {/*Giới tính*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Giới tính:</Text>
                <Text style={styles.textData}>
                  {data.ThongTinHoSo.GioiTinh === true ? "Nam" : "Nữ"}
                </Text>
              </View>
              {/*Thường trú*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Thường trú:</Text>
                <Text style={styles.textData}>
                  {data.ThongTinHoSo.ThanhPhoTT}
                  {" - "}
                  {data.ThongTinHoSo.QuanTT}
                  {" - "}
                  {data.ThongTinHoSo.PhuongTT}
                </Text>
              </View>
              {/*Tạm trú*/}
              {data.ThongTinHoSo.ThanhPhoTamTru !== (null && "" && 0) && (
                <View style={styles.thongtinBlock}>
                  <Text style={styles.textField}>► Tạm trú:</Text>
                  <Text style={styles.textData}>
                    {data.ThongTinHoSo.ThanhPhoTamTru}
                    {" - "}
                    {data.ThongTinHoSo.QuanTamTru}
                    {" - "}
                    {data.ThongTinHoSo.PhuongTamTru}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.thongtinRight}>
              {/*Ngày nộp hồ sơ*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Ngày nộp hồ sơ:</Text>
                <Text style={styles.textData}>{data.ThongTinHoSo.NgayTao}</Text>
              </View>
              {/*Trạng thái hồ sơ*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Trạng thái hồ sơ:</Text>
                <Text style={styles.textData}>
                  {data.ThongTinHoSo.TrangThai === 1
                    ? "Hồ sơ đang duyệt"
                    : data.ThongTinHoSo.TrangThai === 2
                    ? "Hồ sơ đã được duyệt"
                    : data.ThongTinHoSo.TrangThai === 3
                    ? "Hồ sơ đã trúng tuyển"
                    : data.ThongTinHoSo.TrangThai === 4 && "Hồ sơ bị trả lại"}
                </Text>
              </View>
              {/*Trường đăng ký*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Trường đăng ký:</Text>
                <View style={{ flexDirection: "column" }}>
                  {data.lst_TenTruong_DangKy.map((item, index) => (
                    <Text key={index.toString()} style={styles.textData}>
                      ● {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.thongtinTable}>
              {/*Bảng nguyện vọng*/}
              <View style={styles.thongtinBlock}>
                <Text style={styles.textField}>► Kết quả:</Text>
                <Table
                  style={{ flexDirection: "column", marginTop: 5 }}
                  borderStyle={{ borderWidth: 1 }}
                >
                  {/*---------Trên--------*/}
                  <TableWrapper
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#cee5d0",
                      borderWidth: 1,
                      borderBottomWidth: 0,
                    }}
                  >
                    <Cell textStyle={styles.tableCell_TextHead} data="NV số" />
                    <Cell
                      textStyle={styles.tableCell_TextHead}
                      data="Tên trường"
                    />
                    <Cell
                      textStyle={styles.tableCell_TextHead}
                      data="Trạng thái"
                    />
                    <Cell textStyle={styles.tableCell_TextHead} data="Lý do" />
                  </TableWrapper>
                  {/*---------Dưới--------*/}
                  {data.lst_NguyenVong_HopLe.map((item, index) => (
                    <TableWrapper
                      key={index.toString()}
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#ffeedb",
                        borderWidth: 1,
                      }}
                    >
                      <Cell
                        textStyle={styles.tableCell_TextData}
                        data={item.NguyenVong}
                      />
                      <Cell
                        textStyle={styles.tableCell_TextData}
                        data={item.TenTruong}
                      />
                      <Cell
                        textStyle={styles.tableCell_TextData}
                        data={
                          item.TrangThai === 1
                            ? "Hồ sơ đã đăng ký - Chưa có kết quả"
                            : data.ThongTinHoSo.TrangThai === 2
                            ? "Hồ sơ đã được duyệt - Chưa có kết quả"
                            : data.ThongTinHoSo.TrangThai === 3
                            ? "Hồ sơ đã trúng tuyển"
                            : data.ThongTinHoSo.TrangThai === 4 &&
                              "Hồ sơ bị trả lại"
                        }
                      />
                      <Cell
                        textStyle={styles.tableCell_TextData}
                        data={item.TrangThai_Mail_Str}
                      />
                    </TableWrapper>
                  ))}
                </Table>
              </View>
            </View>
          </View>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title1: {
    /*  borderColor: "blue",
    borderWidth: 1, */
    alignItems: "center",
    margin: "5%",
  },
  thongtin: {
    /*   borderColor: "purple",
    borderWidth: 1, */
    marginBottom: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  thongtinBlock: {
    marginTop: "5%",
    /*     borderColor: "orange",
    borderWidth: 1, */
    width: "100%",
  },
  thongtinLeft: {
    alignItems: "flex-start",
    /*   borderColor: "green",
    borderWidth: 1, */
    marginHorizontal: 5,
    flexGrow: 1,
  },
  thongtinRight: {
    alignItems: "flex-start",
    /*     borderColor: "green",
    borderWidth: 1, */
    marginHorizontal: 5,
    flexGrow: 1,
  },
  textField: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textData: {
    fontSize: 18,
  },
  thongtinTable: {
    width: "100%",
    marginHorizontal: 5,
    marginBottom: 100,
  },
  tableCell_TextData: {
    textAlign: "center",
    padding: 5,
  },
  tableCell_TextHead: {
    textAlign: "center",
    padding: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
});
