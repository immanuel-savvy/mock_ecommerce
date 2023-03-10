import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="col-lg-4 col-sm-4">
        <a href="#">
          <div class="box_main">
            <h4 class="shirt_text">Laptop</h4>
            <p class="price_text">
              Price{" "}
              <span style={{ color: "#262626" }}>
                &#8358; <b>1,200</b>
              </span>
            </p>
            <div class="electronic_img">
              <img src={require("../assets/images/laptop-img.png")} />
            </div>
            <div class="btn_main">
              <div class="buy_bt">
                <Link to="/checkout">
                  Buy now<i class="fas fa-nintendo-switch"></i>
                </Link>
                <i className="fa fa-shopping-cart ml-2 text-accent"></i>
              </div>
              <div class="seemore_bt">
                <a href="#">See More</a>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;
