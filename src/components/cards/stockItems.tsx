import { View, Text } from "react-native";
import React from "react";

interface Props {
  item: any;
}

const StockItems = ({ item }: Props) => {
  return (
    <View className="bg-theme-white p-2 space-y-2.5">
      <Text className="font-500 text-sm">{item.name}</Text>
      <Text className="text-xs font-500">
        Number Available: <Text className="text-sm font-400 text-theme-text-gray">
           {item.asset} pieces
        </Text>
      </Text>
    </View>
  );
};

export default StockItems;
