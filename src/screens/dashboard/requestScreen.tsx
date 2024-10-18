import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import SearchAndDateRange from "../../components/elements/searchAndDateRange";
import Ionicon from "../../components/Icon/ionicon";
import { colors } from "../../utils/constants";
import { Show, ShowElse, ShowWhen } from "../../components/elements/show";
import RequestStockItems from "../../components/cards/requestStockItems";
import { FlatList } from "react-native";
import clsx from "clsx";

const RequestScreen = () => {
  const [showView, setShowView] = useState(true);

  return (
    <View className="flex-1 py-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row bg-theme-gray px-3 space-x-6 flex items-center justify-between">
        <Pressable
          onPress={() => setShowView(true)}
          className={clsx(
            "h-12 flex items-center justify-center px-2 rounded",
            showView && "border-b-4 border-theme-blue"
          )}
        >
          <Text className="text-sm font-500">Request Overview</Text>
        </Pressable>

        <Pressable
          onPress={() => setShowView(false)}
          className={clsx(
            "h-12 flex items-center justify-center px-2 rounded",
            !showView && "border-b-4 border-theme-blue"
          )}
        >
          <Text className="text-sm font-500">Request Disbursement</Text>
        </Pressable>
      </View>

      <View className="px-3 mt-2 mb-4">
        <SearchAndDateRange />
      </View>

      <View className="bg-theme-gray h-10 px-4 py-2 flex-row items-center justify-between">
        <Text className="font-600 text-sm">Stock Items</Text>

        <View className="flex-row items-center space-x-2">
          <Ionicon name="filter" size={20} color={colors["theme-black"]} />
          <Text className="font-500 text-xs">Filter Warehouse</Text>
        </View>
      </View>

      <Show>
        <ShowWhen isTrue={showView}>
          <FlatList
            className="p-3 flex-1"
            showsVerticalScrollIndicator={false}
            data={[
              {
                id: 1,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "pending",
              },
              {
                id: 2,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 3,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "approved",
              },
              {
                id: 4,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 5,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 6,
                requester: "John Ken 2",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
            ]}
            ItemSeparatorComponent={() => <View className="h-0.5" />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RequestStockItems item={item} />}
            ListFooterComponent={<View className="h-5" />}
          />
        </ShowWhen>

        <ShowElse>
          <FlatList
            className="p-3 flex-1"
            showsVerticalScrollIndicator={false}
            data={[
              {
                id: 1,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "pending",
              },
              {
                id: 2,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 3,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "approved",
              },
              {
                id: 4,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 5,
                requester: "John Ken",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
              {
                id: 6,
                requester: "John Ken 2",
                RequestID: "2_2024 Leo",
                vendor: "Kate Mark",
                status: "rejected",
              },
            ]}
            ItemSeparatorComponent={() => <View className="h-0.5" />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RequestStockItems item={item} isDisbursed={true} />
            )}
            ListFooterComponent={<View className="h-5" />}
          />
        </ShowElse>
      </Show>
    </View>
  );
};

export default RequestScreen;
