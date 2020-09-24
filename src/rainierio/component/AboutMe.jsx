/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Moment from "react-moment";
import axios from "axios";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      works: {},
      projects: [],
      educations: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/client/aboutme")
      .then((res) => {
        this.setState({
          skills: res.data.skills,
          work: res.data.about[0].work.sort(
            (a, b) => b.fromdate.substr(0, 4) - a.fromdate.substr(0, 4)
          ),
          projects: res.data.about[0].project,
          educations: res.data.about[0].education.sort(
            (a, b) => b.fromdate.substr(0, 4) - a.fromdate.substr(0, 4)
          ),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let unique = [];
    const { tabStyle } = this.props;
    let tab1 = "Skills",
      tab2 = "Projects",
      tab3 = "Careers",
      tab4 = "Educations";

    const workTab =
      this.state.work &&
      this.state.work.map((wrk) => (
        <li>
          <a>
            {wrk.title} - {wrk.company}
          </a>{" "}
          <div style={{textAlign:"initial"}}>{wrk.jobdesc}</div>
          <a style={{fontStyle:"normal", fontWeight:"bolder"}}>
            {wrk.location}, <Moment format='MMM YYYY'>{wrk.fromdate}</Moment> -
            <Moment format='MMM YYYY'>{wrk.todate}</Moment>
          </a>
        </li>
      ));

    const projectTab =
      this.state.projects &&
      this.state.projects.map((prj) => (
        <li>
          <a>
            {prj.projectname} - {prj.company}
          </a>{" "}
          {prj.projectdetail} <br />{" "}
          <Moment format='MMM YYYY'>{prj.projectdate}</Moment>
        </li>
      ));

    const educationTab =
      this.state.educations &&
      this.state.educations.map((edu) => (
        <li>
          <a>
            {edu.title} - {edu.institution}
          </a>{" "}
          {edu.location}, <Moment format='MMM YYYY'>{edu.fromdate}</Moment> -
          <Moment format='MMM YYYY'>{edu.todate}</Moment>
        </li>
      ));

    if (this.state.skills.length > 0) {
      unique = [...new Set(this.state.skills.map((skill) => skill.category))];
    }

    const skillTab =
      unique &&
      unique.map((cat) => {
        let skillItem = this.state.skills.map((skill) => {
          if (skill.category === cat) {
            return skill.skillname + ", ";
          }
          return null;
        });
        return (
          <li>
            <a>{cat}</a>
            {skillItem}
          </li>
        );
      });

    return (
      <div>
        {/* Start Tabs Area */}
        <div className='tabs-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  {/* start skills tab */}
                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>{skillTab}</ul>
                    </div>
                  </TabPanel>

                  {/* start works tab */}
                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>{projectTab}</ul>
                    </div>
                  </TabPanel>

                  {/* start projects tab */}
                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>{workTab}</ul>
                    </div>
                  </TabPanel>

                  {/* start educations tab */}
                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>{educationTab}</ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default AboutMe;
