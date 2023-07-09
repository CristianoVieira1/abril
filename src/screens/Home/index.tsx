import React, { useRef, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { RefreshControl, ScrollView } from "react-native";
import { Load } from "../../components/Animations/Load";
import Filters from "../../components/Filters";
import { RepositoriesList } from "../../components/RepositoriesList";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import repositoriesSlice from "../../store/repositories/repositoriesSlice";
import theme from "../../theme";
import * as S from "./styles";

const Home = () => {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<ScrollView>(null);
  const [repositoriesData, updateRepositoriesData] = useState<string>("");
  const repositoriesState = useAppSelector((state) => state.repositories);

  function handleGetRepositories() {
    dispatch(repositoriesSlice.actions.fetchRepositories(repositoriesData));
  }

  return (
    <S.Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <S.Title>Repositórios</S.Title>
      <Filters />
      <S.Content>
        <S.List
          ref={scrollRef}
          refreshControl={
            <RefreshControl
              onRefresh={handleGetRepositories}
              colors={[theme.colors.orange]}
              tintColor={theme.colors.orange}
              refreshing={repositoriesState.repositoriesLoading || false}
            />
          }
        >
          {repositoriesState.repositoriesLoading ? (
            <S.LoadView>
              <Load />
            </S.LoadView>
          ) : (
            <RepositoriesList />
          )}
        </S.List>
      </S.Content>
    </S.Container>
  );
};

export default Home;
