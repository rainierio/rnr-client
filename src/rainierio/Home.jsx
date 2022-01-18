/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-up";
import Loading from "./component/loading";
import TextLoop from "react-text-loop";
import UsedTechnology from "./component/UsedTechnology";
import FooterRainierio from "../component/footer/FooterRainierio";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import AboutMe from "./component/AboutMe";
import Helmet from "../component/common/Helmet";
import PortfolioList from "./component/PortfolioList";
import HomeServiceList from "./component/HomeServiceList";
import { NavLink } from "react-router-dom";
import axios from '../utility/axios'
import mainImages from "../assets/images/about/designer-avatar.png";

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const AboutMeText = {
  title: "About Me",
  description:
    "Hi there, I'm Rainier. I am a self-employed software and web engineer based in Jakarta, I am a huge fan of Javascript and its Ecosystem and I do remote works.",
};

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const [aboutDesc, setAboutDesc] = useState({});
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/client/homelanding`)
      .then((res) => {
        setBlogList(res.data.blog);
        setAboutDesc(res.data.about[0]);
        setServiceList(res.data.services);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!aboutDesc || !blogList) {
    return (
      <div id='home'>
        <Helmet pageTitle='Home' />
        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />
        <Loading />
      </div>
    );
  }

  return (
    <div id='home'>
      <Helmet pageTitle='Home' />
      {/* Start Header Area  */}
      <Header
        headerPosition='header--static'
        logo='symbol-dark'
        color='color-black'
      />
      {/* End Header Area  */}
      <div className='slider-wrapper'>
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className='slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height'
            key={index}>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <div className='designer-thumbnail'>
                    <img src={mainImages} alt='mainimage' />
                  </div>
                </div>
                <div className='col-lg-7 mt_md--40 mt_sm--40'>
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className='title'>
                      Hi, I’m Rainier
                      <br />
                      <TextLoop fade={true} noWrap={true}>
                        <span> Software Engineer</span>
                        <span> Web Developer</span>
                        <span> Freelancer </span>
                      </TextLoop>{" "}
                    </h1>
                    <h2>Based in Jakarta</h2>
                    {aboutDesc.aboutdesc ? (
                      <p className='description pl--0 pr--0'>
                        {aboutDesc.aboutdesc}
                      </p>
                    ) : (
                      ""
                    )}
                    {value.buttonText ? (
                      <div className='slide-btn'>
                        <a className='rn-btn' href={`${value.buttonLink}`}>
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>

      {/* Start About Me Area */}
      <div className='col-lg-12'>
        <div className='about-area about-position-top pb--120  bg_color--1'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row row--35 align-items-center'>
                <div className='col-lg-12'>
                  <div className='about-inner inner'>
                    <div className='section-title'>
                      <h2 className='title'>{AboutMeText.title}</h2>
                      <p className='description'>
                        {AboutMeText.description}{" "}
                        <NavLink to='aboutpage'>Get to know more!</NavLink>
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
      {/* End About Area */}

      {/* Start Service Area  */}
      <div id='' className='fix'>
        <div className='service-area creative-service-wrapper ptb--120 bg_color--5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
                  <h2 className='title'>Expertise</h2>
                  <p>What I can do for you</p>
                </div>
              </div>
            </div>
            <div className='row creative-service'>
              <div className='col-lg-12'>
                <HomeServiceList
                  serviceList={serviceList}
                  item='3'
                  column='col-lg-4 col-md-6 col-sm-6 col-12 text-left'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id='' className='fix'>
        <div className='portfolio-area ptb--120 bg_color--1'>
          <div className='portfolio-sacousel-inner'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
                    <h2 className='title'>Latest Project</h2>
                    <p>
                      A small gallery of recent projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <PortfolioList
                  styevariation='text-center mt--40'
                  column='col-lg-4 col-md-6 col-sm-6 col-12'
                  item='3'
                />
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                    <NavLink to='portfoliopage'>
                      <a className='rn-btn' href>
                        <span>View More</span>
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id='' className='fix'>
        <div className='rn-blog-area ptb--120 bg_color--5 mb-dec--30'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='section-title text-center'>
                  <h2>Recent Article</h2>
                  <p>
                    I share ideas, programming features, future works, tutorials
                    and etc.. Enjoy!!!
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt--60 mt_sm--40'>
              {blogList.map((value) => (
                <div className='col-lg-4 col-md-6 col-12' key={value._id}>
                  <div className='blog blog-style--1'>
                    <div className='thumbnail'>
                      <NavLink to={`/blogdetail/${value._id}`}>
                        <a>
                          <img
                            className='w-100'
                            src={value.header_img}
                            alt='Blog Images'
                          />
                        </a>
                      </NavLink>
                    </div>
                    <div className='content'>
                      <p className='blogtype'>{value.category}</p>
                      <h4 className='title'>
                        <NavLink to={`/blogdetail/${value._id}`}>
                          <a>{value.title}</a>
                        </NavLink>
                      </h4>
                      <NavLink to={`/blogdetail/${value._id}`}>
                        <div className='blog-btn'>
                          <a className='rn-btn text-white'>Read More</a>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Start back button */}
            <div className='row'>
              <div className='col-lg-12'>
                <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                  <NavLink to='/blogpage'>
                    <a className='rn-btn' href>
                      <span>View more</span>
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
            {/* End back button */}
          </div>
        </div>
      </div>
      {/* End Blog Area */}

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

      {/* Start Footer Style  */}
      <FooterRainierio />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default Home;
