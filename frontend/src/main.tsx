import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Haas Grot Text R Web",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        checked: {
          color: "black", // change to your desired checked color
        },
      },
    },
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    
  </React.StrictMode>
);
//
