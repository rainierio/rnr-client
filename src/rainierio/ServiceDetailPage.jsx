import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderRainierio";
import FooterRainierio from "../component/footer/FooterRainierio";
import axios from '../utility/axios'

class ServiceDetailPage extends Component {
  state = {
    serviceContent: {},
  };

  componentDidMount() {
    axios
      .get(`/api/client/servicedetail/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          serviceContent: res.data.services,
        });
      })
      .catch((err) => console.log(err));
  }

  // convert html editor markup
  createMarkup = (data) => {
    return { __html: data };
  };

  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle='Service Details' />
        {/* End Pagehelmet  */}

        <Header
          headerPosition='header--static'
          logo='symbol-dark'
          color='color-black'
        />

        {/* Start Page Wrapper */}
        <div className='rn-service-details ptb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='service-details-inner'>
                  <div className='inner'>
                    {/* Start Single Area */}
                    <div className='row sercice-details-content pb--80 align-items-center'>
                      <div className='col-lg-12 col-12'>
                        <div className='details mt_md--30 mt_sm--30'>
                          <div
                            className='content'
                            dangerouslySetInnerHTML={this.createMarkup(
                              this.state.serviceContent.content
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start back button */}
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                          <button
                            onClick={this.props.history.goBack}
                            className='rn-btn'
                            href>
                            <span>Back</span>
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
        </div>
        {/* End Page Wrapper */}

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
export default ServiceDetailPage;
