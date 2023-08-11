import React from "react";
import { email_regex } from "../assets/js/utils/functions";
import { post_request } from "../assets/js/utils/services";
import Alert_box from "./alert_box";
import Powered_by_voucher_africa from "./powered_by_voucherafrica";
import Stretch_btn from "./stretch_btn";

class Coupon_modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "open",
    };
  }

  apply_coupon = async (coupon) => {
    let { email, user } = this.state;
    let { apply_coupon, toggle } = this.props;
    this.setState({ applying: true });

    apply_coupon && apply_coupon(coupon.value);

    let res = await post_request("http://localhost:1449/applied_coupon", {
      coupon: coupon.coupon_id,
      user: email,
    });

    toggle();
  };

  retrieve_coupon = async (e) => {
    e.preventDefault();

    let { coupon_code, applying, loading, type, email } = this.state;
    if (
      !coupon_code ||
      loading ||
      applying ||
      (type !== "open" && !email_regex.test(email))
    )
      return;

    this.setState({ loading: true });

    let details = {
      coupon_code,
      email,
      vendor: "54919457$vKGMrOTFgF24p5dMZYq$16764",
      type,
    };

    let coupon = await post_request(
      "http://localhost:1449/retrieve_coupon",
      details
    );

    if (!coupon)
      return this.setState({
        loading: false,
        message: "Cannot fetch coupon at the moment",
      });

    if (!coupon.coupon) {
      this.setState({
        loading: false,
        message: coupon.message || "Cannot fetch coupon at the moment",
      });
    } else {
      this.setState({ loading: false, user: coupon.coupon.user });
      this.apply_coupon(coupon.coupon);
    }
  };

  render() {
    let { toggle } = this.props;
    let { coupon_code, email, loading, applying, message } = this.state;

    return (
      <div>
        <div class="modal-content overli" id="pay_with_voucher_modal">
          <div class="modal-header">
            <h5 class="modal-title">Apply Coupon</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => toggle && toggle()}
            >
              <span aria-hidden="true">
                <i class="fas fa-times-circle"></i>
              </span>
            </button>
          </div>
          <div class="modal-body">
            <div class="login_modal-form">
              <form>
                <div class="form-group">
                  <label>Coupon Code</label>
                  <div class="input-with-icon">
                    <input
                      class="form-control"
                      value={coupon_code}
                      onChange={({ target }) =>
                        this.setState({
                          coupon_code: target.value,
                          message: "",
                        })
                      }
                      placeholder="Coupon Code"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <div class="input-with-icon">
                    <input
                      type="email"
                      class="form-control"
                      value={email}
                      onChange={({ target }) =>
                        this.setState({
                          email: target.value,
                          message: "",
                        })
                      }
                      placeholder="Your email"
                    />
                    <i class="ti-user"></i>
                  </div>
                </div>

                {message ? <Alert_box message={message} /> : null}

                <Stretch_btn
                  loading={loading}
                  title={applying ? "Applying" : "Proceed"}
                  action={this.retrieve_coupon}
                />
              </form>
            </div>

            <Powered_by_voucher_africa />
          </div>
        </div>
      </div>
    );
  }
}

export default Coupon_modal;
