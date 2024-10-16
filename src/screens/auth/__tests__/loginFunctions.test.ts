import {
  createDiscoveryUrl,
  createRedirectUri,
  getAccessToken,
  handleSSOLogin,
} from "../loginFunctions";
import { exchangeCodeAsync } from "expo-auth-session";

// Mock dependencies
jest.mock("expo-auth-session", () => ({
  useAuthRequest: jest.fn(),
  makeRedirectUri: jest.fn().mockReturnValue("exp://localhost:8082/--/login"),
  exchangeCodeAsync: jest.fn(),
}));

describe("SSO Functions", () => {
  it("should create a discovery URL", () => {
    const sut = createDiscoveryUrl;
    const tenantId = "tenant123";
    const expected = `https://login.microsoftonline.com/${tenantId}/v2.0`;

    const actual = sut(tenantId);

    expect(actual).toBe(expected);
  });

  it("should create a redirect URI", () => {
    const sut = createRedirectUri;
    const scheme = "inventoryapp";
    const path = "login";
    const expected = "exp://localhost:8082/--/login";

    const actual = sut(scheme, path);

    expect(actual).toBe(expected);
  });

  it("should handle SSO login by calling promptAsync", async () => {
    const promptAsync = jest.fn();
    await handleSSOLogin(promptAsync);
    expect(promptAsync).toHaveBeenCalled();
  });
});

describe("getAccessToken", () => {
  const clientId = "test-client-id";
  const code = "test-auth-code";
  const codeVerifier = "test-code-verifier";
  const redirectUri = "https://example.com/callback";
  const discovery = { tokenEndpoint: "https://example.com/token" };

  it("should return a valid string token", async () => {
    // Mock successful response with a valid idToken
    (exchangeCodeAsync as jest.Mock).mockResolvedValue({
      idToken: "valid-token-string",
    });

    const result = await getAccessToken(
      clientId,
      code,
      codeVerifier,
      redirectUri,
      discovery
    );

    // Ensure the result is a valid string
    expect(typeof result).toBe("string");
    expect(result).toBe("valid-token-string");
  });

  it("should fail the test if no token is returned (null or undefined)", async () => {
    // Mock response with null idToken
    (exchangeCodeAsync as jest.Mock).mockResolvedValue({
      idToken: null,
    });

    const result = await getAccessToken(
      clientId,
      code,
      codeVerifier,
      redirectUri,
      discovery
    );

    // Test should fail if result is not a valid string
    expect(result).not.toBe("valid-token-string");
    expect(result).toBeNull();
  });

  it("should fail the test if exchangeCodeAsync throws an error", async () => {
    // Mock rejected promise from exchangeCodeAsync
    (exchangeCodeAsync as jest.Mock).mockRejectedValue(
      new Error("Failed to exchange code")
    );

    await expect(
      getAccessToken(clientId, code, codeVerifier, redirectUri, discovery)
    ).rejects.toThrow("Failed to exchange code");
  });
});
