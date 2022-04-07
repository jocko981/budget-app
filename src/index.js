import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// context
import { BudgetContextProvider } from "./context/BudgetContext";

ReactDOM.render(
  <React.StrictMode>
    <BudgetContextProvider>
      <App />
    </BudgetContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);