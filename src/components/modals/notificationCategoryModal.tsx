import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import UserTheme from "../../../assets/images/userTheme.png";
import Ionicon from "../Icon/ionicon";
import { colors } from "../../utils/constants";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

interface Props {
  handleClose: () => void;
}

const NotificationCategoryModal = ({ handleClose }: Props) => {
  return (
    <View className="bg-white top-12 absolute w-full">
      <View className="flex-row bg-theme-gray h-14 px-3 items-center justify-between space-x-4">
        <View className="flex-1 flex-row items-center space-x-2.5">
          <Image source={UserTheme} className="h-9 w-9" />
          <Text className="text-xl font-700">Notifications</Text>
        </View>

        <View className="flex-row items-center space-x-6">
          <Pressable
            onPress={handleClose}
            className="flex-row items-center space-x-2"
          >
            <Ionicon name="close" size={24} color={colors["theme-black"]} />
          </Pressable>
        </View>
      </View>

      <View className="divide-y divide-theme-b-gray p-3 space-y-1">
        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <MaterialCommunityIcons
              name="email-multiple-outline"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm">All</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>

        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <SimpleLineIcons
              name="envelope"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm mt-1">Read</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>

        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <Ionicon
              name="mail-unread-outline"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm">Unread</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>

        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <MaterialCommunityIcons
              name="email-remove-outline"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm">Rejected</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>

        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <MaterialCommunityIcons
              name="email-check-outline"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm">Approved</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>

        <View className="flex-row space-x-4 justify-between items-center h-10">
          <View className="flex-row space-x-3 items-center">
            <AntDesignIcon
              name="delete"
              size={20}
              color={colors["theme-black"]}
            />
            <Text className="font-600 text-sm">Bin</Text>
          </View>
          <Text className="font-400 text-xs">120 notifications</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCategoryModal;
