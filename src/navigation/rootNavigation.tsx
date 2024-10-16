import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomNavigator from "./bottomNavigation";
import LoginScreen from "../screens/auth/loginScreen";
import LoginNoRoleScreen from "../screens/auth/loginNoRoleScreen";
import LandingPageScreen from "../screens/auth/landingPageScreen";
import { colors } from "../utils/constants";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors["theme-light-gray"],
  },
};

const RootNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName={"login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="landing"
          component={LandingPageScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="no_role"
          component={LoginNoRoleScreen}
          options={{ animation: "fade_from_bottom" }}
        />
        <Stack.Screen name="dashboard" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
