import React from "react";

class Stretch_btn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { action, title, style } = this.props;

    return (
      <a
        style={{ ...style }}
        href="#"
        onClick={action}
        class="btn full-width theme-bg text-white mt-1"
      >
        {title}
      </a>
    );
  }
}

export default Stretch_btn;
