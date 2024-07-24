import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, ref, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AntDesign, Feather } from "@expo/vector-icons";
import COLORSR from "../constants/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const OcopScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [isFocused]);

  const getItems = async () => {
    let tempData = [];
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      tempData.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setItems(tempData);
    console.log("data:", tempData);
  };

  const deleteItem = async (id) => {
    const reference = doc(db, "items", id);
    await deleteDoc(reference);

    console.log("Entire Document has been deleted successfully.");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image
                source={{ uri: item.data.imageUrl }}
                style={styles.itemIamge}
              ></Image>

              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item.data.name}</Text>
                <Text style={styles.priceText}>
                  {"Giá: " + item.data.price}
                </Text>
                <Text style={styles.adressText}>
                  {"ĐC:" + item.data.adress}
                </Text>
                <Text style={styles.adressText}>
                  {"ĐT: " + item.data.phone}
                </Text>
              </View>
            </View>
          );
        }}
      ></FlatList>
      </ScrollView>
    </View>
  );
};

export default OcopScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#ffff",
    elevation: 4,
    marginTop: 4,
    borderRadius: 10,
    height: 140,
    marginBottom: 10,
  },
  itemIamge: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  nameView: {
    width: "60%",
    margin: 10,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "700",
  },
  priceText: {
    fontSize: 15,
    color: "red",
    fontWeight: "700",
  },
  adressText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORSR.primary,
  },

  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

