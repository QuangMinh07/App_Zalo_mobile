import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  StyleSheet,
  TextInput
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Discover() {
  const arr = [
    {
      image1: require("../image/2.png"),
      name1: "Zalo Video",
    },
    {
      image1: require("../image/3.png"),
      name1: "Fiza",
    },
    {
      image1: require("../image/4.png"),
      name1: "ZaloPay",
    },
    {
      image1: require("../image/5.png"),
      name1: "Dịch vụ công",
    },
    {
      image1: require("../image/6.png"),
      name1: "Nhạc chờ zMelody",
    },
    {
      image1: require("../image/7.png"),
      name1: "Tìm Việc",
    },
    {
      image1: require("../image/8.png"),
      name1: "Nạp tiền điện thoại",
    },
    {
      image1: require("../image/9.png"),
      name1: "Xem thêm",
    },
  ];

  const data = [
    { image: require("../image/1.1.png"), text: "Ví QR" },
    { image: require("../image/1.2.png"), text: "Zalo Shop" },
    { image: require("../image/1.3.png"), text: "Al Avatar" },
    { image: require("../image/1.4.png"), text: "Tiến Lên..." },
    { image: require("../image/1.5.png"), text: "Tú Lơ Khơ" },
    { image: require("../image/1.6.png"), text: "Poker Việt..." },
    { image: require("../image/1.7.png"), text: "Grazy Tiế..." },
    { image: require("../image/1.8.png"), text: "Lịch bóng..." },
    { image: require("../image/1.9.png"), text: "ZCá Vua B..." },
    { image: require("../image/2.0.png"), text: "Lịch Việt" },
    { image: require("../image/2.1.png"), text: "Sổ chi tiêu" },
    { image: require("../image/2.2.png"), text: "Cờ Tướng" },
    { image: require("../image/2.3.png"), text: "Zalo Conn..." },
    { image: require("../image/2.4.png"), text: "Xem thêm" },
  ];
  return (
    <ScrollView>
      <ImageBackground
        source={require("../image/Untitled.png")}
        style={{ width: 420, height: 100 }}
      >
        <View>
          <View style={{ flexDirection: "row", marginTop: 60 }}>
            <Image
              source={require("../image/material-symbols_search.png")}
              style={{ width: 30, height: 30, marginLeft: 20 }}
            ></Image>
            <View style={{ marginLeft: 20, marginTop: 2 }}>
            <TextInput
            placeholder="Tìm kiếm"
            style={{
              width: 200,
              fontSize: 18,
              color:"white",
              outlineStyle: "none",
            }}
          ></TextInput>
          </View>
            <View style={{ marginLeft: 220 }}>
              <MaterialIcons name="qr-code-scanner" size={24} color="white" />
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../image/1.png")}
          style={{ width: 30, height: 30, marginLeft: 20, marginTop: 10 }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 15,
          }}
        >
          Mini Apps yêu thích
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
            marginLeft: 100,
            marginTop: 15,
            color: "#1E90FF",
          }}
        >
          Chỉnh sửa
        </Text>
      </View>

      <FlatList
        data={arr}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 20, marginLeft: 10 }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={item.image1}
                  style={{ width: 50, height: 50 }}
                ></Image>
              </View>
              <View
                style={{
                  width: 90,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    marginTop: 10,
                  }}
                >
                  {item.name1}
                </Text>
              </View>
            </View>
          );
        }}
      ></FlatList>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 20,
            color: "#808080",
          }}
        >
          Sử dụng gần đây
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image}></Image>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          borderWidth: 3,
          borderColor: "#DCDCDC",
          width: 420,
          marginTop: 40,
        }}
      ></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
  },
  itemContainer: {
    alignItems: "center",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
});
