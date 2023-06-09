import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { StyledEngineProvider } from "@mui/material";
import { ReposContextProvider } from "./context/ReposContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReposContextProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ReposContextProvider>
  </React.StrictMode>
);
