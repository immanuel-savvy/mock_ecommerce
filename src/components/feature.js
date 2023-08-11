import React from "react";
import { to_title } from "../assets/js/utils/functions";
import Store_loader from "./store_loader";
import { get_request } from "../assets/js/utils/services";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Product from "./product";

class Feature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let { feature, products } = this.props;
    products =
      products || (await get_request(`category_products/${feature._id}`));

    this.setState({ products, fetched: true });
  };

  render() {
    let { feature, user, show_all } = this.props;
    let { fetched, products } = this.state;

    let { title } = feature;

    return (
      <div class="fashion_section">
        {fetched ? null : <h1 class="fashion_taital">{to_title(title)}</h1>}
        {fetched ? (
          <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-item active">
              <div class="container">
                {this.props.products ? (
                  <div className="text-center mt-5">
                    <h2>Search results for</h2> <br />
                    <h1 class="fashion_taital">"{to_title(title)}"</h1>
                  </div>
                ) : (
                  <h1 class="fashion_taital mt-5">{to_title(title)}</h1>
                )}
                <div class="fashion_section_2">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={window.innerWidth < 650 ? 1 : 3}
                    autoplay={{
                      delay: 2000,
                      pauseOnMouseEnter: true,
                      disableOnInteraction: false,
                    }}
                    loop
                    className="swiper-container"
                  >
                    {(this.props.products || products).map((product) => (
                      <SwiperSlide key={product._id}>
                        <Product user={user} product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {show_all ? (
                  <div className="text-center mt-5">
                    <h1
                      class="fashion_taital theme-cl cursor-pointer"
                      onClick={show_all}
                    >
                      {to_title("Show all")}
                    </h1>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <Store_loader />
        )}
      </div>
    );
  }
}

export default Feature;
