import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/dashboard/homeScreen";
import StockItemsScreen from "../screens/dashboard/home/stockItemsScreen";
import NotificationScreen from "../screens/dashboard/home/notificationScreen";
import NotificationDetailsScreen from "../screens/dashboard/home/NotificationDetailsScreen";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StockItemsScreen" component={StockItemsScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetailsScreen"
        component={NotificationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
