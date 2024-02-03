import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Diary() {
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
              <Text style={{ fontSize: 18, color: "white" }}>Tìm kiếm</Text>
            </View>
            <View style={{ marginLeft: 170 }}>
              <SimpleLineIcons name="note" size={24} color="white" />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="notifications-outline" size={28} color="white" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
