import React from "react";
import "./projectGithubCard.css";

export default function ProjectGithubCard({ blog }) {
  let appurl=null;
  if(blog.appurl)
  {
    appurl= <a href={blog.appurl} target="_" class="projectGithubButton">View App</a>
  }
  return (
    <div>
      <div class="container">
        <div class="projectsGithubSquare">
          <img src={blog.image} alt="blog" className="projectsGithub-card-image mask" />
          <div class="projectsGithub-card-title">{blog.title}</div>
          <p className="projectsGithub-card-subtitle">{blog.description}</p>

          <div>
            <a href={blog.url} target="_" class="projectGithubButton">
              View Code
            </a>
            {appurl}
          </div>
        </div>
        
      </div>
      
    </div>

  );
}
