import React, { useCallback, useState } from "react";

import Feather from "react-native-vector-icons/FontAwesome";
import { useAppDispatch } from "../../store/hook";
import repositoriesSlice from "../../store/repositories/repositoriesSlice";
import theme from "../../theme";
import * as S from "./styles";

const Filters = () => {
  const dispatch = useAppDispatch();

  const [repositoriesName, updateRepositoriesName] = useState<string>("");

  function onSearchHandler() {
    dispatch(repositoriesSlice.actions.fetchRepositories(repositoriesName));
  }

  function onClearSearch(): void {
    updateRepositoriesName("");
  }

  const SearchIcon = useCallback(() => {
    if (!repositoriesName.length) {
      return (
        <Feather
          name="search"
          size={24}
          color={theme.colors.gray}
          onPress={onSearchHandler}
        />
      );
    }

    return (
      <S.ButtonClear onPress={onClearSearch}>
        <Feather name="times" size={24} color={theme.colors.gray} />
      </S.ButtonClear>
    );
  }, [repositoriesName]);

  return (
    <S.SearchView>
      <SearchIcon />
      <S.Input
        value={repositoriesName}
        onChangeText={updateRepositoriesName}
        placeholder="Busca por repositórios"
        returnKeyType="search"
        blurOnSubmit={true}
        onBlur={onSearchHandler}
      />
    </S.SearchView>
  );
};

export default Filters;
