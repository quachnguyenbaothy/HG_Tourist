import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import places from "../constants/place";
import COLORS from "../constants/colors";
import { Icon, StatusBar } from "native-base";
import {
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Audio } from "expo-av";
import AnimatedGallery from "@akumzy/react-native-animated-gallery";

const HistoryScreen = ({ navigation, route }) => {
  const Loader = () => {
    return (
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 0.5,
          backgroundColor: COLORS.white,
        }}
      >
        <Text>Custom Loader..</Text>
      </View>
    );
  };

  const place = route.params;
  //add audio
  const [sound, setSound] = useState();

  //Hàm bất đồng bộ ascync  wait

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(place.audio);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  //Đánh giá người dùng
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0); // Unselect the current rating if it's already selected
    } else {
      setRating(selectedRating); // Set the selected rating
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Ionicons
            name={rating >= i ? "star" : "star-outline"}
            size={25}
            color={rating >= i ? "gold" : "black"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
      {/* <StatusBar hidden></StatusBar>
      <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <AnimatedGallery
          imageUrls={place.item}
          renderLoader={<Loader />}
          disablefullScreen={false}
          thumbBorderWidth={3}
          thumbBorderColor={"white"}
          spacing={10}
          imageSize={50}
          backgroundColor={"#0000"}
          onEndReached={() => {
            console.log("yay! end reached");
          }}
          invertThumbDirection={false}
          invertGalleryDirection={true}
        />
      </View> */}

      <ImageBackground style={{ flex: 0.5 }} source={place.image}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color={COLORS.white} size={30}></ChevronLeftIcon>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        {/*Đánh giá người dùng */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Đánh giá của bạn:</Text>
          <View style={styles.starsContainer}>{renderStars()}</View>
          {/* <Text style={styles.ratingText}>
            {rating > 0 ? `You rated ${rating} stars` : "No rating yet"}
          </Text> */}

          {/*Link youtube */}
          <View style={{ marginLeft: 30, flexDirection: "row" }}>
            <TouchableOpacity style={{ padding: 8 }}>
              <AntDesign
                name="youtube"
                size={25}
                color={COLORS.red}
                onPress={() => Linking.openURL(place.url)}
              />
            </TouchableOpacity>

            {/*play sound */}
            <TouchableOpacity style={{ padding: 8 }}>
              <FontAwesome
                name="file-audio-o"
                size={25}
                color={COLORS.red}
                onPress={playSound}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: COLORS.dark,
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("MapsScreen")}>
            <MaterialIcons name="place" size={25} color={COLORS.red} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {place.location}
          </Text>
        </View>

        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.primary,
            padding: 5,
          }}
        >
          {" "}
          Giới thiệu{" "}
        </Text>

        <View style={{ marginBottom: 10 }}>
          <ScrollView>
            <Text
              style={{ fontSize: 15, lineHeight: 20, textAlign: "justify" }}
            >
              {place.details}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: "row",
  },
  ratingText: {
    marginTop: 10,
    fontSize: 16,
  },
  screen: { flex: 1 },
  modalBackgroundStyle: {
    backgroundColor: "white",
  },
});
