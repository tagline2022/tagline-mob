import react from "react";
import { Categories, BestSellers, Home } from "../screens";
import navigationConstants from "../constants/navigationConstants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationConstants.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#E8F5E9",
          borderRadius: 10,
          bottom: 10,
          marginHorizontal: 16,
        },
      }}
    >
      <Tab.Screen
        name={navigationConstants.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? "#27AE60" : "gray",
                }}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationConstants.CATEGORY}
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? "#27AE60" : "gray",
                }}
                source={imagePath.icBestSeller}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationConstants.BEST_SELLERS}
        component={BestSellers}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? "#27AE60" : "gray",
                }}
                source={imagePath.icProfile}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabRoutes;
