import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import PortfolioList from "./component/PortfolioList";
import FooterRainierio from "../component/footer/FooterRainierio";

class PortfolioPage extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Portfolio' />

        {/* Start Header Area  */}
        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />
        {/* End Header Area  */}

        {/* Start Portfolio Area */}
        <div id='portfolio' className='fix'>
          <div className='portfolio-area ptb--120'>
            <div className='portfolio-sacousel-inner'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='text-center service-style--3 mb--30 mb_sm--0'>
                      <h2 className='title'>All Portfolios</h2>
                      <p className='description'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <PortfolioList
                    styevariation='text-center mt--40'
                    column='col-lg-4 col-md-6 col-sm-6 col-12'
                    item='100'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <FooterRainierio />
      </React.Fragment>
    );
  }
}
export default PortfolioPage;
