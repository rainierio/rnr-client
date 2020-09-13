/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import ContactMe from "../rainierio/component/ContactMe";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import FooterRainierio from "../component/footer/FooterRainierio";

class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Contact' />
        {/* Start Header Area  */}
        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />
        {/* End Header Area  */}

        {/* Start Contact Top Area  */}
        <div id='Contact'>
          <div className='rn-about-area ptb--120 bg_color--1'>
            <div className='container'>
              {/* Start Contact Page Area  */}
              <div className='row pt_sm--20 '>
                <ContactMe />
              </div>
              {/* End Contact Page Area  */}
              <div className='row pt_sm--20 pt--150'>
                {/* Start Single Address  */}
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <div className='rn-address'>
                    <div className='icon'>
                      <FiHeadphones />
                    </div>
                    <div className='inner'>
                      <h4 className='title'>Contact With Phone Number</h4>
                      <p>
                        <a>+0468 849 168</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Address  */}

                {/* Start Single Address  */}
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50'>
                  <div className='rn-address'>
                    <div className='icon'>
                      <FiMail />
                    </div>
                    <div className='inner'>
                      <h4 className='title'>Email Address</h4>
                      <p>
                        <a href='mailto:info@rainierio.co'>info@rainierio.co</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Address  */}

                {/* Start Single Address  */}
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
                  <div className='rn-address'>
                    <div className='icon'>
                      <FiMapPin />
                    </div>
                    <div className='inner'>
                      <h4 className='title'>Location</h4>
                      <p>
                        {`Holder, 
                        Australian Capital Teritory 2611.
                        Australia`}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Address  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

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
export default ContactPage;
