import React from "react";

class Order_summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>Your Order</h3>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="pro_product_wrap">
            <h5>Platinum</h5>
            <ul>
              <li>
                <strong>Total</strong>$319
              </li>
              <li>
                <strong>Subtotal</strong>$319
              </li>
              <li>
                <strong>Tax</strong>$10
              </li>
              <li>
                <strong>Total</strong>$329
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Order_summary;
