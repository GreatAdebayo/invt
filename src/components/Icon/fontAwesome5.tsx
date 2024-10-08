import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

interface Props {
  name: string;
  size: number;
  color: string;
}
const FontAwesome5 = ({ name, size, color }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default FontAwesome5;
