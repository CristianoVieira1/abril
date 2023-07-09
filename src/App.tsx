import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Routes, { navigationRef } from "./routes";
import { store } from "./store";
import theme from "./theme";

function App() {
  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Routes />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
  return null;
}

export default () => (
  <RootSiblingParent>
    <App />
  </RootSiblingParent>
);
