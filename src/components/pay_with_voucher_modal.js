import React from "react";
import { email_regex } from "../assets/js/utils/functions";
import { post_request } from "../assets/js/utils/services";
import Loadindicator from "./loadindicator";
import Powered_by_voucher_africa from "./powered_by_voucherafrica";
import Purchase_complete from "./purchase_complete";

class Pay_with_voucher_modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  proceed_to_payment = async (e) => {
    e.preventDefault();

    let { voucher, user, otp } = this.state;
    let { value } = this.props.details;

    let result = await post_request(
      "http://localhost:1449/use_voucher",
      {
        voucher,
        user,
        vendor: "54919457$vKGMrOTFgF24p5dMZYq$16764",
        otp: Number(otp),
        value: Number(value),
      },
      {
        vendor_id: "54919457$vKGMrOTFgF24p5dMZYq$16764",
      }
    );
    console.log(result);

    if (result && result.success) {
      this.setState({ success: true, loading: false });
    } else
      this.setState({
        message:
          (result && result.message) ||
          "Err, cannot proceed with payment at the moment.",
      });
  };

  proceed = async (e) => {
    e.preventDefault();

    let { details } = this.props;
    let { value } = details;

    let { email, voucher_code, loading } = this.state;
    if (loading) return;

    this.setState({ loading: true });

    if (!email_regex.test(email) || !voucher_code) return;

    let res = await post_request("http://localhost:1449/generate_voucher_otp", {
      email,
      voucher_code,
      value: Number(value),
      voucher_type: "open_voucher",
    });

    if (res && res.user) {
      this.setState({ voucher: res.voucher, user: res.user, loading: false });
    } else
      this.setState({
        message: (res && res.message) || "Cannot use voucher at the moment",
        loading: false,
      });
  };

  render() {
    let { toggle, details } = this.props;
    let { voucher_code, success, message, email, otp, loading, voucher } =
      this.state;

    return (
      <div>
        <div class="modal-content overli" id="pay_with_voucher_modal">
          <div class="modal-header">
            <h5 class="modal-title">
              {voucher ? "Voucher OTP" : "Voucher Details"}
            </h5>
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
            <div class="Pay_with_voucher_modal-form">
              <form>
                {success ? (
                  <Purchase_complete details={details} means="voucher" />
                ) : voucher ? (
                  <>
                    <span
                      style={{ fontSize: 16 }}
                      className="text-info text-center mb-2"
                    >
                      A One-Time password has been sent to{" "}
                      <em>
                        <b>{email}</b>
                      </em>
                      <br />
                      Please provide to code here to authorise your payment.
                      <br />
                      <br />
                    </span>
                    <div class="form-group">
                      <label>Voucher OTP</label>
                      <div class="input-with-icon">
                        <input
                          type="number"
                          class="form-control"
                          value={otp}
                          onChange={({ target }) =>
                            this.setState({
                              otp: target.value,
                              message: "",
                            })
                          }
                          placeholder="One-Time Password"
                        />
                        {/* <i class="ti-user"></i> */}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div class="form-group">
                      <label>Email</label>
                      <div class="input-with-icon">
                        <input
                          type="text"
                          class="form-control"
                          value={email}
                          onChange={({ target }) =>
                            this.setState({
                              email: target.value,
                              message: "",
                            })
                          }
                          placeholder="User or email"
                        />
                        <i class="ti-user"></i>
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Voucher Code</label>
                      <div class="input-with-icon">
                        <input
                          class="form-control"
                          placeholder="ABCXYZ"
                          value={voucher_code}
                          onChange={({ target }) =>
                            this.setState({
                              voucher_code: target.value,
                              message: "",
                            })
                          }
                        />
                        <i class="ti-unlock"></i>
                      </div>
                    </div>
                  </>
                )}

                {message ? <p className="text-danger">{message}</p> : null}

                {!success ? (
                  <div class="form-group">
                    {loading ? (
                      <Loadindicator />
                    ) : (
                      <button
                        onClick={
                          voucher ? this.proceed_to_payment : this.proceed
                        }
                        type="submit"
                        class="btn btn-md full-width theme-bg text-white"
                      >
                        {voucher ? "Proceed to Payment" : "Generate OTP"}
                      </button>
                    )}
                  </div>
                ) : null}
              </form>

              <Powered_by_voucher_africa />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay_with_voucher_modal;
