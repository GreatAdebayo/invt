import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";
import { ArrowDown2 } from "iconsax-react-native";
import Feather from "react-native-vector-icons/Feather";

const RangeDatePicker = () => {
  return (
    <View className="border border-theme-b-gray h-10 pl-3 pr-2 py-2 items-center justify-center flex-row space-x-2.5 rounded">
      <Feather name="calendar" size={20} color={colors["theme-black"]} />
      <Text className="text-sm font-400 mt-1">Jan - Feb 2023</Text>
      <ArrowDown2 size="20" color={colors["theme-black"]} />
    </View>
  );
};

export default RangeDatePicker;
