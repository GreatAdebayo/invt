import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../elements/button";
import { useAppSelector } from "../../redux/store";
import { removeAlert } from "../../redux/alert";
import Ionicon from "../Icon/ionicon"; // Assuming this is your icon library

const AlertModal = () => {
  const dispatch = useDispatch();
  const { alert } = useAppSelector((state) => state.alerts);

  const handleOnDone = () => {
    dispatch(removeAlert());
  };

  if (!alert) {
    return null;
  }

  // Dynamic values based on the alert type
  let iconName = "checkmark-circle";
  let iconColor = "green";

  if (alert.type === "error") {
    iconName = "close-circle";
    iconColor = "red";
  } else if (alert.type === "warning") {
    iconName = "alert-circle";
    iconColor = "orange";
  } else if (alert.type === "info") {
    iconName = "information-circle";
    iconColor = "blue";
  }

  return (
    <View className="w-full bg-white bottom-0 absolute items-center justify-center rounded-t-2xl px-12 py-12 space-y-8">
      <Text className="font-400 text-base text-center capitalize">
        {alert.message}
      </Text>

      <View>
        <Ionicon name={iconName} size={80} color={iconColor} />
      </View>

      <View className="w-full">
        <Button onPress={handleOnDone} title="Done" variant="primary" />
      </View>
    </View>
  );
};

export default AlertModal;
