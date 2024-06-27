import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";

const LienHeScreen = () => {
  return (
    <View style={styles.header}>
      <View style={styles.view}>
        <FontAwesome
          style={{ marginLeft: 5 }}
          name="home"
          size={30}
          color={COLORS.primary}
        />
        <Text style={styles.text_tieude}>Địa chỉ:</Text>
        <Text style={styles.text_chitiet}>Tx. Long Mỹ, Hậu Giang</Text>

        <Text style={styles.text_chitiet}></Text>
      </View>

      <View style={styles.view}>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="mail"
          size={30}
          color={COLORS.primary}
        />
        <Text style={styles.text_tieude}>Email:</Text>
        <Text style={styles.text_chitiet}>maitronghuu@gmail.com</Text>
      </View>

      <View style={styles.view}>
        <FontAwesome6
          style={{ marginLeft: 5 }}
          name="file-signature"
          size={30}
          color={COLORS.primary}
        />
        <Text style={styles.text_tieude}>Giấy phép số:</Text>
        <Text style={styles.text_chitiet}>93/GP-STTTT </Text>
      </View>

      <View style={styles.view}>
        <Text style={{ color: COLORS.red, fontSize: 18, textAlign: "justify" }}>
          Nôi dung: "Cẩm nang Du lịch Hậu Giang" đã được Sở Thông tin Truyền
          thông thẩm định và cấp phép.
        </Text>
      </View>
    </View>
  );
};

export default LienHeScreen;

const styles = StyleSheet.create({
  text_tieude: {
    fontSize: 18,
    textAlign: "justify",
    color: COLORS.orange,
    margin: 5,
    fontWeight: "bold",
  },
  text_chitiet: {
    fontSize: 18,
    color: COLORS.primary,
    margin: 5,
  },
  view: {
    flexDirection: "row",
    margin: 10,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

