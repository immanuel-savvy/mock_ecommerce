import "./assets/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/custom.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Checkout from "./pages/Checkout";

class Ecommerce extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Ecommerce;
