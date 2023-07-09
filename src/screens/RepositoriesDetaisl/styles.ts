import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${heightPercentageToDP("8%")}px;
`;

export const RepositorieName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;
export const Content = styled.View`
  width: 100%;
  flex: 1;
`;

export const LoadingContent = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
