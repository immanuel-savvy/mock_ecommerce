import React from "react";
import Modal from "./modal";
import Pay_with_voucher_modal from "./pay_with_voucher_modal";
import Stretch_btn from "./stretch_btn";

class Pay_with_voucher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_modal = () => this.modal?.toggle();

  render() {
    let { details } = this.props;

    return (
      <>
        <p>
          Anim aliqua excepteur occaecat ut. Reprehenderit cupidatat sunt magna
          laborum. Magna esse labore ut do esse culpa in anim proident. Minim et
          cupidatat velit esse dolore non ea veniam proident. Excepteur anim
          laborum laboris ipsum aute laboris tempor aute exercitation labore
          cupidatat.
        </p>

        <Stretch_btn title="Proceed to payment" action={this.toggle_modal} />

        <Modal ref={(modal) => (this.modal = modal)}>
          <Pay_with_voucher_modal
            toggle={this.toggle_modal}
            details={details}
          />
        </Modal>
      </>
    );
  }
}

export default Pay_with_voucher;
