import {ThemeProvider} from "@material-ui/core";
import theme from "../src/common/theme";

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
