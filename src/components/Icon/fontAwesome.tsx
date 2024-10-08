import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  name: string;
  size: number;
  color: string;
}
const FontAwesome = ({ name, size, color }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default FontAwesome;
