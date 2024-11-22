import { createTheme, MantineThemeOverride, virtualColor } from "@mantine/core";

export const theme: MantineThemeOverride = createTheme({
  //cursorType: 'pointer',
  //fontFamily: 'Inter, sans-serif',

  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "pink",
      light: "cyan",
    }),
    secondary: virtualColor({
      name: "primary",
      dark: "pink",
      light: "cyan",
    }),
  },

  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    "2xl": "96em",
    "3xl": "120em",
    "4xl": "160em",
  },
});
