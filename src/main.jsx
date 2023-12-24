import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DisasterContextProvider from "./context/DisasterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <DisasterContextProvider>
    <App />
  </DisasterContextProvider>
  // </React.StrictMode>,
);
