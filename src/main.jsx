import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./app/UserProvider.jsx";
import { GlobalStyle } from "./app/Styles.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>
);
