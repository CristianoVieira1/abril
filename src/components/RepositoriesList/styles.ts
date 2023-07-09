import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Offers = styled.FlatList.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
` as unknown as typeof FlatList;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 99999;
`;
