import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BestSellers = () => {
  return (
    <View style={styles.screen}>
      <Text>BestSellers</Text>
    </View>
  );
};

export default BestSellers;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
