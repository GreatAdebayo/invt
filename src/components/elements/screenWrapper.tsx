import { View, ScrollView } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: Props) => {
  return (
    <View className="flex-1 px-3 py-1">
      <View className="h-12" />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">{children}</ScrollView>
    </View>
  );
};

export default ScreenWrapper;
