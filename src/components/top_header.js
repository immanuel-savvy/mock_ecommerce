import React from "react";
import {
  academy,
  client_domain,
  club_domain,
} from "../assets/js/utils/constants";

class Top_header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container" style={{ zIndex: 9999 }}>
        <div class="header_section_top">
          <div class="row">
            <div class="col-sm-12">
              <div
                class="custom_menu"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a href={client_domain} className="mx-5">
                  <img width="100" src={require("../assets/images/logo.png")} />
                </a>
                <ul>
                  <li>
                    <a href={academy}>Acedemy</a>
                  </li>
                  <li>
                    <a href={club_domain}>Club</a>
                  </li>
                  <li>
                    <a href={`${academy}/contact`}>Customer Service</a>
                  </li>
                  <li>
                    <a href={`${academy}/testimonials`}>Reviews</a>
                  </li>
                </ul>
                <div className="mx-5">
                  <img
                    width="100"
                    style={{ visibility: "hidden" }}
                    src={require("../assets/images/logo.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top_header;
