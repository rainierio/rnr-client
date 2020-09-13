// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// import from utility
import ScrollToTopPage from "./utility/ScrollToTopPage";

// Common Layout
// import Layout from "./component/common/App";
//Rainierio page
import Home from "./rainierio/Home";
import AboutPage from "./rainierio/AboutPage";
import ServiceDetailPage from "./rainierio/ServiceDetailPage";
import PortfolioPage from "./rainierio/PortfolioPage";
import PortfolioDetailPage from "./rainierio/PortfolioDetailPage";
import BlogPage from "./rainierio/BlogPage";
import BlogDetailPage from "./rainierio/BlogDetailPage";
import ContactPage from "./rainierio/ContactPage";
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <ScrollToTopPage />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/aboutpage`}
            component={AboutPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfoliopage`}
            component={PortfolioPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/servicedetail/:id`}
            component={ServiceDetailPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfoliodetail/:id`}
            component={PortfolioDetailPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogpage`}
            component={BlogPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogdetail/:id`}
            component={BlogDetailPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contactpage`}
            component={ContactPage}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
