import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text> Meu profile </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});

export default Profile;
