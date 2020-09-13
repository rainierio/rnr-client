import React, { Component } from "react";

class UsedTechnology extends Component{
    render(){
        const TechnologyList = [
            {img: "https://icongr.am/devicon/html5-original-wordmark.svg?size=100&color=currentColor", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},
            {img: "https://icongr.am/devicon/css3-original-wordmark.svg?size=100&color=currentColor", url: "https://css-tricks.com/"},
            {img: "https://icongr.am/devicon/javascript-original.svg?size=90&color=currentColor", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"},
            {img: "https://icongr.am/devicon/react-original.svg?size=100&color=currentColor", url: "https://reactjs.org"},
            {img: "https://icongr.am/devicon/express-original-wordmark.svg?size=100&color=currentColor", url: "https://expressjs.com/"},
            {img: "https://icongr.am/devicon/nodejs-original.svg?size=100&color=currentColor", url: "https://nodejs.org/en/"},
            {img: "https://icongr.am/devicon/mongodb-original-wordmark.svg?size=100&color=currentColor", url: "https://mongodb.com/"},
            {img: "https://icongr.am/devicon/npm-original-wordmark.svg?size=100&color=currentColor", url: "https://npmjs.com/"},
            {img: "https://icongr.am/devicon/git-original-wordmark.svg?size=100&color=currentColor", url: "https://git-scm.com/"},
        ]
        
        return(
            <React.Fragment>
                <ul className="brand-style-2">
                    {
                        TechnologyList.map(list => (
                            // eslint-disable-next-line react/jsx-no-target-blank
                            <a target= "_blank" href={list.url}>
                                <img src={list.img} alt="Logo Images"/>
                            </a>
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }
}
export default UsedTechnology;