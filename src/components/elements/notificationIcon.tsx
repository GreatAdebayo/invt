import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";

const NotificationIcon = () => {
  const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => navigation.navigate("NotificationScreen")}>
      <View className="relative">
        <View className="h-3.5 w-3.5 items-center justify-center rounded-full bg-theme-light-gold absolute z-30 -right-1 -top-1.5">
          <Text className="text-[8px]">12</Text>
        </View>
        <FontAwesome name="bell" size={20} color={colors["theme-white"]} />
      </View>
    </Pressable>
  );
};

export default NotificationIcon;
