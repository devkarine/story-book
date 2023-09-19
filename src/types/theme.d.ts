import "styled-components";

type ColorPalette = {
  main: string;
  light?: string;
  dark?: string;
};

type SizeVariations = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type FontWeight = {
  light: number;
  regular: number;
  bold: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorPalette;
      secondary: ColorPalette;
      error: ColorPalette;
      warning?: ColorPalette;
      info?: ColorPalette;
      success?: ColorPalette;
      background: ColorPalette;
      text: ColorPalette;
      white: string;
      black: string;
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
      size: SizeVariations;
      weight: FontWeight;
    };
    spacing: SizeVariations;
    borderRadius: SizeVariations;
  }
}
