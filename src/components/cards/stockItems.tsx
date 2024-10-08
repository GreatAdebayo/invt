import { View, Text } from "react-native";
import React from "react";
import Status from "../elements/status";
import { statusGenerator } from "../../utils/helper";

interface Props {
  item: any;
}

const StockItems = ({ item }: Props) => {
  return (
    <View className="bg-theme-white p-2 space-y-2.5">
      <View className="flex-row space-x-4 items-center justify-between">
        <Text className="font-500 text-sm">{item.name}</Text>
        <Status title={item.status} variant={statusGenerator(item.status)} />
      </View>
      <View className="flex-row flex-wrap space-x-4 items-center">
        <Text className="text-xs font-500">Assets Issued: <Text className="text-sm font-400 text-theme-text-gray">{item.asset}</Text></Text>
        <Text className="text-xs font-500">No Request: <Text className="text-sm font-400 text-theme-text-gray">{item.no}</Text></Text>
      </View>
    </View>
  );
};

export default StockItems;
