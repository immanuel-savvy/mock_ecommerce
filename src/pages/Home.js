import React from "react";
import Banner from "../components/banner";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Banner />
      </>
    );
  }
}

export default Home;
