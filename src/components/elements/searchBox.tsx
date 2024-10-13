import { View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import clsx from "clsx";
import { colors } from "../../utils/constants";
import { SearchNormal1 } from "iconsax-react-native";
import { styles } from "../../utils/globalStyle";

const SearchBox = () => {
  return (
    <View className="self-start flex-row items-center">
      <View className="absolute left-3 text-gray-400">
        <SearchNormal1 size="18" color={colors["theme-text-gray"]} />
      </View>

      <TextInput
        style={styles.input}
        placeholder={"Search for anything"}
        className={clsx(
          "h-10 pl-9 pr-4 pt-0.5 rounded w-full"
        )}
        placeholderTextColor={colors["theme-text-gray"]}
      />
    </View>
  );
};

export default SearchBox;
