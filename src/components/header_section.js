import React from "react";
import { Link } from "react-router-dom";
import Dropdown_menu from "./dropdown_menu";

class Header_section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            <div id="mySideNav" className="sidenav">
              <a href="#" className="closebtn" onClick={this.close_nav}>
                &times;
              </a>
              <a href="index.html">Home</a>
              <a href="fashion.html">Fashion</a>
              <a href="electronic.html">Electronic</a>
              <a href="jewellery.html">Jewellery</a>
            </div>
            <span className="toggle_icon" onClick={this.open_nav}>
              <img src={require("../assets/images/toggle-icon.png")} />
            </span>

            <Dropdown_menu
              items={new Array("cat1", "cat2", "cat3").map(
                (cat) =>
                  new Object({
                    title: cat,
                  })
              )}
              button={React.forwardRef(({ onClick }, ref) => {
                return (
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={onClick}
                  >
                    All Category
                  </button>
                );
              })}
            />
            <div className="dropdown">
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <div className="main">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#03b97c",
                      borderColor: "#03b97c",
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="login_menu">
                <ul>
                  <li>
                    <Link to={"/store/cart"}>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span className="padding_10">Cart</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={null}>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="padding_10">{"Login"}</span>
                    </a>
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

export default Header_section;
