import React from "react";
import Banner from "../components/banner";
import Feature from "../components/feature";
import Listempty from "../components/listempty";
import Store_loader from "../components/store_loader";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: new Array(
        { _id: "fashion", title: "fashion" },
        { _id: "tech gadgets", title: "tech gadgets" }
      ),
    };
  }

  render() {
    let { categories } = this.state;

    return (
      <>
        <Banner />

        {categories ? (
          categories.length ? (
            categories.map((feature) => (
              <Feature feature={feature} key={feature._id} />
            ))
          ) : (
            <Listempty text="No items in store yet" />
          )
        ) : (
          <div class="fashion_section">
            <Store_loader />
          </div>
        )}
      </>
    );
  }
}

export default Home;
