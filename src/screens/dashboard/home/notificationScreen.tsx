import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import UserTheme from "../../../../assets/images/userTheme.png";
import { Image } from "react-native";
import Ionicon from "../../../components/Icon/ionicon";
import { colors } from "../../../utils/constants";
import Button from "../../../components/elements/button";
import { SearchNormal1 } from "iconsax-react-native";

const NotificationScreen = () => {
  const [viewState, setViewState] = useState(true);

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row pt-2 pb-10 bg-theme-gray px-3 items-center justify-between space-x-4">
        <View className="flex-1 flex-row items-center space-x-2.5">
          <Image source={UserTheme} className="h-9 w-9" />
          <Text className="text-xl font-700">Requests</Text>
        </View>
        
        <View className="flex-row items-center space-x-6">
          <SearchNormal1 size="18" color={colors["theme-text-gray"]} />
          <View className="flex-row items-center space-x-2">
            <Ionicon name="filter" size={20} color={colors["theme-black"]} />
            <Text className="font-500 text-xs">Filter</Text>
          </View>
        </View>
      </View>

      <View className="px-3">
        <View className="bg-theme-gray h-12 -top-6 border-t border-theme-text-gray py-2 px-4 rounded flex-row items-center space-x-4">
          <View className="flex-1">
            <Button
              title="Rejected Request"
              size="xs"
              onPress={() => setViewState(!viewState)}
              variant={viewState ? "primary" : "transparent"}
            />
          </View>

          <View className="flex-1">
            <Button
              title="Approved Request"
              size="xs"
              variant={!viewState ? "primary" : "transparent"}
              onPress={() => setViewState(!viewState)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
