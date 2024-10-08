import { View, Text, ScrollView } from "react-native";
import React from "react";
import Logo from "../../../assets/images/logo.svg";
import UKFlag from "../../../assets/icons/ukflag.svg";
import InternalUser from "../../../assets/icons/internalUser.svg";
import ExternalUser from "../../../assets/icons/externalUser.svg";
import Button from "../../components/elements/button";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/constants";

const LoginScreen = () => {
  return (
    <View className="flex-1 px-3 py-1">
      <View className="h-12" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="space-y-12">
          <View className="flex-row items-center justify-between">
            <View>
              <Logo />
            </View>

            <View className="px-2.5 py-2 h-10 flex-row space-x-2.5 items-center justify-center border border-theme-border-gray rounded">
              <UKFlag />
              <Text className="font-500">English</Text>
            </View>
          </View>

          <View className="space-y-2">
            <Text className="text-2xl font-600">
              Login{" "}
              <Text className="text-base text-theme-text-gray">
                (Development)
              </Text>
            </Text>
            <Text className="font-500">Choose a login method</Text>
          </View>

          <View className="flex-row justify-around items-center">
            <View className="space-y-4 items-center">
              <View className="border-2 border-theme-border-gray w-[100px] h-[100px] rounded-[20px] flex items-center justify-center">
                <InternalUser />
              </View>
              <View className="flex-row space-x-1 items-center">
                <Text className="font-500 text-sm text-theme-text-gray">
                  Internal User
                </Text>
                <Icon
                  name="information-circle-outline"
                  size={14}
                  color={colors["theme-text-gray"]}
                />
              </View>
            </View>

            <View className="space-y-4 items-center">
              <View className="border-2 border-theme-border-gray w-[100px] h-[100px] rounded-[20px] flex items-center justify-center">
                <ExternalUser />
              </View>
              <View className="flex-row space-x-1 items-center">
                <Text className="font-500 text-sm text-theme-text-gray">
                  External User
                </Text>
                <Icon
                  name="information-circle-outline"
                  size={14}
                  color={colors["theme-text-gray"]}
                />
              </View>
            </View>
          </View>

          <View>
            <Button title={"Continue"} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
