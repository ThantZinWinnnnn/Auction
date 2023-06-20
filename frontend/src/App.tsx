import { RouterProvider } from "react-router-dom";

/*Routes */
import router from "./components/Utils/routes/route";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ThemeContextType,
  ThemeContext,
} from "./components/Utils/ThemeContext/ThemeContext";

// Define light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [themeMode, setThemeMode] = useState(`${localStorage.getItem("themeForAuction")}`);

  // Create the theme based on the current mode
  const theme = createTheme(themeMode === "light" ? lightTheme : darkTheme);

  // Toggle between light and dark themes
  const handleThemeToggle = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    localStorage.setItem("themeForAuction", themeMode === "light" ? "dark" : "light");
  };

  const themeContextValue: ThemeContextType = {
    themeMode,
    handleThemeToggle,
  };

  const light = themeMode === "light"

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={themeContextValue}>
        <main style={{backgroundColor:light ? "white" : "#1B2938"}}>
          <RouterProvider router={router} />
        </main>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
