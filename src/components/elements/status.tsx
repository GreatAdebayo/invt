import { View, Text } from "react-native";
import React from "react";
import clsx from "clsx";
import { StatusVariantT } from "../../utils/type";

interface Props {
  title: string;
  variant: StatusVariantT;
}

const Status = ({ title, variant }: Props) => {
  const variants = {
    green: "bg-theme-light-green",
    yellow: "bg-theme-light-yellow",
    danger: "bg-theme-light-red",
  };

  const textVariants = {
    green: "text-theme-green",
    yellow: "text-theme-yellow",
    danger: "text-theme-red",
  };

  return (
    <View
      className={clsx(
        "h-6 flex-row rounded items-center justify-center self-start px-3 space-x-2",
        variants[variant]
      )}
    >
      <Text className={clsx("text-[10px] font-500", textVariants[variant])}>
        {title}
      </Text>
    </View>
  );
};

export default Status;
