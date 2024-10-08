import RootNavigation from "./src/navigation/rootNavigation";
import LoginNoRoleScreen from "./src/screens/auth/loginNoRoleScreen";
import LoginScreen from "./src/screens/auth/loginScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    t_100: require("./assets/fonts/Gilroy-Thin.ttf"),
    e_200: require("./assets/fonts/Gilroy-UltraLight.ttf"),
    l_300: require("./assets/fonts/Gilroy-Light.ttf"),
    r_400: require("./assets/fonts/Gilroy-Regular.ttf"),
    m_500: require("./assets/fonts/Gilroy-Medium.ttf"),
    s_600: require("./assets/fonts/Gilroy-SemiBold.ttf"),
    bo_700: require("./assets/fonts/Gilroy-Bold.ttf"),
    exb_800: require("./assets/fonts/Gilroy-ExtraBold.ttf"),
    ba_900: require("./assets/fonts/Gilroy-Black.ttf"),
    h_950: require("./assets/fonts/Gilroy-Heavy.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <RootNavigation />
    </>
  );
}
