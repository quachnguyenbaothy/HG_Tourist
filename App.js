import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import HistoryScreen from "./screens/HistoryScreen";
import LandScreen from "./screens/LandScreen";
import CultureScreen from "./screens/CultureScreen";
import JobScreen from "./screens/JobScreen";
import SpecialiteScreen from "./screens/SpecialiteScreen";
import MapsScreen from "./screens/MapsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./DrawerNavigator";
import GuideBookScreen from "./screens/GuideBookScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ItemsScreen from "./tabs/ItemsScreen";
import AddScreen from "./tabs/AddScreen";
import EditScreen from "./tabs/EditScreen";
import OcopScreen from "./screens/OcopScreen";


const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// extend the theme
export const theme = extendTheme({ config });
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Drawer.Screen
            name="HAU GIANG TOURIST"
            component={DrawerNavigator}
           
          />

          <Stack.Screen name="GuideBookScreen" component={GuideBookScreen} options={{title: 'Cẩm nang Du lịch Hậu Giang'}}/>
          <Stack.Screen name="MapsScreen" component={MapsScreen} options={{title: 'Bản đồ du lịch'}}/>
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{title: 'Di tích lịch sử'}} />
          <Stack.Screen name="LandScreen" component={LandScreen} options={{title: 'Danh lam thắng cảnh'}}/>
          <Stack.Screen name="CultureScreen" component={CultureScreen} options={{title: 'Văn hóa lễ hội'}} />
          <Stack.Screen name="JobScreen" component={JobScreen} options={{title: 'Làng nghề truyền thống'}}/>
          <Stack.Screen name="SpecialiteScreen" component={SpecialiteScreen} options={{title: 'Đặc sản Hậu Giang'}}/>
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{title: 'Admin Panel'}}/>
          <Stack.Screen name="ItemsScreen" component={ItemsScreen} options={{title: 'Sản phẩm OCOP đạt 4 sao '}}/>
          <Stack.Screen name="AddScreen" component={AddScreen} options={{title: 'Thêm sản phẩm OCOP '}}/>
          <Stack.Screen name="EditScreen" component={EditScreen} options={{title: 'Cập nhật sản phẩm OCOP '}}  />
          <Stack.Screen name="OcopScreen" component={OcopScreen} options={{title: 'Sản phẩm OCOP đạt 4 sao '}}  />
          

          <Drawer.Screen
            name="GioiThieuScreen"
            component={DrawerNavigator}
            options={{ header: () => <Header /> }}
          />
          <Drawer.Screen
            name="PlaneScreen"
            component={DrawerNavigator}
            options={{ header: () => <Header /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
