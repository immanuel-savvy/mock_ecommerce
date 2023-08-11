import React from "react";
import { client_domain } from "../assets/js/utils/constants";

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="logo_section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="logo">
                {/* <a href={client_domain}>
                  <img width="150" src={require("../assets/images/logo.png")} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
