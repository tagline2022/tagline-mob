import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Text, theme } from "galio-framework";

import materialTheme from "../constants/Theme";

export default class GaButton extends React.Component {
  render() {
    const { gradient, children, style, ...props } = this.props;

    if (gradient) {
      console.log("Has gradient");
      return (
        <LinearGradient>
          <Button>
            <Text color={theme.COLORS.WHITE}>{children}</Text>
          </Button>
        </LinearGradient>
      );
    } else console.log("NO gradient");

    return <Button {...props}>{children}</Button>;
  }
}

const styles = StyleSheet.create({
  gradient: {
    borderWidth: 0,
    borderRadius: theme.SIZES.BASE * 2,
  },
});
