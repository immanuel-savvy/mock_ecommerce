import React from "react";
import { academy, domain } from "../assets/js/utils/constants";
import { commalise_figures } from "../assets/js/utils/functions";
import { post_request } from "../assets/js/utils/services";
import { get_session } from "./footer";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let { user } = this.props;
    this.loggeduser = user || get_session("loggeduser");
    let { product } = this.props;
    if (this.loggeduser) {
      let in_cart = await post_request("in_cart", {
        user: this.loggeduser._id,
        product: product?.product?._id || product?._id,
      });

      this.setState({
        in_cart,
      });
    }
  };

  manage_cart = async () => {
    let { product, user } = this.props;
    let { in_cart, carting } = this.state;
    if (carting) return;
    this.setState({ carting: true });

    if (in_cart) {
      return window.location.assign(`${academy}/cart?u=${user?._id}`);
    }
    if (!this.loggeduser && !user) {
      window.location.assign(`${academy}/login?shop`);
    } else {
      await post_request("add_to_cart", {
        user: (this.loggeduser || user)._id,
        product: product?.product?._id || product?._id,
        quantity: 1,
      });
      this.setState({ in_cart: true });
    }
    this.setState({ carting: false });
  };

  save_to_wishlist = async (loggeduser) => {
    if (!loggeduser) return window.location.assign(`${academy}/login?shop`);

    this.login.setState({ show: false });
    let { product } = this.props;
    let { wishlisted, wishing } = this.state;
    if (wishing) return;

    this.setState({ wishing: true });

    await post_request(
      wishlisted ? "remove_from_wishlist" : "add_to_wishlist",
      {
        product: product?.product?._id || product?._id,
        user: loggeduser._id,
      }
    );
    return this.setState({ wishlisted: !wishlisted, wishing: false });
  };

  render() {
    let { carting, in_cart } = this.state;
    let { product } = this.props;
    product = product.product || product;

    let { _id, title, value: price, images } = product;

    return (
      <div class="col-12">
        <a href={"#"}>
          <div class="box_main">
            <a href={`${academy}/product?${_id}`}>
              <h4 class="shirt_text">{title}</h4>
            </a>
            <p class="price_text">
              Price{" "}
              <span style={{ color: "#262626" }}>
                &pound; <b>{commalise_figures(price)}</b>
              </span>
            </p>
            <div class="electronic_img">
              <a href={`${academy}/product?${_id}`}>
                <img src={`${domain}/images/${images[0].url}`} />
              </a>
            </div>
            <div class="btn_main">
              <div class="buy_bt">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.manage_cart();
                  }}
                >
                  {carting ? "..." : in_cart ? "Go to Cart" : "Add to Cart"}
                  <i class="fas fa-nintendo-switch"></i>
                </a>
                <i className="fa fa-shopping-cart ml-2 text-accent"></i>
              </div>
              <div class="seemore_bt">
                <a href={`${academy}/product?${_id}`}>See more</a>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;
