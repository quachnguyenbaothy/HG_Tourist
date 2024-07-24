import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = async () => {
    const users = await getDocs(collection(db, "admin"));
    users.forEach((doc) => {
      console.log("email:", doc.data().email);
      console.log("password:", doc.data().password);

      if (email === doc.data().email && password === doc.data().password) {
        navigation.navigate("DashboardScreen");
        alert("Bạn đã đăng nhập tài khoản admin thành công!");
      } else {
        alert("Đăng nhập admin sai email hoặc password!");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin đăng nhập</Text>

      <TextInput
        style={styles.inputStyle}
        placeholder={"Nhập email "}
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      ></TextInput>
      <TextInput
        style={styles.inputStyle}
        placeholder={"Nhập password "}
        value={password}
        onChangeText={(txt) => setPassword(txt)}
      ></TextInput>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (email !== "" && password !== "") {
            adminLogin();
          } else {
            alert("Enter data");
          }
        }}
      >
        <Text style={styles.btnText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000",
    marginTop: 100,
    alignSelf: "center",
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: "90%",
  },
  loginBtn: {
    backgroundColor: "orange",
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
});

