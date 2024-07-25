import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Button,
  input,
  Image,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
import COLORS from "../constants/colors";
import { getDownloadURL, ref, uploadBytesResumable,setDoc } from "firebase/storage";
import { storage } from "../firebase";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  update,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useRoute } from "@react-navigation/native";

const EditScreen = ({ navigation }) => {
  const route = useRoute();
  const [image, setImage] = useState({
    assets: [{ uri: route.params.data.imageUrl }],
  });
  const [name, setName] = useState(route.params.data.name);
  const [price, setPrice] = useState(route.params.data.price);
  const [adress, setAdress] = useState(route.params.data.adress);
  const [phone, setPhone] = useState(route.params.data.phone);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // here it is where we specify the allow format
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // to upload image see the next function
      await uploadImage(result.assets[0].uri, "image");
    }
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, "Stuff/" + new Date().getTime());

    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          uploadItem(downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  }

  const uploadItem =async () => {
    
    const docRef = doc(db, "items",route.params.id);

    await updateDoc(docRef, {
      name: name,
      price: price,
      adress: adress,
      phone: phone,
      imageUrl: route.params.data.imageUrl + '',
    }).then(() => console.log("Document updated"));
    alert("Bạn đã cập nhật sản phẩm thành công!");
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
       
        {image && (
          <Image
            source={{ uri: image.assets[0].uri }}
            style={styles.imageStyle}
          />
        )}

        <TextInput
          placeholder="Tên sản phẩm OCOP"
          style={styles.inputStyle}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          placeholder="Bảng giá"
          style={styles.inputStyle}
          value={price}
          onChangeText={(text) => setPrice(text)}
        />

        <TextInput
          placeholder="Địa chỉ liên hệ"
          style={styles.inputStyle}
          value={adress}
          onChangeText={(text) => setAdress(text)}
        />

        <TextInput
          placeholder="Số điện thoại"
          style={styles.inputStyle}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <TouchableOpacity style={styles.pickBtn} onPress={pickImage}>
          <Text>Chọn ảnh từ thư viện</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBtn} onPress={uploadItem}>
          <Text style={{ color: "#Fff" }}>Cập nhật sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#ffff",
    elevation: 5,
    paddingLeft: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  inputStyle: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  pickBtn: {
    width: "90%",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: "#5246f2",
    width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  imageStyle: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

