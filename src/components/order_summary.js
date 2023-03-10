import React from "react";
import Coupon_modal from "./coupon_modal";
import Modal from "./modal";
import Stretch_btn from "./stretch_btn";

class Order_summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_coupon_modal = () => this.coupon_modal?.toggle();

  render() {
    let { details } = this.props;

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

        <Stretch_btn
          title="Apply counpon"
          style={{ marginLeft: 20, marginRight: 20 }}
          action={this.toggle_coupon_modal}
        />

        <Modal ref={(coupon_modal) => (this.coupon_modal = coupon_modal)}>
          <Coupon_modal details={details} toggle={this.toggle_coupon_modal} />
        </Modal>
      </div>
    );
  }
}

export default Order_summary;
