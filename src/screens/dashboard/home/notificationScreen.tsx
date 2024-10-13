import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import UserTheme from "../../../../assets/images/userTheme.png";
import { Image } from "react-native";
import Ionicon from "../../../components/Icon/ionicon";
import { colors } from "../../../utils/constants";
import Button from "../../../components/elements/button";
import { SearchNormal1 } from "iconsax-react-native";
import NotificationItems from "../../../components/cards/notificationItems";
import NotificationCategoryModal from "../../../components/modals/notificationCategoryModal";
import Modal from "react-native-modal";

const NotificationScreen = () => {
  const [viewState, setViewState] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row pt-2 pb-10 bg-theme-gray px-3 items-center justify-between space-x-4">
        <View className="flex-1 flex-row items-center space-x-2.5">
          <Image source={UserTheme} className="h-9 w-9" />
          <Text className="text-xl font-700">Notifications</Text>
        </View>

        <View className="flex-row items-center space-x-6">
          <SearchNormal1 size="18" color={colors["theme-text-gray"]} />
          <Pressable
            onPress={toggleModal}
            className="flex-row items-center space-x-2"
          >
            <Ionicon name="filter" size={20} color={colors["theme-black"]} />
            <Text className="font-500 text-xs">Filter</Text>
          </Pressable>
        </View>
      </View>

      <View className="px-3 -mb-3">
        <View className="bg-theme-gray h-12 -top-6 border-t border-theme-text-gray py-2 px-4 rounded flex-row items-center space-x-4">
          <View className="flex-1">
            <Button
              title="Rejected Request"
              size="xs"
              onPress={() => setViewState(!viewState)}
              variant={viewState ? "primary" : "transparent"}
            />
          </View>

          <View className="flex-1">
            <Button
              title="Approved Request"
              size="xs"
              variant={!viewState ? "primary" : "transparent"}
              onPress={() => setViewState(!viewState)}
            />
          </View>
        </View>
      </View>

      <FlatList
        className="flex-1 px-3"
        showsVerticalScrollIndicator={false}
        data={[
          {
            id: 1,
            name: "Request ID 2_2024 Leo Rejected",
            status: "Unread",
            desc: "Admin has rejected your request for stock 12345. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "12/13/2024  5:12 PM",
          },
          {
            id: 2,
            name: "Request ID 2_2024 Leo Rejected",
            status: "Read",
            desc: "Admin has rejected your request for stock 12345. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "12/13/2024  5:12 PM",
          },
          {
            id: 3,
            name: "Request ID 2_2024 Leo Rejected",
            status: "Unread",
            desc: "Admin has rejected your request for stock 12345. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "12/13/2024  5:12 PM",
          },
          {
            id: 4,
            name: "Request ID 2_2024 Leo Rejected",
            status: "Read",
            desc: "Admin has rejected your request for stock 12345. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "12/13/2024  5:12 PM",
          },
          {
            id: 5,
            name: "Request ID 2_2024 Leo Rejected",
            status: "Unread",
            desc: "Admin has rejected your request for stock 12345. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "12/13/2024  5:12 PM",
          },
        ]}
        ItemSeparatorComponent={() => <View className="h-0.5" />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationItems item={item} />}
      />

      <Modal
        isVisible={isModalVisible}
        animationIn="zoomInUp"
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        style={{ marginHorizontal: 10, bottom: 0, marginVertical: 0 }}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
      >
        <NotificationCategoryModal handleClose={toggleModal} />
      </Modal>
    </View>
  );
};

export default NotificationScreen;
