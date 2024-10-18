import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Logo from "../../../assets/images/logo.svg";
import { UserRemove } from "iconsax-react-native";
import { colors } from "../../utils/constants";
import Button from "../../components/elements/button";
import ScreenWrapper from "../../components/elements/screenWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  checkUserRoleAndNavigate,
  handleVerifyTokenAndLogin,
} from "./loginFunctions";

const LoginNoRoleScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useAppDispatch();
  const { azureIdToken, isAuthenticating, isAuthenticated, user } =
    useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      checkUserRoleAndNavigate(user, navigation);
    }
  }, [isAuthenticated]);

  return (
    <ScreenWrapper>
      <View className="space-y-12">
        <View>
          <Logo />
        </View>

        <View className="items-center space-y-4 w-2/3 mx-auto">
          <View className="w-20 h-20 rounded-full items-center justify-center bg-theme-border-gray">
            <UserRemove
              size="32"
              color={colors["theme-text-gray"]}
              variant="Bold"
            />
          </View>
          <View className="items-center space-y-2">
            <Text className="text-xl font-600">No role assigned</Text>
            <Text className="text-base font-600 text-center text-theme-text-gray">
              Contact the admin to assign you a role
            </Text>
          </View>
        </View>

        <View>
          <Button
            title="Refresh"
            onPress={() => {
              handleVerifyTokenAndLogin({ token: azureIdToken }, dispatch);
            }}
            isLoading={isAuthenticating}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginNoRoleScreen;
