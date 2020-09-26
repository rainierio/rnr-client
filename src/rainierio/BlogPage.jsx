import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import FooterRainierio from "../component/footer/FooterRainierio";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import axios from "axios";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/client/blogs")
      .then((res) => {
        this.setState({
          blogs: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { blogs } = this.state;
    const blogPost =
      blogs &&
      blogs.map((post) => (
        <div className='row align-items-center'>
          <div className='blog-list col-lg-11'>
            <Link to={"/blogdetail/" + post._id}>
              <div className='blog-thumbnail'>
                <div className='thumb-image'>
                  <img src={post.header_img} alt='Portfolio Images' />
                </div>
              </div>

              <h4 className='title'>{post.title}</h4>
            </Link>
            <p className='text-justify'>{post.content + "..."}</p>
            <div className='blog-readmore-button'>
              <Link to={"/blogdetail/" + post._id}>
                <a className='bn-btn' href>
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      ));

    if (!blogs) {
      return <div></div>;
    }

    return (
      <React.Fragment>
        <PageHelmet pageTitle='Blog' />
        {/* Start Header Area  */}
        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />
        {/* End Header Area  */}

        {/* Start blog list area Area */}
        <div id='blog' className='fix'>
          <div className='rn-columns-area ptb--120 '>
            <div className='container'>
              <h2 className='title-center pt_sm--25'>Blog Post</h2>
              {blogPost}
            </div>
          </div>
        </div>
        {/* End Blog list area */}

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
export default BlogPage;
