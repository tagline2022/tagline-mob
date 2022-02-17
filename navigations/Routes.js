import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import {
  Login,
  Categories,
  SubCategories,
  Products,
  Shipping,
  ShoppingCart,
  Payment,
  OrderDetails,
  BestSellers,
  Home,
} from "../screens";
import navigationConstants from "../constants/navigationConstants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationConstants.HOME}
        screenOptions={{ headerShown: false }}
      >
        {MainStack(Stack)}
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName={navigationConstants.LOGIN}>
        <Stack.Screen
          name={navigationConstants.LOGIN}
          component={Login}
        />
        <Stack.Screen
          name={navigationConstants.CATEGORY}
          component={Categories}
        />
        <Stack.Screen
          name={navigationConstants.SUB_CATEGORY}
          component={SubCategories}
        />
        <Stack.Screen
          name={navigationConstants.PRODUCT}
          component={Products}
        />
        <Stack.Screen
          name={navigationConstants.SHOPING_CART}
          component={ShoppingCart}
        />
        <Stack.Screen
          name={navigationConstants.SHIPPING}
          component={Shipping}
        />
        <Stack.Screen
          name={navigationConstants.PAYMENT}
          component={Payment}
        />
        <Stack.Screen
          name={navigationConstants.ORDER_DETAILS}
          component={OrderDetails}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default Routes;
