import React from "react";
import * as S from "./styles";

export interface ICardProps {
  id: number;
  title: string;
  subtitle: string;
  stars: number;
  image: string;
  html_url: string;
  onAction?: () => void;
}

const Card: React.FC<ICardProps> = ({
  title,
  subtitle,
  stars,
  image,
  onAction,
}) => {
  return (
    <S.CardContainer onPress={onAction}>
      <S.CardImage
        source={{
          uri: image,
        }}
      />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSubtitle>{subtitle}</S.CardSubtitle>
        <S.CardLine />
      </S.CardContent>
      <S.CardStars>{stars}</S.CardStars>
    </S.CardContainer>
  );
};

export default Card;
