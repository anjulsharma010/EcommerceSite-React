import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./components/context/productcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

reportWebVitals();
