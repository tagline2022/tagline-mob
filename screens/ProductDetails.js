import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Button, theme } from "galio-framework";
import { materialTheme } from "../constants/";
// import ProductDetails from "./ProductDetails";
const { width } = Dimensions.get("screen");

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        color={materialTheme.COLORS.BUTTON_COLOR}
        onPress={() => {
          console.log("Back BTN Clicked");
        }}
      >
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 5,
    shadowOpacity: 5,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22,
  },
  gradient: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
export default ProductDetails;
