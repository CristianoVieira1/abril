import React, { useState } from "react";
import Feather from "react-native-vector-icons/FontAwesome";

import { RouteProp, useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";

import { StatusBar } from "expo-status-bar";
import { Load } from "../../components/Animations/Load";
import theme from "../../theme";
import * as S from "./styles";

interface IProps {
  route: RouteProp<{ params: { name: string; url: string } }, "params">;
}

const RepositoriesDetails = (props: IProps) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <S.Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <S.Header>
        <Feather
          name="arrow-left"
          size={18}
          color={theme.colors.gray}
          onPress={() => navigation.goBack()}
        />
        <S.RepositorieName>{props.route.params.name}</S.RepositorieName>
      </S.Header>
      <S.Content>
        <WebView
          source={{ uri: props.route.params.url }}
          originWhitelist={["*"]}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={(e) => {
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <S.LoadingContent>
            <Load />
          </S.LoadingContent>
        )}
      </S.Content>
    </S.Container>
  );
};

export default RepositoriesDetails;
