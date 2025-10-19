import "./App.css";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.ts";
import { CssBaseline, Stack } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import MaterialManagement from "./components/MaterialManagement.tsx";
import AppProvider from "./providers/AppProvider.tsx";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="700px"
      margin="auto"
    >
      <AppProvider>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MaterialManagement />
          </ThemeProvider>
        </CacheProvider>
      </AppProvider>
    </Stack>
  );
}

export default App;
