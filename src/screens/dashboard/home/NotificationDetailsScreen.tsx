import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackButton from "../../../components/elements/backButton";
import { useNavigation } from "@react-navigation/native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../../../utils/constants";
import Ionicon from "../../../components/Icon/ionicon";
import UserTheme from "../../../../assets/images/userTheme.png";
import Button from "../../../components/elements/button";

const NotificationDetailsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row h-12 bg-theme-gray px-3 flex items-center">
        <View className="flex-1">
          <BackButton action={() => navigation.goBack()} />
        </View>

        <View className="flex-1 flex-row items-center space-x-5">
          <TouchableOpacity className="text-xl font-700">
            <Text className="font-500 text-[13px]">Mark As Read</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesignIcon
              name="delete"
              size={20}
              color={colors["theme-black"]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicon
              name={"arrow-redo-outline"}
              size={20}
              color={colors["theme-black"]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 py-3 px-3 space-y-12">
        <View className="space-y-5">
          <Text className="text-sm font-600">
            Request ID 2_2024 Leo Approved
          </Text>

          <View className="flex-row space-x-6 items-center">
            <View className="flex-1 flex-row items-center space-x-2.5">
              <Image source={UserTheme} className="h-9 w-9" />
              <Text className="text-sm font-600">John Philip Amadi</Text>
            </View>

            <Text className="text-sm text-[13px] font-500 text-theme-text-gray">
              Today 9:15 AM
            </Text>
          </View>
        </View>

        <View className="space-y-6">
          <Text  className="font-400 text-sm">Dear Philip,</Text>
          <Text className="font-400 text-sm">
            Admin has approved your request for stock 12345. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris at mauris turpis.
            Aliquam erat volutpat. Duis a nulla ac enim mattis dapibus vel ut
            sem. Maecenas vulputate ac turpis et iaculis. Vestibulum massa elit,
            iaculis et lobortis id, facilisis in eros. Nullam sodales aliquam
            elit sed efficitur. Proin metus eros, tincidunt ut hendrerit et,
            sollicitudin ac orci. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris at mauris turpis. Aliquam erat volutpat.
            Duis a nulla ac enim mattis dapibus vel ut sem. Maecenas vulputate
            ac turpis et iaculis. Vestibulum massa elit, iaculis et lobortis id,
            facilisis in eros
          </Text>
        </View>

        <View>
            <Button title={"View Approval"}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationDetailsScreen;
