import React from "react";
import "./Education.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Education() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="education">
      <div>
        <h1 className="skills-heading">Education</h1>
        <p className="subTitle project-subtitle">THE INSTITUTIONS THAT SHAPED ME</p>
        <div className="education-main">
          <div className="education-text">
          <div className="education-exp-div"  onClick={() => openProjectInNewWindow("https://www.uta.edu")}>
                  <div id='parent_div_3'>
                     <img alt="Sameer Education Information" id="education_image_width" src="https://drive.google.com/uc?id=1KIC4t9DAPxjepGlNbgIOXYow-wy225tO"></img>
                  </div>
                  <div id='parent_div_4'>
                  <div className="education_title">University of Texas at Arlington</div>
                  <div className="education_degree">Masters in Computer Science</div>
                  <div className="education_information">GPA:4.0</div>
                  <div className="education_information">Graduating:May 2020</div>
                  </div>
                </div>
                <div className="education-exp-div"  onClick={() => openProjectInNewWindow("https://www.sreenidhi.edu.in/")}>
                  <div id='parent_div_3'>
                     <img alt="Sameer Education Information" id="education_image_width" src="https://drive.google.com/uc?id=1w0RM8nT5Bhp2DX0wd6T0qALTDoEVe0OZ"></img>
                  </div>
                  <div id='parent_div_4'>
                  <div className="education_title">Sreenidhi Institute of Science and Technology</div>
                  <div className="education_degree">Bachelors in Technology</div>
                  <div className="education_information">GPA:3.2</div>
                  <div className="education_information">Graduated:May 2017</div>

                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
