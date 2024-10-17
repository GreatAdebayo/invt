import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import BackButton from "../../../components/elements/backButton";
import { useNavigation } from "@react-navigation/native";
import SearchAndDateRange from "../../../components/elements/searchAndDateRange";
import Button from "../../../components/elements/button";
import CartItems from "../../../components/cards/cartItems";
import Modal from "react-native-modal";
import DeleteModal from "../../../components/modals/deleteModal";

const AllCartScreen = () => {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState({
    delete: false,
    send: false,
    sendAll: false,
    deleteAll: false,
  });

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <View className="h-12" />

      <View className="flex-row h-12 bg-theme-gray px-3 flex items-center">
        <View className="flex-1">
          <BackButton action={() => navigation.goBack()} />
        </View>

        <View className="flex-none">
          <Text className="text-xl font-700">All Carts</Text>
        </View>

        <View className="flex-1" />
      </View>

      <View className="px-3 mt-2 mb-4">
        <SearchAndDateRange />
      </View>

      <View className="flex-row items-center justify-between space-x-7 px-3 mb-3">
        <View className="flex-1">
          <Button
            onPress={() =>
              setModalVisible({ ...isModalVisible, deleteAll: true })
            }
            variant="danger"
            title="Delete All Request"
            size="sm"
          />
        </View>

        <View className="flex-1">
          <Button
            onPress={() =>
              setModalVisible({ ...isModalVisible, sendAll: true })
            }
            title="Send All Request"
            size="sm"
          />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        className="px-3 flex-1 mb-3"
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => (
          <CartItems
            handleDelete={() =>
              setModalVisible({ ...isModalVisible, delete: true })
            }
            handleSend={() =>
              setModalVisible({ ...isModalVisible, send: true })
            }
          />
        )}
      />



      {/* MODALS */}
      <Modal
        isVisible={isModalVisible.delete}
        animationIn="zoomInUp"
        onBackdropPress={() =>
          setModalVisible({ ...isModalVisible, delete: false })
        }
        style={{ marginHorizontal: 10, bottom: 0, marginVertical: 0 }}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
      >
        <DeleteModal
          title="Delete Request Confirmation"
          description="Are you Sure you want to Delete this Item?"
          handleDecline={() =>
            setModalVisible({ ...isModalVisible, delete: false })
          }
          handleAccept={() => {
            setModalVisible({ ...isModalVisible, delete: false });
          }}
        />
      </Modal>
    </View>
  );
};

export default AllCartScreen;
