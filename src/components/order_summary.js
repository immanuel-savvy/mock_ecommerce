import React from "react";
import { commalise_figures } from "../assets/js/utils/functions";
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
    let { details, apply_coupon } = this.props;
    let { value } = details;

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
                <strong>Products</strong>${commalise_figures(value)}
              </li>
              <li>
                <strong>VAT</strong>${0}
              </li>
              <li>
                <strong>Total</strong>${commalise_figures(value)}
              </li>
            </ul>
          </div>
        </div>

        <Stretch_btn
          title="Apply coupon"
          style={{ marginLeft: 20, marginRight: 20 }}
          action={this.toggle_coupon_modal}
        />

        <Modal ref={(coupon_modal) => (this.coupon_modal = coupon_modal)}>
          <Coupon_modal
            apply_coupon={apply_coupon}
            details={details}
            toggle={this.toggle_coupon_modal}
          />
        </Modal>
      </div>
    );
  }
}

export default Order_summary;
