import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F1DC",
  },
});
