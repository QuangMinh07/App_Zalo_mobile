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

export default function ScreenLogin({ navigation }) {
  // State hooks để theo dõi giá trị của ô nhập mật khẩu, ô nhập tên, và trạng thái hiển thị mật khẩu
  const [inputPass, setInputPass] = useState("24032002Nghi@");
  const [inputName, setInputName] = useState("0396356806");
  const [showPassword, setShowPassword] = useState(false);

  // Mảng user chứa tài khoản người dùng (hiện đang chỉ có một tài khoản cố định)
  const user = [{ inputName: "0396356806", inputPass: "24032002Nghi@" }];

  // State hook để theo dõi trạng thái của nội dung trong ô nhập tên
  const [hasContent, setHasContent] = useState(false);

  // Hàm xử lý đăng nhập
  const Login = () => {
    // Tìm kiếm trong mảng user xem có tài khoản nào trùng khớp không
    const User = user.find(
      (user) => user.inputName === inputName && user.inputPass === inputPass
    );

    console.log(User); // Log thông tin người dùng tìm thấy (được in ra trong console)

    // Nếu có tài khoản, chuyển hướng đến màn hình "Login", ngược lại thông báo lỗi
    if (User) {
      navigation.navigate("Message");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  };

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
              <Text style={{ fontSize: 18, color: "white" }}>Đăng Nhập</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 13 }}>
        Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
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
            {/* Khi nút nhấn được nhấn, hàm setShowPassword sẽ được gọi để đảo ngược trạng thái hiển thị mật khẩu */}
            {showPassword == true ? (
              // Nếu đang hiển thị mật khẩu, hiển thị biểu tượng mắt mở
              <AntDesign name="eye" size={20} color="#116CF5" />
            ) : (
              // Ngược lại, nếu đang ẩn mật khẩu, hiển thị biểu tượng mắt đóng
              <Entypo name="eye-with-line" size={20} color="#116CF5" />
            )}
          </Pressable>
        </View>
        <View
          style={{ width: 350, borderWidth: 1, borderColor: "#DCDCDC" }}
        ></View>
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: "blue",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Lấy lại mật khẩu
      </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={Login}
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
            Đăng nhập
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
