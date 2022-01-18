import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Rainier Letidjawa </title>
                    <meta name="rainierio.dev" content="Rainier Letidjawa personal web" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
