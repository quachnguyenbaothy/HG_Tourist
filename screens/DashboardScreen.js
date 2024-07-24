import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
const DashboardScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => navigation.navigate("GuideBookScreen")}
        >
          <AntDesign
            name="home"
            size={28}
            color={COLORS.primary}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => navigation.navigate("AddScreen")}
        >
          <AntDesign
            size={28}
            name="addfile"
            ccolor={COLORS.primary}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => navigation.navigate("ItemsScreen")}
        >
          <Feather
            size={28}
            name="edit"
            color={COLORS.primary}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => navigation.navigate("ItemsScreen")}
        >
          <AntDesign
            name="delete"
            size={28}
            color={COLORS.primary}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
  },
  bottomTab: {
    height: "100%",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabImg: {
    height: 30,
    width: 30,
    color: COLORS.primary,
  },
});

