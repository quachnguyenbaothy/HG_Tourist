import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/haugiang.jpg")}
      >
        <View style={style.details}>
          <Text
            style={{ color: COLORS.white, fontSize: 30, fontWeight: "bold" }}
          >
           Khám phá
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 30, fontWeight: "bold" }}
          >
            miền đất Hậu Giang
          </Text>
          <Text style={{ color: COLORS.white, lineHeight: 25, marginTop: 10 }}>
            Hậu Giang là tỉnh nằm ở trung tâm Đồng bằng sông Cửu Long, được tách
            ra từ tỉnh Cần Thơ theo nghị quyết số 22/2003/QH11 ngày 26/11/2023.
            Tỉnh lỵ là TP. Vị Thanh cách TP. Cần Thơ 60km và TP. Hồ Chí Minh
            260km về phía Tây Nam.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("GuideBookScreen")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Bắt đầu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
    marginTop: 10,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
