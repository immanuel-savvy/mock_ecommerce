import React from "react";
import Breadcrumb from "./breadcrumb";
import Padder from "./padder";

class Store_header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { title, page } = this.props;

    return (
      <div
        class="mb-5 bg-dark bg-cover"
        style={{
          backgroundImage: `url(${require("../assets/images/vouchers1.png")})`,
          backgroundRepeat: "no-repeat",
        }}
        data-overlay="8"
      >
        {/* <Header_top_section style={{ position: "relative", zIndex: 2 }} /> */}

        <Padder />
        <Breadcrumb home={"/"} bg_none page={page} title={title} />
      </div>
    );
  }
}

export default Store_header;
