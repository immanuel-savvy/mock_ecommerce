import React from "react";
import { to_title } from "../assets/js/utils/functions";

const store_navs = new Array(
  { title: "pending orders" },
  { title: "notifications" },
  { title: "customer service" }
);

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div class="footer_section layout_padding">
          <div class="container">
            <div class="footer_logo">
              <a href="index.html">
                <img
                  style={{ height: 80 }}
                  src={require("../assets/images/logo.png")}
                />
              </a>
            </div>
            <div class="input_bt">
              <input
                type="text"
                class="mail_bt"
                placeholder="Your Email"
                name="Your Email"
              />
              <span class="subscribe_bt" id="basic-addon2">
                <a href="#">Subscribe</a>
              </span>
            </div>
            <div class="footer_menu">
              <ul>
                {store_navs.map((nav, index) => (
                  <li key={index}>
                    <a href="#">{to_title(nav.title)}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="location_main">
              Help Line Number : <a href="#">+1 1800 1200 1200</a>
            </div>
          </div>
        </div>
        <div class="copyright_section">
          <div class="container">
            <p class="copyright_text">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
export { store_navs };
