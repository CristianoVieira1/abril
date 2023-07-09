import React, { useState } from "react";
import { ListRenderItem } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store/hook";
import Card, { ICardProps } from "../Card";
import * as S from "./styles";

interface IRepositoriesData {
  id: number;
  title: string;
  subtitle: string;
  stars: number;
  image: string;
  html_url: string;
}

export function RepositoriesList() {
  const navigation = useNavigation();
  const repositoriesState = useAppSelector((state) => state.repositories);
  const [selectedRepositorie, setSelectedRepositorie] =
    useState<IRepositoriesData | null>(null);

  const renderItem: ListRenderItem<ICardProps> = ({ item }) => {
    return (
      <Card
        {...item}
        key={item.id}
        onAction={() => {
          navigation.navigate("RepositoriesDetails", {
            name: item.title,
            url: item?.html_url,
          });
        }}
      />
    );
  };

  return (
    <>
      <S.Offers
        data={repositoriesState?.repositories?.items?.map((repository) => ({
          id: repository?.id,
          title: repository?.name,
          subtitle: repository?.owner?.login,
          stars: repository?.stargazers_count,
          image: repository?.owner?.avatar_url,
          html_url: repository?.html_url,
        }))}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}
