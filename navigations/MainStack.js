import { StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationConstants from "../constants/navigationConstants";
import TabRoutes from "./TabRoutes";

const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={navigationConstants.TABS}
        component={TabRoutes}
      ></Stack.Screen>
    </>
  );
};

export default MainStack;
