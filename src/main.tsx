<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import React from 'react'
import CreateDOM from 'react-dom/client'; //중요
import App from './App'
import {GlobalStyle} from './style'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = CreateDOM.createRoot(rootElement); // reactDOM 쓰니 자꾸 에러 발생합니다. CreateDOM으로 사용.

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>
);
>>>>>>> 861e3a566adb6901c2e76f29a5c2165d2fc6a2b3
