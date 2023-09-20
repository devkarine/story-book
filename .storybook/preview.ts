import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';
import { ThemeProviderContext } from "../src/contexts/ThemeContext";
import { dark, light } from "../src/styles/themes";

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-color: ${({ theme }) => theme.colors.background};
    }
  `;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: light.colors.background.main },
        { name: "dark", value: dark.colors.background.main },
      ],
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: light,
        dark: dark,
      },
      defaultTheme: "light",
      Provider: ThemeProviderContext,
      GlobalStyles: GlobalStyles,
    }),
  ],
};

export default preview;
