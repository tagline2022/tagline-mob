import react from "react";
import navigationConstants from "../constants/navigationConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import {
  Profile,
  EditProfile,
  SignIn,
  SignUp,
  ResetPassword,
} from "../screens";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();
const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={navigationConstants.SIGN_IN}
    >
      <Stack.Screen name={navigationConstants.SIGN_IN} component={SignIn} />
      <Stack.Screen name={navigationConstants.REGISTER} component={SignUp} />
      <Stack.Screen name={navigationConstants.PROFILE} component={Profile} />
      <Stack.Screen
        name={navigationConstants.EDIT_PROFILE}
        component={EditProfile}
      />
      <Stack.Screen
        name={navigationConstants.RESETPASSWORD}
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};
export default AuthRoutes;
