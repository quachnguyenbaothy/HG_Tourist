import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import GuideBookScreen from "./screens/GuideBookScreen";
import LandScreen from "./screens/LandScreen";
import CultureScreen from "./screens/CultureScreen";
import JobScreen from "./screens/JobScreen";
import SpecialiteScreen from "./screens/SpecialiteScreen";
import MapsScreen from "./screens/MapsScreen";



const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const Stack = createNativeStackNavigator();


// extend the theme
export const theme = extendTheme({ config });
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="LandScreen" component={LandScreen} />
          <Stack.Screen name="CultureScreen" component={CultureScreen} />
          <Stack.Screen name="JobScreen" component={JobScreen} />
          <Stack.Screen name="SpecialiteScreen" component={SpecialiteScreen} />
          <Stack.Screen name="GuideBookScreen" component={GuideBookScreen} />
          <Stack.Screen name="MapsScreen" component={MapsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
