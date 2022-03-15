import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationConstants from "../constants/navigationConstants";
import Icon from "react-native-vector-icons/FontAwesome";
import UserNavigator from "./UserNavigator";
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      name={navigationConstants.USER}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name={navigationConstants.USER}
        component={UserNavigator}
        // options={{
        //   tabBarIcon: ({ color }) => (
        //     <Icon name="user" color={color} size={30} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};
export default Main;
