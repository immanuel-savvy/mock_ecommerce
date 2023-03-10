import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/utils/functions";

const Breadcrumb = ({ title, bg_none, home, page, style }) => {
  return (
    <section
      className="page-title bg-cover"
      style={{
        backgroundImage: bg_none
          ? null
          : `url(${require("../assets/images/vouchers1.png")})`,
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      data-overlay={bg_none ? "0" : "8"}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="breadcrumbs-wrap">
              <h1 class="breadcrumb-title text-light">{title}</h1>
              <nav class="transparent">
                <ol class="breadcrumb p-0">
                  <li class="breadcrumb-item">
                    <Link to={home || "/"} className="text-light">
                      Home
                    </Link>
                  </li>
                  <li
                    class="breadcrumb-item active theme-cl"
                    aria-current="page"
                  >
                    {to_title(page || title)}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
