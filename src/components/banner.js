import React from "react";
import Header_section from "./header_section";
import Logo from "./logo";
import Top_header from "./top_header";

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="banner_bg_main">
        <Top_header />

        <Logo />

        <Header_section />

        <div class="banner_section layout_padding">
          <div class="container">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div class="buynow_bt">
                        <a href="#">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div class="buynow_bt">
                        <a href="#">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div class="buynow_bt">
                        <a href="#">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#my_slider"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#my_slider"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
