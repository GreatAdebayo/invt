import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import TradeMarketingAdmin from "../../../assets/images/tmm-admin.svg";
import StockController from "../../../assets/images/stock-controller.svg";
import TradeMarketingManager from "../../../assets/images/tmm-manager.svg";
import Logo from "../../../assets/images/logo.svg";
import BackButton from "../../components/elements/backButton";
import { useNavigation } from "@react-navigation/native";

const LandingPageScreen = () => {
  const navigation = useNavigation<any>();

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
            <Text className="text-2xl font-700">Welcome Jane 👋</Text>
            <Text className="text-lg font-600">Select a module</Text>
          </View>

          <View className="flex-row items-center justify-around space-x-4">
            <Pressable onPress={() => navigation.navigate("DashboardScreen")}>
              <TradeMarketingAdmin />
            </Pressable>

            <View>
              <StockController />
            </View>
          </View>

          <View className="w-full items-center">
            <TradeMarketingManager />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LandingPageScreen;
