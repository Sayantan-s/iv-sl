import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Prefetchables } from "./store/utils/Prefetchables";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Prefetchables>
        <App />
      </Prefetchables>
    </Provider>
  </React.StrictMode>
);
