import React, { Component } from "react";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logo-symbol-dark.png'

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/rainier-letidjawa/",
  },
  { Social: <FaGithub />, link: "https://github.com/rainierio" },
];
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { color = "default-color" } = this.props;
    let logoUrl = (
      
      <img src={logo} alt="main logo"/>
    );

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className='header-wrapper'>
          <div className='header-left d-flex align-items-center'>
            <div className='logo'>
              <a href={this.props.homeLink}>{logoUrl}</a>
            </div>
            <nav className='mainmenunav d-lg-block ml--50'>
              <Scrollspy
                className='mainmenu'
                items={["home", "about", "portfolio", "blog", "contact"]}
                currentClassName='is-current'
                offset={-200}>
                <li>
                  <NavLink to='/' activeClassName='selected'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/aboutpage' activeClassName='selected'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/portfoliopage' activeClassName='selected'>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blogpage' activeClassName='selected'>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contactpage' activeClassName='selected'>
                    Contact
                  </NavLink>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className='header-right'>
            <div className='social-share-inner'>
              <ul className='social-share social-style--1 color-black d-flex justify-content-start liststyle'>
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start Humberger Menu  */}
            <div className='humberger-menu d-block d-lg-none pl--20'>
              <span
                onClick={this.menuTrigger}
                className='menutrigger text-white'>
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className='close-menu d-block d-lg-none'>
              <span onClick={this.CLoseMenuTrigger} className='closeTrigger'>
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderThree;
