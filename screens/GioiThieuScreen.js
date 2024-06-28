import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,SafeAreaView
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const GioiThieuScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <View>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/bandoHG.png")}
        ></ImageBackground>
        <Text style={styles.text}>
          {"  "}
          Hậu Giang là tỉnh nằm ở trung tâm vùng Tây sông Hậu thuộc châu thổ
          Sông Cửu Long. Đây là vùng đất giàu tiềm năng chưa khai thác còn lưu
          giữ và bảo tồn nhiều di tích lịch sử văn hóa, các khu, điểm du lịch,
          ẩm thực, làng nghề truyền thống,..mang đậm bản sắc dân tộc. Hậu Giang
          đang đổi mới từng ngày và luôn rộng cửa chào đón bè bạn gần xa. Hậu
          Giang là miền đất hứa hẹn nhiều bất ngờ cho những ai thích khám phá và
          chinh phục.
        </Text>
        <Text style={styles.text}>
          {"  "}
          Để du khách có cách nhìn tổng thể, am hiểu hơn khi đến với "Đất và
          người Hậu Giang" là mục đích của App ứng dụng muốn đem lại{" "}
        </Text>

        <ImageBackground
          style={styles.image}
          source={require("../assets/images/vithanh.jpg")}
        ></ImageBackground>
        <Text style={styles.text}>
          {"  "}
          Dù đã rất cố gắng để giúp du khách có cái nhìn khái quát khi đến thăm
          Hậu Giang, tuy nhiên trong quá trình thiết kế, biên tập không tránh
          khỏi khiếm khuyết, chúng em rất mong được sự đóng góp quý báo của
          người dùng để phiên bản sau được hoàn chỉnh hơn. Hy vọng cẩm nang du
          lịch Hậu Giang thật sự hữu ích và là người bạn đường đáng tin cậy khi
          đến thăm miền đất hứa này.{" "}
        </Text>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default GioiThieuScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "justify",
    color: "black",
    margin: 15,
  },
  image: {
    height: 300,
    width: "full",
    marginRight: 20,
    margin: 15,
    overflow: "hidden",
    borderRadius: 10,
  },
});
