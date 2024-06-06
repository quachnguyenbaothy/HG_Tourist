import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

//Thêm các địa điểm 
const locations = [
  {
    id: "1",
    name: "TP. Vị Thanh",
    coordinate: {
      latitude: 9.773552,
      longitude: 105.454046,
    },
  },
  {
    id: "2",
    name: "Quan Miếu Thánh Đế",
    coordinate: {
      latitude: 9.782595,
      longitude: 105.471406,
    },
  },
  {
    id: "3",
    name: "Đền thờ Bác",
    coordinate: {
      latitude: 9.620188,
      longitude: 105.458909,
    },
  },
  {
    id: "4",
    name: "Chợ nổi Ngã Bảy",
    coordinate: {
      latitude: 9.828626,
      longitude: 105.83424,
    },
  },
  {
    id: "5",
    name: "Lung Ngọc Hoàng",
    coordinate: {
      latitude: 9.722314,
      longitude: 105.699783,
    },
  },
  {
    id: "6",
    name: "Công viên Xà No",
    coordinate: {
      latitude: 9.791479,
      longitude: 105.481692,
    },
  },
  {
    id: "7",
    name: "Du lịch sinh thái Phú Hữu",
    coordinate: {
      latitude: 9.933022,
      longitude: 105.843485,
    },
  },
  {
    id: "8",
    name: "Du lịch sinh thái Việt Úc",
    coordinate: {
      latitude: 9.775753,
      longitude: 105.587809,
    },
  },
  {
    id: "9",
    name: "Rẫy khóm cầu Đúc",
    coordinate: {
      latitude: 9.70912,
      longitude: 105.35103,
    },
  },
   {
    id: "10",
    name: "Nhà thờ Vị Hưng",
    coordinate: {
      latitude: 9.79648,
      longitude: 105.47973,
    },
  },
  {
    id: "11",
    name: "Chùa Aranhut",
    coordinate: {
      latitude: 9.930605,
      longitude: 105.742599,
    },
  },
  {
    id: "12",
    name: "Thiền viện Trúc Lâm",
    coordinate: {
      latitude: 9.73912,
      longitude: 105.57529,
    },
  },
  {
    id: "13",
    name: "Di tích Tầm Vu",
    coordinate: {
      latitude: 9.913563,
      longitude: 105.699509,
    },
  },
  {
    id: "14",
    name: "Di tích căn cứ tỉnh ủy Cần Thơ",
    coordinate: {
      latitude: 9.719424,
      longitude: 105.361719,
    },
  },
  {
    id: "15",
    name: "Chiến thắng Vàm Cái Sình",
    coordinate: {
      latitude: 9.760359,
      longitude: 105.427074,
    },
  },
  {
    id: "16",
    name: "Chiến thắng Chương Thiện",
    coordinate: {
      latitude: 9.793288,
      longitude: 105.478734,
    },
  },

  
];
const MapsScreen = () => {
  const [mapLat, setMapLat] = useState(9.773552);
  const [mapLong, setMapLong] = useState(105.454046);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  //
  const handleSearch = () => {
    const location = locations.find(
      (loc) => loc.name.toLowerCase() === searchText.toLowerCase()
    );
    setSelectedLocation(location);
  };

  //Tim địa điểm

  const filteredData = locations.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.word}>{item.name}</Text>
    </View>
  );
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.primary}
      ></StatusBar>
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 20, padding: 4 }}>
          <Text style={styles.headerTitle}>TÌM ĐỊA ĐIỂM TRÊN GOOGLE MAPS</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Nhập tên địa điểm"
            value={searchText}
            onChangeText={setSearchText}
          />

          {/* <Button title="Tìm kiếm" onPress={handleSearch} /> */}

          <View>
            <TouchableOpacity style={{ marginLeft: 150 }}>
              <Icon name="search" size={28} onPress={handleSearch} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 30 }}>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: mapLat,
            longitude: mapLong,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {selectedLocation && (
            <Marker
              coordinate={selectedLocation.coordinate}
              title={selectedLocation.name}
            />
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    marginTop: 20,
    flex: 1,
    height: "90%",
    width: "100%",
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
  input: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 25,
  },

  item: {
    marginBottom: 16,
  },
  word: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 18,
  },
});
