import React from "react";
import { to_title } from "../assets/js/utils/functions";
import Product from "./product";

class Product_slider_item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { store } = this.props;
    let { title } = store;

    return (
      <div class="carousel-item active">
        <div class="container">
          <h1 class="fashion_taital">{to_title(title)}</h1>
          <div class="fashion_section_2">
            <div class="row">
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product_slider_item;
