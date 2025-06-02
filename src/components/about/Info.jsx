import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">

        <i className="bx bx-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Fresher</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3-Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Work Status</h3>
        <span className="about__subtitle">Hybrid/Office</span>
      </div>
    </div>
  );
};

export default Info;
