import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import React from "react";
import clsx from "clsx";

interface Props {
  variant?: "primary" | "transparent" | "danger" | "outline";
  size?: "md" | "sm" | "xs";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  textClassName?: "primary";
  isLoading?: boolean;
  classNames?: string;
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loaderColor?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  startIcon,
  textClassName = "primary",
  endIcon,
  isLoading = false,
  classNames,
  title,
  onPress,
  disabled,
  loaderColor = "white",
}: Props) => {
  const variants = {
    primary: "bg-theme-blue",
    transparent: "bg-transparent",
    danger: "bg-btn-red",
    outline: "border border-theme-b-gray",
  };

  const textVariant = {
    primary: "text-white",
    transparent: "text-theme-text-gray",
    danger: "text-theme-white",
    outline: "text-theme-black",
  };

  const sizes = {
    md: "px-4 h-12",
    sm: "px-4 h-9",
    xs: "px-4 h-8",
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        className={clsx(
          "flex-row items-center justify-center w-full space-x-3 rounded",
          variants[variant],
          sizes[size],
          classNames
        )}
      >
        {isLoading && <ActivityIndicator color={loaderColor} size={24} />}
        {!isLoading && startIcon}
        <Text
          className={clsx(
            "font-600",
            (startIcon || endIcon) && "mt-0.5",
            textVariant[variant],
            textClassName
          )}
        >
          {title}
        </Text>
        {endIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
