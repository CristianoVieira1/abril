import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  padding: ${heightPercentageToDP("8%")}px ${heightPercentageToDP("2%")}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  padding-bottom: ${heightPercentageToDP("2%")}px;
`;

export const Content = styled.View``;

export const LoadView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${heightPercentageToDP("20%")}px;
`;

export const List = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 180,
  },
})`
  z-index: 7;
`;
export const Offers = styled.FlatList.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
` as unknown as typeof FlatList;

export const View = styled.View`
  flex: 1;
`;
