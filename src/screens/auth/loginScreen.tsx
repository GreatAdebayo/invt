import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Logo from "../../../assets/images/logo.svg";
import InternalUser from "../../../assets/icons/internalUser.svg";
import Button from "../../components/elements/button";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/constants";
import { ENVIRONMENT, CLIENT_ID, TENANT_ID } from "@env";
import * as WebBrowser from "expo-web-browser";
import { useAutoDiscovery } from "expo-auth-session";
import {
  createAuthRequest,
  createDiscoveryUrl,
  createRedirectUri,
  getAccessToken,
  handleSSOLogin,
  handleVerifyTokenAndLogin,
} from "./ssoFunctions";
import { useAppDispatch } from "../../redux/store";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useAppDispatch();
  const clientId = CLIENT_ID;
  const tenantId = TENANT_ID;

  // SSO Url
  const discovery = useAutoDiscovery(createDiscoveryUrl(tenantId));

  // Redirect Uri

  const redirectUri = createRedirectUri("inventoryapp", "login");

  // Request
  const [request, response, promptAsync] = createAuthRequest(
    clientId,
    redirectUri,
    discovery
  );

  useEffect(() => {
    // SSO TOKEN FROM AZURE
    const handleAuthResponse = async () => {
      if (response?.type === "success" && request) {
        // Add a null check for request
        const { code } = response.params;
        const token = await getAccessToken(
          clientId,
          code,
          request.codeVerifier,
          redirectUri,
          discovery
        );
        // decode token
        handleVerifyTokenAndLogin({ token }, dispatch);
      }
    };

    handleAuthResponse();
  }, [response]);

  return (
    <View className="flex-1 px-3 py-1">
      <View className="h-12" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="space-y-12">
          <View>
            <Logo />
          </View>

          <View className="space-y-2">
            <Text className="text-2xl font-600">
              Login{" "}
              <Text className="text-base text-theme-text-gray uppercase">
                ({ENVIRONMENT})
              </Text>
            </Text>
            {/* <Text className="font-500">Choose a login method</Text> */}
          </View>

          <View className="flex-row justify-around items-center">
            <View className="space-y-4 items-center">
              <View className="border-2 border-theme-blue w-[100px] h-[100px] rounded-[20px] flex items-center justify-center">
                <InternalUser />
              </View>
              <View className="flex-row space-x-1 items-center">
                <Text className="font-500 text-sm text-theme-text-gray">
                  Internal User
                </Text>
                <Icon
                  name="information-circle-outline"
                  size={14}
                  color={colors["theme-text-gray"]}
                />
              </View>
            </View>
          </View>

          <View>
            <Button
              onPress={() => {
                handleSSOLogin(promptAsync);
              }}
              title={"Continue"}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
