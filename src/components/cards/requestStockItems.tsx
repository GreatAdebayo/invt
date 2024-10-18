import { View, Text } from "react-native";
import React from "react";
import Status from "../elements/status";
import { statusGenerator } from "../../utils/helper";
import Button from "../elements/button";

interface Props {
  item: any;
  isDisbursed?: boolean;
}

const RequestStockItems = ({ item, isDisbursed = false }: Props) => {
  return (
    <View className="bg-theme-white p-2 space-y-2.5">
      <View className="flex-row space-x-4 items-center justify-between">
        <Text className="text-sm font-500">
          Request ID:{" "}
          <Text className="text-sm font-400 text-theme-text-gray">
            {item.RequestID}
          </Text>
        </Text>
        <Status title={item.status} variant={statusGenerator(item.status)} />
      </View>
      <Text className="text-sm font-500">
        Requester Name:{" "}
        <Text className="text-sm font-400 text-theme-text-gray">
          {item.requester}
        </Text>
      </Text>
      <View className="flex-row flex-wrap space-x-4 items-center">
        <Text className="text-xs font-500">
          Date:{" "}
          <Text className="text-sm font-400 text-theme-text-gray">
            23/11/2024
          </Text>
        </Text>
        <Text className="text-xs font-500">
          Vendor:{" "}
          <Text className="text-sm font-400 text-theme-text-gray">
            {item.vendor}
          </Text>
        </Text>
      </View>

      {isDisbursed && (
        <View className="flex-row items-center justify-between space-x-7 pt-2">
          <View className="flex-1">
            <Button variant="outline" title="Delete Request" size="sm" />
          </View>

          <View className="flex-1">
            <Button title="Edit Request" size="sm" />
          </View>
        </View>
      )}
    </View>
  );
};

export default RequestStockItems;
