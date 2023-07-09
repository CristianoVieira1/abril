import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../../theme";

interface ILoadProps {
  color?: string;
}

export function Load({ color }: ILoadProps) {
  const mockColor = theme.colors.orange;

  return (
    <ActivityIndicator
      color={color ? color : mockColor}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      testID="load-activity-indicator"
    />
  );
}
