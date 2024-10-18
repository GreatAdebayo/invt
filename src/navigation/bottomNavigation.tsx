import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RequestScreen from "../screens/dashboard/requestScreen";
import ReportScreen from "../screens/dashboard/reportScreen";

//icons
import HomeActiveIcon from "../../assets/icons/homeActive.svg";
import HomeInactiveIcon from "../../assets/icons/homeInactive.svg";
import InventoryInactiveIcon from "../../assets/icons/inventoryInactive.svg";
import InventoryActiveIcon from "../../assets/icons/inventoryActive.svg";
import RequestInactiveIcon from "../../assets/icons/requestInactive.svg";
import RequestActiveIcon from "../../assets/icons/requestActive.svg";
import ReportInactiveIcon from "../../assets/icons/reportInactive.svg";
import ReportActiveIcon from "../../assets/icons/reportActive.svg";
import HomeStack from "./homeStack";
import { colors } from "../utils/constants";
import InventoryStack from "./inventoryStack";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              {focused ? <HomeActiveIcon /> : <HomeInactiveIcon />}
              <Text
                className={`text-xs ${
                  focused
                    ? "text-theme-blue font-700"
                    : "text-theme-black font-500"
                }`}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Inventory"
        component={InventoryStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              {focused ? <InventoryActiveIcon /> : <InventoryInactiveIcon />}
              <Text
                className={`text-xs ${
                  focused
                    ? "text-theme-blue font-700"
                    : "text-theme-black font-500"
                }`}
              >
                Inventory
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              {focused ? <RequestActiveIcon /> : <RequestInactiveIcon />}
              <Text
                className={`text-xs ${
                  focused
                    ? "text-theme-blue font-700"
                    : "text-theme-black font-500"
                }`}
              >
                Request
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              {focused ? <ReportActiveIcon /> : <ReportInactiveIcon />}
              <Text
                className={`text-xs ${
                  focused
                    ? "text-theme-blue font-700"
                    : "text-theme-black font-500"
                }`}
              >
                Report
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: colors["theme-gray"],
    padding: 8,
    height: Platform.OS === "android" ? 55 : 88,
  },
});

export default BottomNavigator;
