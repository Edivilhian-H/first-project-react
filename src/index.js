import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style/globalStyle";
import MYRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MYRoutes /> <GlobalStyle />
  </>
);
