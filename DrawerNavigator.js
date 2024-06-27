import React from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GuideBookScreen from "./screens/GuideBookScreen";
import HomeScreen from "./screens/HomeScreen";
import COLORS from "./constants/colors";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  FontAwesome,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";

import GioiThieuScreen from "./screens/GioiThieuScreen";
import LienHeScreen from "./screens/LienHeScreen";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          drawerLabel: "Trang chủ",
          drawerIcon: (config) => (
            <AntDesign name="home" size={25} color={COLORS.primary} />
          ),
        }}
      />

      <Drawer.Screen
        name="Lời giới thiệu"
        component={GioiThieuScreen}
        options={{
          drawerLabel: "Giới thiệu",
          drawerIcon: (config) => (
            <AntDesign name="book" size={25} color={COLORS.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Miền đất Hậu Giang "
        component={GuideBookScreen}
        options={{
          drawerLabel: "Khám phá",
          drawerIcon: (config) => (
            <FontAwesome5
              name="suitcase-rolling"
              size={25}
              color={COLORS.primary}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Liên hệ"
        component={LienHeScreen}
        options={{
          drawerLabel: "Liên hệ",
          drawerIcon: (config) => (
            <FontAwesome name="user" size={25} color={COLORS.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});

