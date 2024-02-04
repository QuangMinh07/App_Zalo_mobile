import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
              <TextInput
                placeholder="Tìm kiếm"
                style={{
                  width: 200,
                  fontSize: 18,
                  color: "white",
                  outlineStyle: "none",
                }}
              ></TextInput>
            </View>
            <View style={{ marginLeft: 60 }}>
              <SimpleLineIcons name="note" size={24} color="white" />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="notifications-outline" size={28} color="white" />
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../image/hinhcanhan.png")}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 20,
            borderRadius: 90,
          }}
        ></Image>
        <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 20 }}>
          Hôm nay bạn thế nào?
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{
            width: 90,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#DCDCDC",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <AntDesign name="picture" size={24} color="green" />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            Ảnh
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 90,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#DCDCDC",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <AntDesign name="videocamera" size={24} color="pink" />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            Video
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 90,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#DCDCDC",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <MaterialCommunityIcons name="image-album" size={24} color="blue" />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            Album
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 90,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#DCDCDC",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Entypo name="back-in-time" size={24} color="black" />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            Kỉ niệm
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          borderWidth: 6,
          borderColor: "#D3D3D3",
          width: 420,
          marginTop: 20,
        }}
      ></View>
    </ScrollView>
  );
}
