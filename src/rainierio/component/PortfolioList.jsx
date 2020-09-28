import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loading from "./loading";

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/client/portfolios")
      .then((res) => {
        this.setState({
          portfolios: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { column, styevariation } = this.props;
    const { portfolios } = this.state;
    const list = portfolios && portfolios.slice(0, this.props.item);

    if (portfolios < 1) {
      return (
        <div id='home'>
          <Loading />
        </div>
      );
    }

    return (
      <React.Fragment>
        {list &&
          list.map((value, index) => (
            <div className={`${column}`} key={index}>
              <div className={`portfolio ${styevariation}`}>
                <div className='thumbnail-inner'>
                  <div
                    className={`thumbnail`}
                    style={{
                      backgroundImage: `url(${value.image[0]})`,
                    }}></div>
                  <div className={`bg-blr-image`}></div>
                </div>
                <div className='content'>
                  <div className='inner'>
                    <p>{value.status}</p>
                    <h4>{value.title}</h4>
                    <div className='portfolio-button'>
                      <NavLink to={`/portfoliodetail/${value._id}`}>
                        <a className='rn-btn' href>
                          View Details
                        </a>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
