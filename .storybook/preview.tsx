import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/globalstyles";
import React from "react";
export const decorators = [
  withThemeFromJSXProvider({
    // Set Theme of Styled-Components on Storybook
    themes: {
      theme,
    },

    Provider: ThemeProvider,

    // Set GlobalStyle of Styled-Components on Storybook
    GlobalStyles,
  }),
  (Story) => (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <Story />
    </>
  ),
];
