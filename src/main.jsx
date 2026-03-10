import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/variables.css";
import "./assets/styles/globals.css";
import "./assets/styles/layout.css";
import "./assets/styles/responsive.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);