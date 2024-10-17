import { View, Text } from "react-native";
import React from "react";

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
    <View className="bg-white absolute w-full bottom-0">
       <Text>{title}</Text>
       <Text>{description}</Text>
    </View>
  );
};

export default DeleteModal;
