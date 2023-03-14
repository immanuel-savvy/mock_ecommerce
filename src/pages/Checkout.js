import React from "react";
import Billing_form from "../components/billing_form";
import Footer from "../components/footer";
import Order_summary from "../components/order_summary";
import Payment_modes from "../components/payment_modes";
import Store_header from "../components/store_header";

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: { value: 1500 },
    };
  }

  apply_coupon = async (percentage_discount) => {
    let { value } = this.state.details;

    value = value - value * (percentage_discount / 100);

    this.setState({ details: { value } });
  };

  toggle_login = () => this.login_modal?.toggle();

  render() {
    let { details } = this.state;

    return (
      <>
        <Store_header title="Billing Page" page="checkout" />

        <section class="gray-simple pt-0">
          <div class="container">
            {false ? null : (
              <div class="row submit-page mb-4">
                <div class="xl-12 col-lg-12 col-md-12">
                  <div
                    class="alert alert-success text-center mb-0"
                    role="alert"
                  >
                    Hi Dear, Have you already an account?{" "}
                    <a href="#" onClick={this.toggle_login}>
                      Please Login
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div class="row frm_submit_block">
              <div class="col-lg-8 col-md-12 col-sm-12">
                <Billing_form details={details} />

                <Payment_modes details={details} />
              </div>
              <Order_summary
                details={details}
                apply_coupon={this.apply_coupon}
              />
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Checkout;
