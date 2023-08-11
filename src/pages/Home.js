import React from "react";
import Banner from "../components/banner";
import Feature from "../components/feature";
import Footer, { save_to_session } from "../components/footer";
import Listempty from "../components/listempty";
import Store_loader from "../components/store_loader";
import { get_request, post_request } from "../assets/js/utils/services";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let categories = await get_request("product_categories");
    this.setState({ categories });
    this.categories_ = categories;

    let s = window.location.search.slice(1);
    if (s) {
      s = s.split("=")[1];
      if (s && s.startsWith("users~")) {
        this.user = await get_request(`user/${s}`);

        save_to_session("loggeduser", this.user);
        this.setState({ user: this.user });
      }
    }
  };

  search_result = async (search_param, set_state) => {
    this.setState({ searching: true, search_results: null });

    let products = await post_request("products", { search_param });

    this.setState({
      search_results: new Array(...products),
      search_param,
      searching: true,
    });
  };

  set_category = (cat) => {
    if (cat._id === "any") this.setState({ categories: this.categories_ });
    else
      this.setState({
        categories: this.state.categories.filter((c) => c._id === cat._id),
      });
  };

  render() {
    let { categories, user, search_results, searching, search_param } =
      this.state;

    return (
      <>
        <Banner
          search_result={this.search_result}
          set_category={this.set_category}
          categories={categories}
          user={user}
        />

        {searching && search_results ? (
          <Feature
            user={user}
            show_all={() => this.setState({ searching: false })}
            feature={{ title: search_param }}
            products={search_results}
          />
        ) : categories && !searching ? (
          categories.length ? (
            categories.map((feature) => (
              <Feature user={user} feature={feature} key={feature._id} />
            ))
          ) : (
            <Listempty text="No items in store yet" />
          )
        ) : (
          <div class="fashion_section">
            <Store_loader />
          </div>
        )}

        <Footer user={user} />
      </>
    );
  }
}

export default Home;
