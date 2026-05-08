import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import styled from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export const MainContent = styled.main`
  flex: 1;
  min-height: 100vh;
  padding: 2rem;
  background-color: transparent;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;