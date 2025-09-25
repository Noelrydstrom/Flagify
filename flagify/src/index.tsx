import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { colors } from "./theme/colors";
import styled from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export const MainContent = styled.main`
  flex: 1;                 /* takes all remaining width */
  min-height: 100vh;       /* full viewport height */
  margin-left: 250px;      /* space for fixed sidebar */
  padding: 2rem;           /* inner spacing */
  background-color: ${colors.background}; /* solid color */
`;