/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const SocialShare = [
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rainier-letidjawa/" },
    { Social: <FaInstagram />, link: "https://www.instagram.com/rainierio" },
    { Social: <FaTwitter />, link: "https://twitter.com/rainierio" },
    { Social: <FaFacebookF />, link: "https://www.facebook.com/rainier.letidjawa/" },
];
class FooterRainierio extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className='footer-area'>
          <div className='footer-wrapper'>
            <div className='row align-items-end row--0'>
              <div className='col-lg-6'>
                <div className='footer-left'>
                  <div className='inner'>
                    <span>Antying can I help?</span>
                    <h2>
                      Let's get <br /> the things done
                    </h2>
                    <NavLink to='/contactpage'>
                      <a className='rn-button-style--2' href>
                        <span>Contact Me</span>
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='footer-right' data-black-overlay='6'>
                  <div className='row'>
                    {/* Start Single Widget  */}
                    <div className='col-lg-6 col-sm-6 col-12'>
                      <div className='footer-link'>
                        <h4>Quick Link</h4>
                        <ul className='ft-link'>
                        <li>
                            <NavLink to='/'>
                              <a>Home</a>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/aboutpage'>
                              <a>About</a>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/portfoliopage'>
                              <a>Portfolio</a>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/blogpage'>
                              <a>Blog</a>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/contactpage'>
                              <a>Contact</a>
                            </NavLink>
                          </li>

                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className='col-lg-6 col-sm-6 col-12 mt_mobile--30'>
                      <div className='footer-link'>
                        <h4>Say Hello</h4>
                        <ul className='ft-link'>
                          <li>
                            <a href='mailto:info@rainierio.co'>info@rainierio.co</a>
                          </li>
                        </ul>

                        <div className='social-share-inner'>
                          <ul className='social-share social-style--2 d-flex justify-content-start liststyle mt--15'>
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className='col-lg-12'>
                      <div className='copyright-text'>
                        <p>
                          Crafted with {<GiSelfLove />} by Rainier Letidjawa{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default FooterRainierio;
