import React from "react";

class Top_header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <div class="header_section_top">
          <div class="row">
            <div class="col-sm-12">
              <div class="custom_menu">
                <ul>
                  <li>
                    <a href="#">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#">Gift Ideas</a>
                  </li>
                  <li>
                    <a href="#">New Releases</a>
                  </li>
                  <li>
                    <a href="#">Today's Deals</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top_header;
