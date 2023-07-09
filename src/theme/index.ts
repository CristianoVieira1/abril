import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  device: {
    width: width,
    height: height,
  },
  border: {
    radius: "0.4rem",
  },
  fonts: {
    regular: "PublicSans_400Regular",
    medium: "PublicSans_500Medium",
    bold: "PublicSans_700Bold",
    aliceMedium: "Alice_400Regular",
    sizes: {
      xxsmall: "10px",
      xsmall: "10px",
      small: "14px",
      medium: "18px",
      large: "24px",
      xlarge: "34px",
      xxlarge: "39px",
      xxxlarge: "64px",
    },
  },
  colors: {
    white: "#FFFFFF",
    orange: "#FF8200",
    red: "#FF543D",
    lightGray: "#9CA3AF",
    darkGray: "#1F2937",
    background: "#F3F2F8",
    black: "#000000",
    text: "#3C3C4399",
    border: "#C5CADA",
    inputBackground: "#7676801F",
    gray: "#808080",
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    shadowColor: "#00000066",
  },
  spacings: {
    xxsmall: "6px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "24px",
    xxlarge: "34px",
    xxxlarge: "42px",
  },
};
