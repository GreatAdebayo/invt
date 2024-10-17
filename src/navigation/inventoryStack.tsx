import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InventoryScreen from "../screens/dashboard/inventoryScreen";
import RequestNewItemScreen from "../screens/dashboard/inventory/requestNewItemScreen";
import AllCartScreen from "../screens/dashboard/inventory/allCartScreen";

const InventoryStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="InventoryScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
      <Stack.Screen
        name="RequestNewItemScreen"
        component={RequestNewItemScreen}
      />
      <Stack.Screen name="AllCartScreen" component={AllCartScreen} />
    </Stack.Navigator>
  );
};

export default InventoryStack;
