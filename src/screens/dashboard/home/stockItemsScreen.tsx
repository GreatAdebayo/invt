import { View, Text, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import StockItems from "../../../components/cards/stockItems";
import SearchBox from "../../../components/elements/searchBox";
import RangeDatePicker from "../../../components/elements/rangeDatePicker";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../../components/elements/backButton";

const StockItemsScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row h-12 bg-theme-gray px-3 flex items-center">
        <View className="flex-1">
          <BackButton action={() => navigation.goBack()} />
        </View>

        <View className="flex-1">
          <Text className="text-xl font-700">Stock Items</Text>
        </View>

        <View className="flex-1" />
      </View>

      <View className="flex-row items-center space-x-4 px-3 mt-2 mb-4">
        <View className="w-2/5">
          <SearchBox />
        </View>

        <View className="flex-1">
          <RangeDatePicker />
        </View>
      </View>

      <FlatList
        className="px-3 flex-1"
        showsVerticalScrollIndicator={false}
        data={[
          {
            id: 1,
            name: "Trophy Stout",
            asset: "20000",
            no: "500",
            status: "pending",
          },
          {
            id: 2,
            name: "Trophy Stout",
            asset: "20000",
            no: "500",
            status: "rejected",
          },
          {
            id: 3,
            name: "Trophy Stout",
            asset: "20000",
            no: "500",
            status: "approved",
          },
          {
            id: 4,
            name: "Trophy Stout",
            asset: "20000",
            no: "500",
            status: "rejected",
          },
          {
            id: 5,
            name: "Trophy Stout",
            asset: "20000",
            no: "500",
            status: "rejected",
          },
        ]}
        ItemSeparatorComponent={() => <View className="h-0.5" />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StockItems item={item} />}
      />
    </View>
  );
};

export default StockItemsScreen;
