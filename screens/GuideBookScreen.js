import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import { ScrollView } from "react-native";
import places from "../constants/place";
import lands from "../constants/land";
import cultures from "../constants/culture";
import jobs from "../constants/job";
import specials from "../constants/special";
import intros from "../constants/intro";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";

const GuideBookScreen = ({ navigation }) => {
  const categoryIcons = [
    <MaterialIcons
      name="flight"
      size={24}
      color={COLORS.primary}
      onPress={() => Linking.openURL("https://www.traveloka.com/vi-vn/flight")}
    />,

    <MaterialCommunityIcons
      name="google-maps"
      size={24}
      color={COLORS.primary}
      onPress={() => navigation.navigate("MapsScreen")}
    />,

    <Ionicons
      name="chatbox"
      size={24}
      color={COLORS.primary}
      onPress={() =>
        Linking.openURL(
          "https://console.dialogflow.com/api-client/demo/embedded/915c0b36-0713-495c-902a-f78939b7c24c"
        )
      }
    />,
  

    <FontAwesome5
      name="hotel"
      size={24}
      color={COLORS.primary}
      onPress={() =>
        Linking.openURL(
          "https://www.vietnambooking.com/hotel/vietnam/khach-san-hau-giang.html"
        )
      }
    />,
  ];

  {
    /* Danh sach icon*/
  }
  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  {
    /* Giới thiệu*/
  }

  const Gioi_thieu = ({ intro }) => {
    return (
      <View>
        <ImageBackground style={styles.cardImage} source={intro.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text
            style={{ color: COLORS.white, fontWeight: "bold", margin: "auto" }}
          >
            {intro.name}
          </Text>
        </View>
      </View>
    );
  };

  {
    /* Di tich lịch su*/
  }

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("HistoryScreen", place)}
      >
        <ImageBackground style={styles.cardImage} source={place.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ color: COLORS.dark,fontWeight:"bold" }}>{place.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  {
    /* Danh lam thang canh*/
  }

  const Card_LandScape = ({ land }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("LandScreen", land)}
      >
        <ImageBackground style={styles.cardImage} source={land.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ color: COLORS.dark, fontWeight:"bold" }}>
            {land.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  {
    /* Văn hóa lễ hội*/
  }

  const Card_Culture = ({ culture }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CultureScreen", culture)}
      >
        <ImageBackground style={styles.cardImage} source={culture.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ color: COLORS.dark,fontWeight:"bold" }}>{culture.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  {
    /* Làng nghề truyền thống*/
  }

  const Card_job = ({ job }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("JobScreen", job)}
      >
        <ImageBackground style={styles.cardImage} source={job.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ color: COLORS.dark,fontWeight:"bold" }}>{job.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  {
    /* Đặc sản Hậu Giang*/
  }

  const Card_Specialite = ({ special }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SpecialiteScreen", special)}
      >
        <ImageBackground style={styles.cardImage} source={special.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ color: COLORS.dark,fontWeight:"bold" }}>{special.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.primary}
      ></StatusBar>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            data={intros}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Gioi_thieu intro={item} />}
          ></FlatList>
        </View>

        <ListCategories></ListCategories>

        <Text style={styles.sectionTitle}>Di tích lịch sử</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            data={places}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Card place={item} />}
          ></FlatList>

          <Text style={styles.sectionTitle}>Danh lam thắng cảnh</Text>
          <View>
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              data={lands}
              horizontal
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Card_LandScape land={item} />}
            ></FlatList>
          </View>

          <Text style={styles.sectionTitle}>Văn hóa lễ hội</Text>
          <View>
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              data={cultures}
              horizontal
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Card_Culture culture={item} />}
            ></FlatList>
          </View>

          <Text style={styles.sectionTitle}>Làng nghề truyền thống</Text>
          <View>
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              data={jobs}
              horizontal
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Card_job job={item} />}
            ></FlatList>
          </View>

          <Text style={styles.sectionTitle}>Đặc sản Hậu Giang</Text>
          <View>
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              data={specials}
              horizontal
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Card_Specialite special={item} />}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GuideBookScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 200,
    width: 200,
    marginRight: 20,
    padding: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: 300,
    height: 300,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
