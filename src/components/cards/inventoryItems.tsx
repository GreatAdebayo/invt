import { View, Text, Image } from "react-native";
import React from "react";

interface Props {
  item: any;
}

const InventoryItems = ({ item }: Props) => {
  return (
    <View className="bg-theme-white p-2 space-y-2.5 flex-row items-center space-x-5">
      <View>
        <Image
          source={require("../../../assets/images/canbottle.png")}
          className="w-16 h-16"
          resizeMode="contain"
        />
      </View>
      <View className="space-y-1.5 flex-1">
        <Text className="text-sm font-600 text-theme-black">{item.name}</Text>
        <Text className="text-sm font-500">
          Size:{" "}
          <Text className="text-sm font-500 text-theme-black/80">
            {item.size}
          </Text>
        </Text>
        <Text className="text-sm font-500">
          Available Pieces:{" "}
          <Text className="text-sm font-400 text-theme-black/80">
            {item.price}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default InventoryItems;
