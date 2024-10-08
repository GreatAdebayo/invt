import { View, Text } from "react-native";
import React from "react";

interface Props {
  item: any;
}

const NotificationItems = ({ item }: Props) => {
  return (
    <View className="bg-theme-white p-2 space-y-2.5">
      <View className="flex-row space-x-4 items-center justify-between">
        <Text className="font-500 text-sm">{item.name}</Text>
        <Text>{item.StatusBar}</Text>
      </View>
      <View className="flex-row flex-wrap space-x-4 items-center">
        <Text> {item.desc} </Text>
        <Text> {item.date} </Text>
      </View>
    </View>
  );
};

export default NotificationItems;
