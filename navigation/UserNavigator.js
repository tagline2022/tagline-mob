import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SignIn,
  SignUp,
  ResetPassword,
  Profile,
  EditProfile,
} from "../screens";
import navigationConstants from "../constants/navigationConstants";

const UserStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationConstants.SIGN_IN}
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigationConstants.REGISTER}
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={navigationConstants.PROFILE} component={Profile} />
      <Stack.Screen
        name={navigationConstants.EDIT_PROFILE}
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigationConstants.RESETPASSWORD}
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />{" "}
      <Stack.Screen
        name={navigationConstants.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function UserNavigator() {
  return <UserStack />;
}
