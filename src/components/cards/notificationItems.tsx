import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import clsx from "clsx";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: any;
}

const NotificationItems = ({ item }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("NotificationDetailsScreen")} className="bg-theme-white p-3 space-y-2.5">
      <View className="flex-row space-x-4 items-center justify-between">
        <Text className="font-600 text-sm">{item.name}</Text>
        <Text
          className={clsx(
            "text-sm font-600",
            item.status === "Read"
              ? "text-theme-text-gray"
              : "text-theme-red/50"
          )}
        >
          {item.status}
        </Text>
      </View>
      <View className="flex-row flex-wrap space-y-5 items-center">
        <Text
          className="font-500 text-theme-text-gray text-[13px]"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.desc}
        </Text>
        <Text className="font-500 text-[13px]">{item.date} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItems;
