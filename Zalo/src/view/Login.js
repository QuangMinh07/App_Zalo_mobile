import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Pressable,
  } from "react-native";
  import React from "react";
  
  export default function Login({ navigation }) {
    const data = [
      {
        image: require("../image/3.0.png"),
        text: "Gọi video ổn định",
        text1: "Trò chuyện thật đã với hình ảnh sắc nét, tiếng",
        text2: "chất, âm chuẩn dưới mọi điều kiện mạng",
      },
      {
        image: require("../image/3.2.png"),
        text: "Chat nhóm tiện lợi",
        text1: "Cũng trao đổi, giữ liên lạc với gia đình, bạn bè và",
        text2: "đồng nghiệp mọi lúc mọi nơi",
      },
      {
        image: require("../image/3.3.png"),
        text: "Gửi ảnh nhanh chóng",
        text1: "Chia sẻ hình ảnh chất lượng cao với bạn bè và",
        text2: "người thân nhanh chóng và dễ dàng",
      },
      {
        image: require("../image/3.1.png"),
        text: "Nhật ký bạn bè",
        text1: "Nơi cập nhật hoạt động mới nhất của những người",
        text2: "bạn quan tâm",
      },
    ];
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View>
          <Text
            style={{
              marginLeft: 150,
              marginTop: 80,
              fontSize: 50,
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Zalo
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* Bắt đầu của thành phần ScrollView để cuộn theo chiều ngang */}
          <View style={styles.container}>
            {data.map((item, index) => (
              // Duyệt qua từng phần tử trong mảng dữ liệu
              <View key={index} style={styles.itemContainer}>
                {/* Bắt đầu của thành phần View cho mỗi phần tử với kiểu dáng từ styles.itemContainer */}
                <Image source={item.image} style={styles.image} />
                {/* Hiển thị hình ảnh cho mỗi phần tử dựa trên thuộc tính item.image */}
                <Text style={styles.text}>{item.text}</Text>
                {/* Hiển thị văn bản cho mỗi phần tử dựa trên thuộc tính item.text */}
                <Text style={styles.text1}>{item.text1}</Text>
                {/* Hiển thị văn bản bổ sung dựa trên thuộc tính item.text1 */}
                <Text style={styles.text2}>{item.text2}</Text>
                {/* Hiển thị thêm văn bản dựa trên thuộc tính item.text2 */}
              </View>
              // Kết thúc của thành phần View cho mỗi phần tử
            ))}
          </View>
          {/* Kết thúc của thành phần View với kiểu dáng từ styles.container */}
        </ScrollView>
  
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("ScreenLogin");
            }}
            style={{
              width: 350,
              height: 50,
              backgroundColor: "#00BFFF",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 70,
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
          <Pressable
            onPress={() => {
              navigation.navigate("ScreenRegister");
            }}
            style={{
              width: 350,
              height: 50,
              backgroundColor: "#DCDCDC",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
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
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginTop: 15,
    },
    itemContainer: {
      alignItems: "center",
    },
    image: {
      width: 420,
      height: 300,
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
    text1: {
      fontSize: 14,
      marginTop: 10,
      marginLeft: 10,
    },
    text2: {
      fontSize: 14,
      marginTop: 10,
      marginLeft: 10,
    },
  });
  