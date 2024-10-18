import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import Button from "../elements/button";

interface Props {
  handleOnDone: () => void;
  title: string;
  icon: ReactNode;
}

const RequestSubmittedModal = ({ handleOnDone, title, icon }: Props) => {
  return (
    <View className="w-full bg-white bottom-0 absolute items-center justify-center rounded-t-2xl px-12 py-12 space-y-11">
      <Text className="font-400 text-base text-center">{title}</Text>

      <View>{icon}</View>

      <View className="w-full">
        <Button onPress={handleOnDone} title="Done" variant="primary" />
      </View>
    </View>
  );
};

export default RequestSubmittedModal;
