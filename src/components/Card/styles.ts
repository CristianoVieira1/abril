import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const CardContainer = styled.TouchableOpacity`
  margin-top: ${heightPercentageToDP("2%")}px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
`;

export const CardImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 32px;
`;

export const CardContent = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;

export const CardSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  margin-top: 4px;
`;

export const CardLine = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 290px;
`;

export const CardStars = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-left: auto;
  margin-bottom: 30px;
`;
