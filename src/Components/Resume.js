import React, { Component } from "react";
import Slide from "react-reveal";
import Fade from "react-reveal";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
      if (!this.props.data) return null;
      const github = this.props.data.github;
    const linkedIn = this.props.data.linkedIn;
    const devPost = this.props.data.devPost;
    const medium = this.props.data.medium;
    console.log(github);
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
 
      const work = this.props.data.work.map(function (work) {
          let buttonlink = ""
          if (work.link != null) {
              if (work.link == "https://cancode.us/") {
                  buttonlink = (<a id="orange" href={work.link} className="button">
                      Check out canCode
                  </a>)
              } else {
                  buttonlink = (<a id="black" href={work.link} className="button">
                      <i className="fa fa-medium"></i>  Read more on my Medium Blog
                  </a>)
              }
          }
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <b>{work.description}</b><br></br><br></br>
          <p>{work.project1}</p>
          <p>{work.project2}</p>
          <p>{work.project3}</p>
          <b >{work.skill}</b>
          <h3 id={work.letter}></h3>
              {buttonlink}<br></br><br></br>
        </div>
      );
    });

      const apps = this.props.data.Apps.map(function (work) {
          let buttonlink = ""
          if (work.title == "MorningBlast") {
              buttonlink = (<a id="red" href={work.link} className="button">
                  <i className="fa fa-youtube"></i> Watch Video Description
              </a>)
          } else if (work.title == "Plan4Success") {
              buttonlink = (<div className="row">

                  <div className="columns download">
                      <p>
                          <a id="green" href={work.link} className="button">
                              <i className="fa fa-android"></i>  Install this app
                          </a>
                          <a id="black" href={work.link2} className="button">
                              <i className="fa fa-medium"></i>  Read more on my Medium Blog
                          </a>
                      </p>
                  </div>
              </div>)
          }
          return (
              <div key={work.title}>
                  <h3>{work.title}</h3>
                  <p className="info">
                      Android App
                      <span>&bull;</span> <em className="date">{work.years}</em>
                  </p>
                  <b>{work.description}</b><br></br><br></br>
                  <p>{work.project}</p>
                  <b>{work.skill}</b><br></br>
                  {buttonlink}<br></br><br></br>
              </div>
              )
      })
      
      const hackathons = this.props.data.Hackathons.map(function (work) {
          return (
              <div key={work.title}>
                  <h3>{work.title}</h3>
                  <p className="info">
                      {work.award}
                      <span>&bull;</span> <em className="date">{work.years}</em>
                  </p>
                  <b>{work.description}</b><br></br><br></br>
                  <p>{work.project}</p>
                  <b>{work.skill}</b><br></br><br></br>
                  <h3 id={work.links}></h3>
              </div>
              )
      })

      const web = this.props.data.Web.map(function (work) {
          return (
              <div key={work.title}>
                  <h3>{work.title}</h3>
                  <p className="info">
                      Personal Website
                      <span>&bull;</span> <em className="date">{work.years}</em>
                  </p>
                  <p>{work.description}</p>
                  <p>{work.project}</p>
                  <b>{work.skill}</b><br></br><br></br>
              </div>
          )
      })

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
      
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

           <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        <div>
        <Slide left duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>App Development</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{apps}</div>

                </div>
            </Slide>

          <Slide left duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Web Development</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{web}</div>

                </div>
           </Slide>

          <Slide left duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Hackathons</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{hackathons}</div>

                </div>
            </Slide>

            
        </div>

            <section style={{ background: "#052932", color: "white" }} id="banner">
                <Fade duration={1000}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src="images/devpost-logo.png"
                                alt="devPost"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>Learn more about my Hacakthons on Devpost</h2>

                            <p>Read more on my process on developing this projects, the challenges I faced, and the skills I learned on the way</p>
                            <div className="row">

                                <div className="columns download">
                                    <p>
                                        <a id="w" href={devPost} className="button">
                                            Go to Devpost
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>

            <section style={{ background: "#f46306", color: "white" }} id="banner">
                <Fade duration={1000}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src="images/github.png"
                                alt="github"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>Check out my Github</h2>

                            <p style={{color: "white" }}>Read and learn the specific software of my projects from the Hackathons to my Android apps</p>
                            <div className="row">

                                <div className="columns download">
                                    <p>
                                        <a id="b" href={github} className="button">
                                            Go to Github
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>

            <section style={{ background: "black", color: "white" }} id="banner">
                <Fade duration={1000}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src="images/Medium_logo.png"
                                alt="medium"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>Check out my blog on Medium</h2>

                            <p style={{ color: "white" }}>Read more about my Lemelson-MIT InvenTeam project and my journey in App Development</p>
                            <div className="row">

                                <div className="columns download">
                                    <p>
                                        <a id="w" href={medium} className="button">
                                            Go to Medium
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>

            <section style={{ background: "#125f8e", color: "white" }} id="banner">
                <Fade duration={1000}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src="images/linkedin.png"
                                alt="linkedin"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>Connect with me on LinkedIn</h2>
                            <div className="row">
                                <div className="columns download">
                                    <p>
                                        <a id="w" href={linkedIn} className="button">
                                            Go to LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
      </section>
    );
  }
}

export default Resume;
