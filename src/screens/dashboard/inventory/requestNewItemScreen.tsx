import { View, Text, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackButton from "../../../components/elements/backButton";
import { useNavigation } from "@react-navigation/native";

const RequestNewItemScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row h-12 bg-theme-gray px-3 flex items-center">
        <View className="flex-1">
          <BackButton action={() => navigation.goBack()} />
        </View>

        <View className="flex-none">
          <Text className="text-xl font-700">Request New Items</Text>
        </View>

        <View className="flex-1" />
      </View>

      <Pressable onPress={() => navigation.navigate("AllCartScreen")}>
        <Text className="underline text-xs font-500 text-link-blue">
          View all
        </Text>
      </Pressable>
    </View>
  );
};

export default RequestNewItemScreen;
