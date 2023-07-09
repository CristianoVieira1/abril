import styled from "styled-components/native";

export const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 1px;
  border-radius: 12px;
  padding: 0 30px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export const Input = styled.TextInput`
  height: 36px;
  padding: 0 19px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text};
  line-height: 22px;
`;

export const ButtonClear = styled.TouchableOpacity``;
