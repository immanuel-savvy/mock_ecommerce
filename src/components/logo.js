import React from "react";

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
                <a href="index.html">
                  <img src={require("../assets/images/logo.png")} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
