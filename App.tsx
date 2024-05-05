const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPage from "./screens/LoginPage";
import RadioButtontruedefault from "./screens/RadioButtontruedefault";
import Home from "./screens/Home";
import Loading from "./screens/Loading";
import Results from "./screens/Results";
import LoginError from "./screens/LoginError";
import TelaDeErroDeCriaoDeAn from "./screens/TelaDeErroDeCriaoDeAn";
import CampaignPage from "./screens/CampaignPage";
import InfluencerData from "./screens/InfluencerData";
import SignUp from "./screens/SignUp";
import BackToHome from "./screens/BackToHome";
import TypecontainerWidthfullPr from "./components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "./components/SizetinyRingfalse";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginError"
              component={LoginError}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaDeErroDeCriaoDeAn"
              component={TelaDeErroDeCriaoDeAn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CampaignPage"
              component={CampaignPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InfluencerData"
              component={InfluencerData}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BackToHome"
              component={BackToHome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
