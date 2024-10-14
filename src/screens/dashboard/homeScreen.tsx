import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/icons/logoIcon.svg";
import UserTheme from "../../../assets/images/userTheme.png";
import UserWhite from "../../../assets/images/userWhite.png";
import StockIcon from "../../../assets/icons/stockIcon.svg";
import DatePicker from "../../components/elements/datePicker";
import Button from "../../components/elements/button";
import StockItems from "../../components/cards/stockItems";
import { Show, ShowElse, ShowWhen } from "../../components/elements/show";
import { useNavigation } from "@react-navigation/native";
import NotificationIcon from "../../components/elements/notificationIcon";
import SearchAndDateRange from "../../components/elements/searchAndDateRange";

const HomeScreen = () => {
  const [viewState, setViewState] = useState(true);
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Show>
        <ShowWhen isTrue={viewState}>
          <ImageBackground
            source={require("../../../assets/images/black-bg.png")}
            resizeMode="cover"
            className="py-1.5 px-3"
          >
            <View className="h-12" />

            <View className="space-y-7">
              <View className="items-center justify-between space-x-4 flex-row">
                <Logo />
                <View className="flex-row items-center space-x-4">
                  <NotificationIcon />
                  <Image source={UserTheme} className="h-9 w-9" />
                </View>
              </View>

              <View className="space-y-5">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-theme-white font-600 text-base">
                      Available stock
                    </Text>
                    <StockIcon />
                  </View>
                  <DatePicker />
                </View>
                <Text className="text-2xl text-theme-white font-700">
                  12345,250
                </Text>
                <Text className="text-theme-white font-500">
                  1,250 Open stock{"  "}
                  <Text className="text-theme-light-gold font-600">
                    {" "}
                    +23.1%{" "}
                  </Text>
                  {"  "}
                  <Text className="text-theme-light-gold"> vs last month </Text>
                </Text>
              </View>
            </View>
            <View className="h-12" />
          </ImageBackground>
        </ShowWhen>

        <ShowElse>
          <ImageBackground
            source={require("../../../assets/images/theme-bg.png")}
            resizeMode="cover"
            className="py-1.5 px-3"
          >
            <View className="h-12" />

            <View className="space-y-7">
              <View className="items-center justify-between space-x-4 flex-row">
                <Logo />
                <View className="flex-row items-center space-x-4">
                  <NotificationIcon />
                  <Image source={UserWhite} className="h-9 w-9" />
                </View>
              </View>

              <View className="space-y-5">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-theme-white font-600 text-base">
                      Issued stock
                    </Text>
                    <StockIcon />
                  </View>
                  <DatePicker />
                </View>
                <Text className="text-2xl text-theme-white font-700">
                  523489,550
                </Text>
                <Text className="text-theme-white font-500">
                  5,550 Issued stock{"  "}
                  <Text className="text-theme-light-gold font-600">
                    {" "}
                    +23.1%{" "}
                  </Text>
                  {"  "}
                  <Text className="text-theme-light-gold"> vs last month </Text>
                </Text>
              </View>
            </View>
            <View className="h-12" />
          </ImageBackground>
        </ShowElse>
      </Show>

      <View className="px-3">
        <View className="bg-theme-gray h-12 -top-5 py-2 px-4 rounded flex-row items-center space-x-4">
          <View className="flex-1">
            <Button
              title="Available Stock"
              size="xs"
              onPress={() => setViewState(!viewState)}
              variant={viewState ? "primary" : "transparent"}
            />
          </View>

          <View className="flex-1">
            <Button
              title="Issued Stock"
              size="xs"
              variant={!viewState ? "primary" : "transparent"}
              onPress={() => setViewState(!viewState)}
            />
          </View>
        </View>

        <SearchAndDateRange />
      </View>

      <View className="mt-3 flex-1 space-y-3">
        <View className="bg-theme-gray h-10 px-4 py-2 flex-row items-center justify-between">
          <Text className="font-600 text-sm">Stock Items</Text>
          <Pressable onPress={() => navigation.navigate("StockItemsScreen")}>
            <Text className="underline text-xs font-500 text-link-blue">
              View all
            </Text>
          </Pressable>
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
    </View>
  );
};

export default HomeScreen;
