import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Checkbox from "../form input/checkbox";
import CartImg from "../../../assets/images/cart-img.png";
import Button from "../elements/button";

interface Props {
  handleDelete: () => void;
  handleSend: () => void;
}

const CartItems = ({ handleSend, handleDelete }: Props) => {
  return (
    <View className="bg-white p-3 rounded space-y-4">
      <View className="flex-row space-x-5">
        <View className=" h-36 items-center justify-between">
          <View className="flex-row space-x-2 items-center">
            <Checkbox />
            <Pressable>
              <Text className="underline text-xs font-500 text-link-blue">
                Edit Request
              </Text>
            </Pressable>
          </View>
          <Image source={CartImg} className="w-24 h-24" resizeMode="contain" />
        </View>

        <View className="flex-1 space-y-2">
          <View className="space-y-2">
            <Text className="text-xs font-500">
              Request ID:{" "}
              <Text className="text-sm font-400 text-theme-text-gray">
                07_24_John
              </Text>
            </Text>

            <Text className="text-xs font-500">
              Request Date:{" "}
              <Text className="text-sm font-400 text-theme-text-gray">
                22/11/2024
              </Text>
            </Text>

            <Text className="text-xs font-500">
              Department:{" "}
              <Text className="text-sm font-400 text-theme-text-gray">
                Marketing
              </Text>
            </Text>

            <Text className="text-xs font-500">
              Requester Name:{" "}
              <Text className="text-sm font-400 text-theme-text-gray">
                John Philip
              </Text>
            </Text>
          </View>

          <View className="bg-theme-gray rounded flex-row justify-between space-x-4 items-center p-1.5">
            <Text className="font-500 text-xs">Item Names</Text>
            <Text className="font-500 text-xs">Qty</Text>
          </View>

          {[1, 2, 3].map((_, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center space-x-4 px-1.5"
            >
              <Text className="font-400 text-[10px]">
                Budweiser World Smoothest{" "}
              </Text>
              <Text className="font-400 text-[10px]">20</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="flex-row items-center justify-between space-x-3">
        <View className="flex-1">
          <Button
            onPress={handleDelete}
            variant="outline"
            title="Delete Request"
            size="sm"
          />
        </View>

        <View className="flex-1">
          <Button onPress={handleSend} title="Send Request" size="sm" />
        </View>
      </View>
    </View>
  );
};

export default CartItems;
