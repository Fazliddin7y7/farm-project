import React from "react";
import "./App.css";

// Routes
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
