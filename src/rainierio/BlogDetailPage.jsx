import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import FooterRainierio from "../component/footer/FooterRainierio";
import Image from "react-bootstrap/Image";
import axios from "axios";

class BlogDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetail: [],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    axios
      .get(`/api/client/blogdetail/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          blogDetail: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  // convert html editor markup
  createMarkup = (data) => {
    return { __html: data };
  };

  render() {
    const { blogDetail } = this.state;
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Blog Details' />
        {/* Start Header Area  */}
        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />
        {/* End Header Area  */}

        {/* Start Blog Details */}
        <div className='rn-blog-details pt--110 pb--70 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-13'>
                <div className='inner-wrapper'>
                  <div className='blog-single-list-wrapper'>
                    <h3 className='title'>{blogDetail.title}</h3>
                  </div>
                  <div className='inner'>
                    <div className='portfolio-thumb-inner'>
                      <div className='thumb-image rounded'>
                        <img src={blogDetail.header_img} alt='Blog Images' />
                      </div>
                    </div>
                  </div>
                  <div className='blog-single-list-wrapper'>
                    <div className='mt--40'>
                      <div
                        className='content'
                        dangerouslySetInnerHTML={this.createMarkup(
                          blogDetail.content
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start back button */}
            <div className='row'>
              <div className='col-lg-12'>
                <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                  <button
                    onClick={this.props.history.goBack}
                    className='rn-btn'
                    href>
                    <span>Back to list</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End back button */}
          </div>
        </div>
        {/* End Blog Details */}

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
export default BlogDetailPage;
