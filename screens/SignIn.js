import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  Platform,
  Image,
} from "react-native";
import { Block, Button, Input, Text, theme } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";
import { materialTheme } from "../constants/";
import { TouchableWithoutFeedback } from "react-native-web";
import navigationConstants from "../constants/navigationConstants";
const { height, width } = Dimensions.get("window");
const thumbMeasure = (width - 48 - 32) / 2.5;

export default class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    active: {
      email: false,
      password: false,
    },
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={["#F7F9F4", "#E9EAE7"]}
        style={[styles.signin, { flex: 1, margin: theme.SIZES.BASE * 10 }]}
      >
        <Block flex middle>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "position"}
            enabled
            keyboardVerticalOffset={0}
          >
            <Block style={{ marginBottom: height * 0.05 }}>
              <Image
                source={require("../assets/images/tlogo.png")}
                style={styles.thumb}
              />
              <Text center color="#900C3F" size={30}>
                Vishudha Tagline Traders
              </Text>
              <Text
                color="#900C3F"
                center
                size={25}
                style={{ marginBottom: height * 0.01 }}
              >
                Sign In
              </Text>
            </Block>
            <Block flex>
              <Block center>
                <Input
                  color={materialTheme.COLORS.BLACK}
                  placeholder="Email"
                  type="email-address"
                  value={this.state.email}
                  autoCapitalize="none"
                  bgColor="transparent"
                  onBlur={() => this.toggleActive("email")}
                  onFocus={() => this.toggleActive("email")}
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  onChangeText={(text) => this.handleChange("email", text)}
                  style={[
                    styles.input,
                    this.state.active.email ? styles.inputActive : null,
                  ]}
                />
                <Input
                  password
                  viewPass
                  color={materialTheme.COLORS.BLACK}
                  iconColor={materialTheme.COLORS.BLACK}
                  placeholder="Password"
                  value={this.state.password}
                  bgColor="transparent"
                  onBlur={() => this.toggleActive("password")}
                  onFocus={() => this.toggleActive("password")}
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  onChangeText={(text) => this.handleChange("password", text)}
                  style={[
                    styles.input,
                    this.state.active.password ? styles.inputActive : null,
                  ]}
                />
                <Text
                  color={theme.COLORS.black}
                  size={theme.SIZES.FONT * 0.75}
                  onPress={() => navigation.navigate(navigationConstants.TABS)}
                  style={{
                    alignSelf: "flex-end",
                    lineHeight: theme.SIZES.FONT * 2,
                  }}
                >
                  Forgot your password?
                </Text>
              </Block>
              <Block center flex style={{ marginTop: 20 }}></Block>
              <Block center flex style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  style={{ height: 48 }}
                  onPress={() => {
                    console.log(
                      "Clicked Sign In ",
                      this.state.email,
                      this.state.password
                    );
                    navigation.navigate(navigationConstants.HOME);
                  }}
                >
                  SIGN IN
                </Button>
                <Button
                  size="large"
                  color="transparent"
                  shadowless
                  onPress={() =>
                    navigation.navigate(navigationConstants.REGISTER)
                  }
                >
                  <Text
                    center
                    color={theme.COLORS.BLACK}
                    size={theme.SIZES.FONT * 0.75}
                    style={{ marginTop: 20 }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Text>
                </Button>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  signin: {
    // marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
  },
  input: {
    width: width * 0.9,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: materialTheme.COLORS.ACTIVE,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
});
