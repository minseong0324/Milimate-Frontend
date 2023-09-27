import React from "react";
import CreateDOM from "react-dom/client"; //중요
import App from "./App";
import { GlobalStyle } from "./style";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = CreateDOM.createRoot(rootElement); // reactDOM 쓰니 자꾸 에러 발생합니다. CreateDOM으로 사용.

root.render(

  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
  
);
