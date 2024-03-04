import React from "react";
import ProjectCards from "../components/projectCard";

export default function Portfolio() {
  const projects = [
    {
      title: "PWA-Text-Editor",
      description: "lorem",
      image: "![alt text](image.png)",
      repoLink: "https://github.com/DDesta25/PWA-Text-Editor",
      deployedLink: "https://pwa-text-editor-xeab.onrender.com/"
    },
    {
      title: "E-commerce-Backend",
      description: "",
      image: "",
      repoLink: "https://github.com/DDesta25/E-commerce-Backend",
      deployedLink: "",
    },
    {
      title: "Social-Network",
      description: "",
      image: "",
      repoLink: "https://github.com/DDesta25/Social-Network",
      deployedLink: ""
    },
    {
      title: "By Odin's Beer'd",
      description: "This app is designed yo locate the nearest brewery to you're location",
      image: "![Alt text](assets/images/load.png)",
      repoLink: "https://github.com/Jbyrd126/By_Odins_Beerd",
      deployedLink: "",
    },
    {
      title: "WharfRat",
      description: "A Grateful Dead App for you're wildest dreams",
      image: "![alt text](image.png)",
      repoLink: "https://github.com/Jbyrd126/WharfRat",
      deployedLink: "https://wharf-rat-11de69f4736c.herokuapp.com/",
    },
    {
      title: "project 6",
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
