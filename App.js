import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, Image, Platform, StatusBar } from "react-native";
import * as Font from "expo-font";
import { Block, GalioProvider } from "galio-framework";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationConstants from "./constants/navigationConstants";
import {
  BestSellers,
  Cart,
  Categories,
  Home,
  CustomSearch,
  Settings,
  SignIn,
  SignUp,
  Dashboard,
} from "./screens";
import imagePath from "./constants/imagePath";
import Ionicons from "react-native-vector-icons/Ionicons";
import { enableScreens } from "react-native-screens";
import { Images, materialTheme } from "./constants/";
enableScreens();
const Tab = createBottomTabNavigator();
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Tab.Navigator
            name={navigationConstants.SIGN_IN}
            initialRouteName={navigationConstants.CUSTOM_SEARCH}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "SignIn") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#9FB427",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name={navigationConstants.DASHBOARD}
              options={{
                tabBarLabel: "Dashboard",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="view-dashboard"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={Dashboard}
            />
            <Tab.Screen
              name={navigationConstants.SIGN_IN}
              options={{
                tabBarLabel: "Sign In",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={SignIn}
            />
            <Tab.Screen
              name={navigationConstants.REGISTER}
              options={{
                tabBarLabel: "Sign Up",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={SignUp}
            />
            <Tab.Screen
              name={navigationConstants.HOME}
              component={Home}
              options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={navigationConstants.CART}
              component={Cart}
              options={{
                tabBarLabel: "Cart",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="cart"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={navigationConstants.CATEGORIES}
              component={Categories}
              options={{
                tabBarLabel: "Categories",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="menu"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={navigationConstants.SETTINGS}
              options={{
                tabBarLabel: "Settings",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="tools"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={Settings}
            />
            <Tab.Screen
              name={navigationConstants.BEST_SELLERS}
              options={{
                tabBarLabel: "Deals",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="fire"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={BestSellers}
            />
            <Tab.Screen
              name={navigationConstants.SEARCH}
              options={{
                tabBarLabel: "Search",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="search-web"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={CustomSearch}
            />
          </Tab.Navigator>
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
