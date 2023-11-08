import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import apiSlice from "./app/api/dataApiSlice";

createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
);
