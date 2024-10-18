import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ionicon from "../../components/Icon/ionicon";
import { colors } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import clsx from "clsx";
import InventoryItems from "../../components/cards/inventoryItems";
import SearchAndDateRange from "../../components/elements/searchAndDateRange";

const InventoryScreen = () => {
  const navigation = useNavigation<any>();

  const category = [
    "All",
    "Trophy",
    "Flying Fish",
    "Budweiser",
    "Trophy",
    "Budweiser",
    "Flying Fish",
  ];

  return (
    <View className="flex-1 py-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row h-12 bg-theme-gray px-3 space-x-4 flex items-center justify-between">
        <View className="flex-row items-center space-x-2">
          <Ionicon name="filter" size={20} color={colors["theme-black"]} />
          <Text className="font-500 text-xs">Filter Warehouse</Text>
        </View>

        <View>
          <Pressable onPress={() => navigation.navigate("RequestNewItemScreen")}>
            <Text className="underline text-sm font-500 text-link-blue">
              Request New Item
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="px-3 mt-2 mb-4">
        <SearchAndDateRange />
      </View>

      <View className="mb-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {category.map((each, i) => (
            <TouchableOpacity
              key={i}
              className={clsx(
                "h-7 items-center justify-center px-3 rounded",
                i === 0 ? "bg-theme-black mx-3.5" : "bg-theme-gray mr-3.5"
              )}
            >
              <Text
                className={clsx(
                  "font-500 text-xs",
                  i === 0 ? "text-white" : "text-theme-black"
                )}
              >
                {each}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        className="px-3 flex-1"
        showsVerticalScrollIndicator={false}
        data={[
          {
            id: 1,
            name: "Budweiser Bottled Drink",
            size: "50cl",
            price: "445,2356",
          },
          {
            id: 2,
            name: "Budweiser Bottled Drink",
            size: "50cl",
            price: "445,2356",
          },
          {
            id: 3,
            name: "Budweiser Bottled Drink",
            size: "50cl",
            price: "445,2356",
          },
          {
            id: 4,
            name: "Budweiser Bottled Drink",
            size: "50cl",
            price: "445,2356",
          },
          {
            id: 5,
            name: "Budweiser Bottled Drink",
            size: "50cl",
            price: "445,2356",
          },
          {
            id: 6,
            name: "Hero Can Bottle",
            size: "50cl",
            price: "445,2356",
          },
        ]}
        ItemSeparatorComponent={() => <View className="h-0.5" />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InventoryItems item={item} />}
      />
    </View>
  );
};

export default InventoryScreen;
