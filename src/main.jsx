import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProviderWrapper } from "./context/auth.context"; // <== IMPORT
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>      {/*  <== ADD  */}
        <App />
      </AuthProviderWrapper>     {/*  <== ADD  */}
    </Router>
  </React.StrictMode>
);