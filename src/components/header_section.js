import React from "react";
import Dropdown_menu from "./dropdown_menu";
import { academy } from "../assets/js/utils/constants";

class Header_section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { value } = this.state;
    let { user, categories, set_category, search_result } = this.props;

    return (
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            <Dropdown_menu
              items={
                new Array(...(categories || new Array()), {
                  title: "-- All Categories --",
                  _id: "any",
                })
              }
              action={set_category}
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
                  value={value}
                  placeholder="Search products"
                  onChange={({ target }) =>
                    this.setState({ value: target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => {
                      search_result && search_result(value, this.setState);
                      this.setState({ value: "" });
                    }}
                    style={{
                      backgroundColor: "#03b97c",
                      borderColor: "#03b97c",
                    }}
                  >
                    <img src={require("../assets/images/search-icon.png")} />
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="login_menu">
                <ul>
                  <li>
                    <a href={`${academy}/cart?u=${user?._id || ""}`}>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span className="padding_10">Cart</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${academy}/${
                        user ? `profile?u=${user._id}` : "login?shop"
                      }`}
                      onClick={null}
                    >
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="padding_10">
                        {user ? "Profile" : "Login"}
                      </span>
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
