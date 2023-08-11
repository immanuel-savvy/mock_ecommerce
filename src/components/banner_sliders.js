import React from "react";
import { Carousel } from "react-bootstrap";

class Banner_sliders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="banner_section layout_padding" data-overlay="8">
        <div class="container">
          <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <Carousel fade nextLabel="" prevLabel="" indicators={false}>
                {[1, 2, 3].map((arr) => (
                  <Carousel.Item>
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-sm-12">
                          <h4 className="banner_taital">
                            Score Big with Our Football Shop:
                            <br />
                            Unleash Your Football Passion!
                          </h4>
                          <div className="buynow_bt">
                            <a href="#">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
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
    );
  }
}

export default Banner_sliders;
