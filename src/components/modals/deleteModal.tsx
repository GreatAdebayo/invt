import { View, Text } from "react-native";
import React from "react";
import Button from "../elements/button";

interface Props {
  handleDecline: () => void;
  handleAccept: () => void;
  title: string;
  description: string;
}

const DeleteModal = ({
  handleDecline,
  handleAccept,
  title,
  description,
}: Props) => {
  return (
    <View className="w-full bg-white bottom-0 absolute rounded-t-2xl px-12 py-12 space-y-11">
      <Text className="font-600 text-base text-center">{title}</Text>
      <Text className="text-base font-400 text-center">{description}</Text>

      <View className="flex-row items-center space-x-9">
        <View className="flex-1">
          <Button title="No" variant="outline" />
        </View>

        <View className="flex-1">
          <Button title="Yes" variant="primary" />
        </View>
      </View>
    </View>
  );
};

export default DeleteModal;
