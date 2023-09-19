import "styled-components";

type ColorPalette = {
  main: string;
  light: string;
  dark: string;
};

export type ColorVariants = {
  primary: ColorPalette;
  secondary: ColorPalette;
  error: ColorPalette;
  warning: ColorPalette;
  info: ColorPalette;
  success: ColorPalette;
  background: ColorPalette;
  text: ColorPalette;
};

type ColorTheme = ColorVariants & {
  white: string;
  black: string;
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
  black: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTheme;
    fonts: {
      family: {
        primary: string;
        secondary: string;
        code: string;
      };
      size: SizeVariations;
      weight: FontWeight;
    };
    spacing: SizeVariations;
    borderRadius: SizeVariations;
  }
}
