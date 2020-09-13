import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import UsedTechnology from "./component/UsedTechnology";
import AboutMe from "./component/AboutMe";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import FooterRainierio from "../component/footer/FooterRainierio";

class AboutPage extends Component {
  render() {
    const AboutMeText = {
      title: "About Me",
      description: `Hi there, I'm Rainier, and now you are reading about me. I am a self-employed software and web engineer currently dedicated my self to learning Javascript for client-server web architectures. After obtaining my Bachelor's Degree in Information System, I started my professional careers by working at Silverlake group, one of the most significant Banking and Financial solutions and services provider in the Asia Pacific region. I am originally from Indonesia recently moved with family to Australia to catch our dreams. I've also been working in the hospitality industry in Canberra for over the past year and stop working in April 2020 as the result of the global pandemic impact on the hospitality industry. Eventually, it led me back to working in the IT industry and recently started a freelance job whilst looking for a company to grow together. You can check my updated resume here if you are here to hire me. :)      `,
    };
    return (
      <React.Fragment>
        <div id='about'>
          <PageHelmet pageTitle='About' />

          {/* Start Header Area  */}
          <Header
            headerPosition='header--static'
            logo='symbol-dark'
            color='color-black'
          />
          {/* End Header Area  */}

          {/* Start About Me Area  */}
          <div className='fix'>
            <div className='rn-about-area pt--120'>
              <div className='rn-about-wrapper'>
                <div className='container'>
                  <div className='row row--35 align-items-center'>
                    <div className='col-lg-12'>
                      <div className='about-inner inner'>
                        <div className='section-title'>
                          <h2 className='title'>{AboutMeText.title}</h2>
                          <p className='description'>
                            {AboutMeText.description}
                          </p>
                        </div>
                        <div className='row mt--30'>
                          <AboutMe tabStyle='tab-style--1' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End About Area  */}

          {/* Start Used Technology Area */}
          <div className='rn-brand-area brand-separation bg_color--5 pb--120'>
            <div className='container'>
              <h2 className='title-center'>{"Used Technology"}</h2>
              <div className='row'>
                <div className='col-lg-12 pl_lg--120 pr_lg--120'>
                  <UsedTechnology />
                </div>
              </div>
            </div>
          </div>
          {/* End Brand Area */}

          {/* Start Back To Top */}
          <div className='backto-top'>
            <ScrollToTop showUnder={160}>
              <FiChevronUp />
            </ScrollToTop>
          </div>
          {/* End Back To Top */}

          <FooterRainierio />
        </div>
      </React.Fragment>
    );
  }
}
export default AboutPage;
