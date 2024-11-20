import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// id = root 에 js 실행 결과를 입력
// index.html 에 있는 <div id="root"></div> 변경금지
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
