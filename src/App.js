import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainScreen from "./Screens/MainScreen/index";
import OrderScreen from "./Screens/OrderScreen/index";

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/order" element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
