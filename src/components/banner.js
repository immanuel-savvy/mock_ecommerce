import React from "react";
import Banner_sliders from "./banner_sliders";
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

        <Banner_sliders />
      </div>
    );
  }
}

export default Banner;
