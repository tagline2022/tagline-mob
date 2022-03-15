import React from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";

import { Block, Button, Input, Text, theme } from "galio-framework";

import { LinearGradient } from "expo-linear-gradient";
import { materialTheme } from "../constants/";
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get("window");
const thumbMeasure = (width - 48 - 32) / 2.5;

export default class SignUp extends React.Component {
  state = {
    user: "-",
    email: "-",
    password: "-",
    active: {
      user: false,
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
                size={theme.SIZES.FONT * 1.124}
                style={{ marginBottom: height * 0.01 }}
              >
                Sign Up
              </Text>
            </Block>
            <Block flex={1} center space="between">
              <Block center>
                <Input
                  bgColor="transparent"
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  color={materialTheme.COLORS.BLACK}
                  placeholder="Username"
                  autoCapitalize="none"
                  style={[
                    styles.input,
                    this.state.active.user ? styles.inputActive : null,
                  ]}
                  onChangeText={(text) => this.handleChange("user", text)}
                  onBlur={() => this.toggleActive("user")}
                  onFocus={() => this.toggleActive("user")}
                />
                <Input
                  bgColor="transparent"
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  color={materialTheme.COLORS.BLACK}
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  style={[
                    styles.input,
                    this.state.active.email ? styles.inputActive : null,
                  ]}
                  onChangeText={(text) => this.handleChange("email", text)}
                  onBlur={() => this.toggleActive("email")}
                  onFocus={() => this.toggleActive("email")}
                />
                <Input
                  bgColor="transparent"
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  color={materialTheme.COLORS.BLACK}
                  password
                  viewPass
                  placeholder="Password"
                  iconColor="white"
                  style={[
                    styles.input,
                    this.state.active.password ? styles.inputActive : null,
                  ]}
                  onChangeText={(text) => this.handleChange("password", text)}
                  onBlur={() => this.toggleActive("password")}
                  onFocus={() => this.toggleActive("password")}
                />
              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                >
                  SIGN UP
                </Button>
                <Button
                  size="large"
                  color="transparent"
                  shadowless
                  onPress={() => navigation.navigate("Sign In")}
                >
                  <Text
                    center
                    color={theme.COLORS.WHITE}
                    size={theme.SIZES.FONT * 0.75}
                  >
                    Already have an account? Sign In
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
  signup: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
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
