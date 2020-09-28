/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import * as Feather from "react-icons/fi";

const Icon = (icon) => {
  let fiIcon = Feather[icon];
  return React.createElement(fiIcon);
};

class HomeServiceList extends Component {
  render() {
    const { column, serviceList } = this.props;
    const ServiceContent = serviceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className='row'>
          {ServiceContent.map((val) => (
            <div className={`${column}`} key={val._id}>
              {/* <NavLink to={`/servicedetail/${val._id}`}> */}
                <a>
                  <div className='service service__style--2'>
                    <div className='icon'>{Icon(val.icon)}</div>
                    <div className='content'>   
                      <h3 className='title'>{val.title}</h3>
                      <p>{val.introdesc}</p>
                    </div>
                  </div>
                </a>
              {/* </NavLink> */}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default HomeServiceList;
