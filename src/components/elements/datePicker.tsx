import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";
import { ArrowDown2 } from "iconsax-react-native";

const DatePicker = () => {
  return (
    <View className="bg-white h-8 pl-3 pr-2 py-2 items-center justify-center flex-row space-x-2.5 rounded">
      <Text className="text-sm font-500">Jan, 2024</Text>
      <ArrowDown2 size="20" color={colors["theme-black"]} />
    </View>
  );
};

export default DatePicker;
