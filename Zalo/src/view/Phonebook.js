import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Phonebook() {
  return (
    <ScrollView>
      {/* Phần background của ứng dụng */}
      <ImageBackground
        source={require("../image/Untitled.png")}
        style={{ width: 420, height: 100 }}
      >
        <View>
          <View style={{ flexDirection: "row", marginTop: 60 }}>
            {/* Icon tìm kiếm */}
            <Image
              source={require("../image/material-symbols_search.png")}
              style={{ width: 30, height: 30, marginLeft: 20 }}
            ></Image>
            <View style={{ marginLeft: 20, marginTop: 2 }}>
              {/* Text hiển thị "Tìm kiếm" */}
              <Text style={{ fontSize: 18, color: "white" }}>Tìm kiếm</Text>
            </View>
            {/* Icon thêm bạn bè */}
            <View style={{ marginLeft: 220 }}>
              <AntDesign name="adduser" size={30} color="white" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
