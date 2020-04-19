import React from "react";
import "./ProjectGithub.css";
import ProjectGithubCard from "../../components//projectsGithubCard/projectsGithubCard";
import { projectsgithubSection } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
export default function ProjectsGithub() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projectsGithub">
      <div className="blog-header">
        <h1 className="blog-header-text">{projectsgithubSection.title}</h1>
        <p className="subTitle blog-subtitle">{projectsgithubSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {projectsgithubSection.blogs.map(blog => {
            return (
              <ProjectGithubCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                  appurl:blog.appurl
                }}
              />
            );
          })}
        </div>
      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/SameerMosesMurala" newTab={true} />
    </div>
    </Fade>
  );
}
