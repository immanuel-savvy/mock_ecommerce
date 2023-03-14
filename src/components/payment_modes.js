import React from "react";
import { Accordion } from "react-bootstrap";
import { to_title } from "../assets/js/utils/functions";
import Pay_now from "./pay_now";
import Pay_on_delivery from "./pay_on_delivery";
import Pay_with_voucher from "./pay_with_voucher";

class Payment_modes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  modes = new Array("pay_with_voucher", "pay_now", "pay_on_delivery");

  render() {
    let { details } = this.props;

    return (
      <Accordion defaultActiveKey={this.modes[0]}>
        {this.modes.map((mode) => (
          <Accordion.Item eventKey={mode}>
            <Accordion.Header style={{ color: "red" }} color="red">
              {to_title(mode.replace(/_/g, " "))}
            </Accordion.Header>
            <Accordion.Body>
              {mode === this.modes[0] ? (
                <Pay_with_voucher details={details} />
              ) : mode === this.modes[1] ? (
                <Pay_now />
              ) : (
                <Pay_on_delivery />
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}

export default Payment_modes;
