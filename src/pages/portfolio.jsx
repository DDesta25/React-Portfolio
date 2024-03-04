import React from "react";
import ProjectCards from "../components/projectCard";

export default function Portfolio() {
  const projects = [
    {
      title: "project 1",
      description: "lorem",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
    {
      title: "project 2",
      description: "",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
    {
      title: "project 1",
      description: "",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
    {
      title: "project 2",
      description: "",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
    {
      title: "project 1",
      description: "",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
    {
      title: "project 2",
      description: "",
      image: "",
      repoLink: "",
      deployedLink: "",
    },
  ];

  return (
    <div className="container bg-light rounded p-2">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 col-sm-12">
            <ProjectCards
              title={project.title}
              description={project.description}
              image={project.image}
              repoLink={project.repoLink}
              deployLink={project.deployedLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
