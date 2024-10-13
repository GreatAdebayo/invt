import { View, Text } from "react-native";
import React from "react";
import RangeDatePicker from "./rangeDatePicker";
import SearchBox from "./searchBox";

const SearchAndDateRange = () => {
  return (
    <View className="rounded-t border-theme-b-gray divide-y divide-theme-b-gray bg-white">
      <View className="flex-row items-center justify-between">
        <View>
          <RangeDatePicker />
        </View>
        <Text className="text-sm text-theme-text-gray">to</Text>
        <View>
          <RangeDatePicker />
        </View>
      </View>

      <View className="bg-theme-gray rounded-b">
        <SearchBox />
      </View>
    </View>
  );
};

export default SearchAndDateRange;
