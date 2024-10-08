import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  name: string;
  size: number;
  color: string;
}
const MaterialIcons = ({ name, size, color }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default MaterialIcons;
