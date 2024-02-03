import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function User() {
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
            <View style={{ marginLeft: 220 }}>
              <SimpleLineIcons name="settings" size={24} color="white" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
