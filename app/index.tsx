import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-blue-500 font-pblack text-3xl"> Hello Worla </Text>

      <StatusBar style="auto" />
      <Link href="/home">Go to home</Link>
    </View>
  );
};

export default App;
