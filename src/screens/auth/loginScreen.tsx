import { View, Text, ScrollView } from "react-native";
import React from "react";
import Logo from "../../../assets/images/logo.svg";
import InternalUser from "../../../assets/icons/internalUser.svg";
import Button from "../../components/elements/button";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/constants";
import { ENVIRONMENT } from "@env";


const LoginScreen = ({navigation} :{navigation:any}) => {
  return (
    <View className="flex-1 px-3 py-1">
      <View className="h-12" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="space-y-12">
          <View>
            <Logo />
          </View>

          <View className="space-y-2">
            <Text className="text-2xl font-600">
              Login{" "}
              <Text className="text-base text-theme-text-gray uppercase">
                ({ENVIRONMENT})
              </Text>
            </Text>
            {/* <Text className="font-500">Choose a login method</Text> */}
          </View>

          <View className="flex-row justify-around items-center">
            <View className="space-y-4 items-center">
              <View className="border-2 border-theme-blue w-[100px] h-[100px] rounded-[20px] flex items-center justify-center">
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
          </View>

          <View>
            <Button onPress={() => navigation.navigate("LoginNoRoleScreen")} title={"Continue"} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
