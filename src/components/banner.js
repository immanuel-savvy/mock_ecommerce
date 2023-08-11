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

  componentDidMount = async () => {};

  render() {
    let { banner } = this.state;
    let { user, categories, search_result, set_category } = this.props;

    return (
      <div>
        <div
          class="banner_bg_main"
          // data-overlay="6"
        >
          <div style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
            <Top_header user={user} />
            <Logo />

            <Header_section
              set_category={set_category}
              categories={categories}
              search_result={search_result}
              user={user}
            />

            <Banner_sliders banner={banner} />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
