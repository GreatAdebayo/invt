import {
  makeRedirectUri,
  useAuthRequest,
  exchangeCodeAsync,
} from "expo-auth-session";
import { useAppDispatch } from "../../redux/store";
import { verifyTokenAndlogin } from "../../redux/auth/features";
import { ERROR_OCCURED_MESSAGE } from "../../utils/constants";
import { addAlert } from "../../redux/alert";

// SSO Service
export const createDiscoveryUrl = (tenantId: string): string => {
  return `https://login.microsoftonline.com/${tenantId}/v2.0`;
};

export const createRedirectUri = (scheme: string, path: string): string => {
  return makeRedirectUri({
    scheme,
    path,
    preferLocalhost: true,
  });
};

export const createAuthRequest = (
  clientId: string,
  redirectUri: string,
  discovery: any
) => {
  return useAuthRequest(
    {
      clientId,
      scopes: ["openid", "profile", "email", "offline_access"],
      redirectUri,
    },
    discovery
  );
};

export const handleSSOLogin = async (
  promptAsync: () => void
): Promise<void> => {
  promptAsync();
};

export async function getAccessToken(
  clientId: string,
  code: string,
  codeVerifier: string | undefined,
  redirectUri: string,
  discovery: any
): Promise<string | null> {
  const tokenResponse = await exchangeCodeAsync(
    {
      clientId,
      code,
      extraParams: codeVerifier ? { code_verifier: codeVerifier } : undefined,
      redirectUri,
    },
    discovery
  );

  return tokenResponse.idToken ?? null;
}

export const handleVerifyTokenAndLogin = async (
  payload: VerifyToken,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  const actionResult = await dispatch(verifyTokenAndlogin(payload));
  if (verifyTokenAndlogin.rejected.match(actionResult)) {
    if (actionResult.error) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      dispatch(
        addAlert({
          message: errorMessage,
          type: "error",
        })
      );
    }
  }
};

export const checkUserRoleAndNavigate = (user: User, navigation: any) => {
  if (user.role === null) {
    navigation.navigate("no_role");
  } else {
    navigation.navigate("dashboard");
  }
};
