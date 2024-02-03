import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { AntDesign, Entypo } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  
  export default function ScreenRegister({ navigation }) {
    const [inputPass, setInputPass] = useState("");
    const [inputPass1, setInputPass1] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputName1, setInputName1] = useState("");
    const [inputName2, setInputName2] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [hasContent, setHasContent] = useState(false);
  
    return (
      <ScrollView>
        <ImageBackground
          source={require("../image/Untitled.png")}
          style={{ width: 420, height: 100 }}
        >
          <View>
            <View style={{ flexDirection: "row", marginTop: 60, marginLeft: 20 }}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </Pressable>
              <View style={{ marginLeft: 20, marginTop: 2 }}>
                <Text style={{ fontSize: 18, color: "white" }}>Đăng ký</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
  
        <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 13 }}>
          Vui lòng đăng ký
        </Text>
  
        <View
          style={{
            width: 420,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Email"
              value={inputName2}
              onChangeText={(text) => {
                setInputName2(text);
                setHasContent(!!text.trim()); // Cập nhật trạng thái dựa trên việc có nội dung hay không
              }}
              style={{
                width: 200,
                height: 38,
                fontSize: 15,
                fontWeight: "bold",
                color: "#BABABA",
              }}
            ></TextInput>
            <Pressable
              onPress={() => {
                // Xóa nội dung trong inputName khi biểu tượng xóa được nhấn
                setInputName2("");
              }}
              style={{ marginLeft: 120 }}
            >
              <Feather name="delete" size={24} color="blue" />
            </Pressable>
          </View>
          <View
            style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
          ></View>
        </View>
  
        <View
          style={{
            width: 420,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Tên Zalo"
              value={inputName1}
              onChangeText={(text) => {
                setInputName1(text);
                setHasContent(!!text.trim()); // Cập nhật trạng thái dựa trên việc có nội dung hay không
              }}
              style={{
                width: 200,
                height: 38,
                fontSize: 15,
                fontWeight: "bold",
                color: "#BABABA",
              }}
            ></TextInput>
            <Pressable
              onPress={() => {
                // Xóa nội dung trong inputName khi biểu tượng xóa được nhấn
                setInputName1("");
              }}
              style={{ marginLeft: 120 }}
            >
              <Feather name="delete" size={24} color="blue" />
            </Pressable>
          </View>
          <View
            style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
          ></View>
        </View>
  
        <View
          style={{
            width: 420,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Tên đăng nhập"
              value={inputName}
              onChangeText={(text) => {
                setInputName(text);
                setHasContent(!!text.trim()); // Cập nhật trạng thái dựa trên việc có nội dung hay không
              }}
              style={{
                width: 200,
                height: 38,
                fontSize: 15,
                fontWeight: "bold",
                color: "#BABABA",
              }}
            ></TextInput>
            <Pressable
              onPress={() => {
                // Xóa nội dung trong inputName khi biểu tượng xóa được nhấn
                setInputName("");
              }}
              style={{ marginLeft: 120 }}
            >
              <Feather name="delete" size={24} color="blue" />
            </Pressable>
          </View>
          <View
            style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
          ></View>
        </View>
  
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Mật khẩu"
              value={inputPass}
              onChangeText={(text) => {
                setInputPass(text);
                setHasContent(!!text.trim()); // Cập nhật trạng thái dựa trên việc có nội dung hay không
              }}
              secureTextEntry={!showPassword}
              style={{
                width: 200,
                height: 38,
                fontSize: 15,
                fontWeight: "bold",
                color: "#BABABA",
              }}
            ></TextInput>
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginLeft: 120 }}
            >
              {showPassword == true ? (
                <AntDesign name="eye" size={20} color="#116CF5" />
              ) : (
                <Entypo name="eye-with-line" size={20} color="#116CF5" />
              )}
            </Pressable>
          </View>
          <View
            style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
          ></View>
        </View>
  
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Nhập lại mật khẩu"
              value={inputPass1}
              onChangeText={(text) => {
                setInputPass1(text);
                setHasContent(!!text.trim()); // Cập nhật trạng thái dựa trên việc có nội dung hay không
              }}
              secureTextEntry={!showPassword1}
              style={{
                width: 200,
                height: 38,
                fontSize: 15,
                fontWeight: "bold",
                color: "#BABABA",
              }}
            ></TextInput>
            <Pressable
              onPress={() => setShowPassword1(!showPassword1)}
              style={{ marginLeft: 120 }}
            >
              {showPassword1 == true ? (
                <AntDesign name="eye" size={20} color="#116CF5" />
              ) : (
                <Entypo name="eye-with-line" size={20} color="#116CF5" />
              )}
            </Pressable>
          </View>
          <View
            style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
          ></View>
        </View>
  
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              width: 350,
              height: 50,
              backgroundColor: hasContent ? "#116CF5" : "#DCDCDC", // Màu nền tùy thuộc vào trạng thái có nội dung hay không
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontWeight: 700,
              }}
            >
              Đăng ký
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
  