import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import TradeMarketingAdmin from "../../../assets/images/tmm-admin.svg";
import StockController from "../../../assets/images/stock-controller.svg";
import TradeMarketingManager from "../../../assets/images/tmm-manager.svg";
import Logo from "../../../assets/images/logo.svg";
import BackButton from "../../components/elements/backButton";
import { useAppSelector } from "../../redux/store";
import { checkUserRoleAndNavigate } from "./loginFunctions";

const LandingPageScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View className="flex-1 px-3 py-1">
      <View className="h-12" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="space-y-12">
          <View className="flex-row items-center space-x-5">
            <BackButton action={() => navigation.goBack()} />
            <Logo />
          </View>

          <View className="space-y-2">
            <Text className="text-2xl font-700">
              Welcome {user.fullName} 👋
            </Text>
            <Text className="text-lg font-600">Select a module</Text>
          </View>

          <View className="flex-row items-center justify-around space-x-4">
            <Pressable
              onPress={() => {
                checkUserRoleAndNavigate(user, navigation);
              }}
            >
              <TradeMarketingAdmin />
            </Pressable>

            <Pressable
              onPress={() => {
                checkUserRoleAndNavigate(user, navigation);
              }}
            >
              <StockController />
            </Pressable>
          </View>

          <Pressable
            className="w-full items-center"
            onPress={() => {
              checkUserRoleAndNavigate(user, navigation);
            }}
          >
            <TradeMarketingManager />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default LandingPageScreen;
