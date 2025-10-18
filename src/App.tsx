import "./App.css";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.ts";
import { CssBaseline } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import QueryProvider from "./providers/QueryPrivider.tsx";
import MaterialManagement from "./components/MaterialManagement.tsx";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <div className="flex justify-center items-center max-w-6xl">
      <QueryProvider>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MaterialManagement />
          </ThemeProvider>
        </CacheProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
