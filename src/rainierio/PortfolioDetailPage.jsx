/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import FooterRainierio from "../component/footer/FooterRainierio";
import axios from "axios";
import Loading from "./component/loading";

class PortfolioDetailPage extends Component {
  state = {
    portfolio: {},
    showImage: "",
  };

  setShowImage = (image) => {
    this.setState({
      showImage: image,
    });
  };

  componentDidMount() {
    axios
      .get("http://origin.eba-awajfifh.ap-southeast-2.elasticbeanstalk.com/api/client/portfoliodetail/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          portfolio: res.data,
        });
        this.setState({ showImage: this.state.portfolio.image[0] });
      });
  }

  render() {
    const { portfolio, showImage } = this.state;
    
    if (!portfolio || !showImage) {
      return (
        <React.Fragment>
          <div id='portfolio'>
            <PageHelmet pageTitle='Portfolio Details' />

            {/* Start Header Area  */}
            <Header
              headerPosition='header--static'
              logo='symbol-dark'
              color='color-black'
            />
            <Loading />
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div id='portfolio'>
          <PageHelmet pageTitle='Portfolio Details' />

          {/* Start Header Area  */}
          <Header
            headerPosition='header--static'
            logo='symbol-dark'
            color='color-black'
          />
          {/* End Header Area  */}

          {/* Start Portfolio Details */}
          <div className='rn-portfolio-details ptb--120'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='portfolio-details'>
                    <div className='inner'>
                      <h2>{portfolio.title}</h2>
                      <p>{portfolio.description}</p>
                      <div className='portfolio-view-list d-flex flex-wrap'>
                        <div className='port-view'>
                          <span>Project Status</span>
                          <h5>{portfolio.status}</h5>
                        </div>

                        <div className='port-view'>
                          <span>Project Type</span>
                          <h5>{portfolio.category}</h5>
                        </div>
                        <div className='port-view'>
                          <span>Owner</span>
                          <h5>{portfolio.company}</h5>
                        </div>
                        <div className='port-view'>
                          <span>Visit project</span>
                          <a target='_blank' href={portfolio.url}>
                            <h5>{portfolio.url}</h5>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Start big image */}
                    <div className='portfolio-thumb-inner'>
                      <div className='thumb-image rounded'>
                        <img src={showImage} alt='Portfolio Images' />
                      </div>
                    </div>
                    {/* End big image */}

                    {/* start small image */}
                    <div className='row'>
                      {portfolio.image &&
                        portfolio.image.map((img) => {
                          return (
                            <div className='col-3'>
                              <div className='gallery-portfolio-static'>
                                <div className='portfolio-static'>
                                  <div className='thumbnail'>
                                    <a onClick={() => this.setShowImage(img)}>
                                      <img src={img} alt='Portfolio Images' />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    {/* end small image render */}

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
              </div>
            </div>
          </div>
          {/* End Portfolio Details */}

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
export default PortfolioDetailPage;
