import React from "react";
import "./Work.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Work() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="work">
      <div>
        <h1 className="skills-heading">Work Experience</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="work-main">
          <div className="work-text">
          <div className="work-exp-div"  onClick={() => openProjectInNewWindow("https://www.jbhunt.com/")}>
                  <div id='parent_div_3'>
                     <img alt="Sameer Work Information" id="image_width" src="https://drive.google.com/uc?id=1fMPEgXjnHhd4N5yHfi-IsdVGJGxQ2wk1"></img>
                  </div>
                  <div id='parent_div_4'>
                  <div className="work_title">JB.HUNT</div>
                  <div className="work_peroid">Period : June 2019 - August 2019 Arkansas, USA</div>
                  <p className="work-text-p">{emoji("⚡  Analyzed business requirements to better understand business logic and process flow.")}</p>
                  <p className="work-text-p">{emoji("⚡	Created & Prioritized Test cases and Test data for manual & automation testing using Azure Devops.")} </p>
                  <p className="work-text-p">{emoji("⚡	Coordinated review sessions to review requirements and test cases with stakeholders and Developers.")}</p>
                  <p className="work-text-p">{emoji("⚡	Developed automation test script using Protractor and Type Script with Jasmine framework.")}</p>
                  <p className="work-text-p">{emoji("⚡	Maintained source control in Git repository over the time for improvements and new features.")}</p> 
                  </div>
                </div>
                <div className="work-exp-div"  onClick={() => openProjectInNewWindow("https://www.accenture.com/")}>
                  <div id='parent_div_3'>
                     <img alt="Sameer Work Information" id="image_width" src="https://drive.google.com/uc?id=1Tjk12qnz32fxR24teHvUXtvX9xQgLsuq"></img>
                  </div>
                  <div id='parent_div_4'>
                  <div className="work_title">Accenture</div>
                  <div className="work_peroid">Period : May 2017 - June 2018 Pune, India</div>
                    <p className="work-text-p">{emoji("⚡Designed, developed and unit tested solutions for the incidents regarding both user interface changes and development.")} </p>
                    <p className="work-text-p">{emoji("⚡	Worked on defects regarding both functionality and data issues.")}</p>
                    <p className="work-text-p">{emoji("⚡	Implemented new functionalities using Windows Presentation Foundation (WPF).")}</p>
                    <p className="work-text-p">{emoji("⚡	Involved in writing database scripts using SQL for retention of data and logging of data under GDPR. ")}</p>

                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
