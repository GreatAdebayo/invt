import { Pressable } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../utils/constants";

interface Props {
  action: () => void;
}

const BackButton = ({ action }: Props) => {
  return (
    <Pressable onPress={action}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={32}
        color={colors["theme-black"]}
      />
    </Pressable>
  );
};

export default BackButton;
