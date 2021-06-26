import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import { AuthContextProvider } from "./contexts/AuthContext";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <GlobalStyle />
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
