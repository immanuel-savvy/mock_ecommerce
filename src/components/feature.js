import React from "react";
import { Carousel } from "react-bootstrap";
import { to_title } from "../assets/js/utils/functions";
import Product_slider_item from "./product_slider_item";
import Store_loader from "./store_loader";

class Feature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fetched: true });
    }, 0);
  };

  render() {
    let { feature } = this.props;
    let { fetched } = this.state;

    let { title } = feature;

    return (
      <div class="fashion_section">
        {fetched ? null : <h1 class="fashion_taital">{to_title(title)}</h1>}
        {fetched ? (
          <div id="main_slider" class="carousel slide" data-ride="carousel">
            <Carousel
              ref={(carousel) => (this.carousel = carousel)}
              indicators={false}
            >
              <Carousel.Item>
                <Product_slider_item store={feature} />
              </Carousel.Item>
              <Carousel.Item>
                <Product_slider_item store={feature} />
              </Carousel.Item>
              <Carousel.Item>
                <Product_slider_item store={feature} />
              </Carousel.Item>
            </Carousel>
            <a
              class="carousel-control-prev"
              href="#my_slider"
              role="button"
              data-slide="prev"
              onClick={(e) => {
                e.preventDefault();
                this.carousel.prev();
              }}
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#my_slider"
              role="button"
              data-slide="next"
              onClick={(e) => {
                e.preventDefault();
                this.carousel.next();
              }}
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        ) : (
          <Store_loader />
        )}
      </div>
    );
  }
}

export default Feature;
