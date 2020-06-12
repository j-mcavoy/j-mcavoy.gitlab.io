import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div className="row" key={education.school.name}>
            <div className="two columns">
              <a href={education.school.website} target="_blank"><img src={education.school.logo}></img></a>
            </div>
            <div className="ten columns">
              <h3>{education.school.name}</h3>
              <p className="info">
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
              <p>{education.description}</p>
            </div>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div className="row" key={work.company}>
            <div className="two columns">
              <a href={work.website} target="_blank"><img src={work.logo}></img></a>
            </div>
            <div className="ten columns">
              <h3>{work.company}</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <p>{work.description}</p>
            </div>
          </div>
        );
      });
      var extra_circulars = this.props.data.extracurriculars.map(function (
        extracurricular
      ) {
        return (
          <div className="row" key={extracurricular.name}>
            <div className="two columns">
              <a href={extracurricular.website} target="_blank"><img src={extracurricular.logo}></img></a>
            </div>
            <div className="ten columns">
              <h3>{extracurricular.name}</h3>
              <p>{extracurricular.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">{education}</div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row societies">
          <div className="three columns header-col">
            <h1>
              <span>Extracurriculars</span>
            </h1>
          </div>

          <div className="nine columns main-col">{extra_circulars}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
