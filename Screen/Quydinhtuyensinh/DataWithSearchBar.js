import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors } from "react-native-paper";

const DataWithSearchBar = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  //* Lấy API
  useEffect(() => {
    fetch(
      "http://tuyensinh.huongvietedm.vn/api/TSAPIService/getquyetdinhtuyensinh"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [];
        responseJson.Result.results.map((item, index) => {
          const obj = {
            id: index + 1,
            title: item.TieuDe,
            url: item.FileQuyetDinh,
          };
          arrData.push(obj);
        });
        setFilteredDataSource(arrData);
        setMasterDataSource(arrData);
      })
      .catch((error) => {
        console.error("Hệ thống đang cập nhật dữ liệu");
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <TouchableOpacity
        onPress={() => getItem(item.url)}
        style={{ flexDirection: "row" }}
      >
        <Text style={[styles.itemStyle, { flexGrow: 1 }]}>
          {item.id}
          {". "}
          {item.title.toUpperCase()}
        </Text>
        <IconButton icon="file" color={Colors.red500} size={18} />
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    Linking.openURL(item).catch((err) => {
      console.error("Không thể kết nối trang web bởi: ", err);
      alert("Không tải được tệp");
    });
  };

  return (
    <View style={styles.data}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Tìm kiếm ..."
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  data: {
    backgroundColor: "white",
    width: "90%",
    height: "80%",
    padding: 5,
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
  itemStyle: {
    padding: 10,
  },
  searchInput: {
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});

export default DataWithSearchBar;
