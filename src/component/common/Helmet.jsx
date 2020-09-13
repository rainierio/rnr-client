import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Rainierio.co </title>
                    <meta name="rainierio.co" content="Rainier Letidjawa personal web" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
