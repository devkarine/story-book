import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  colors: {
    primary: {
      main: "#d8cb13",
      light: "#e7e073",
      dark: "#c4b703",
    },
    secondary: {
      main: "#f06c1f",
      light: "#f79a5d",
      dark: "#a63f00",
    },
    error: {
      main: "#FF1010",
    },
    warning: {
      main: "#FAC736",
    },
    info: {
      main: "#58d5ee",
    },
    success: {
      main: "#1fa858",
    },
    background: {
      main: "#F2F2F2",
      light: "#ffffff",
      dark: "#d9d9d9",
    },
    text: {
      main: "#004793",
      light: "#0761bf",
      dark: "#003063",
    },
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    family: {
      primary: "Inter, Roboto, sans-serif",
      secondary: "Montserrat, sans-serif",
    },
    size: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.6rem",
      lg: "2.4rem",
      xl: "3.2rem",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  spacing: {
    xs: "0.4rem",
    sm: "1.2rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "3.2rem",
  },
  borderRadius: {
    xs: "0.2rem",
    sm: "0.4rem",
    md: "0.8rem",
    lg: "1.2rem",
    xl: "1.6rem",
  },
};

export const dark: DefaultTheme = {
  ...light,
  colors: {
    ...light.colors,
    background: {
      main: "#1c1c1c",
      light: "#404040",
      dark: "#0d0d0d",
    },
    text: {
      main: "#F2F2F2",
      light: "#ffffff",
      dark: "#d9d9d9",
    },
  },
};
