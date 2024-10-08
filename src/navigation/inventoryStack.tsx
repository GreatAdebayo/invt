import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InventoryScreen from "../screens/dashboard/inventoryScreen";

const InventoryStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="InventoryScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
    </Stack.Navigator>
  );
};

export default InventoryStack;
