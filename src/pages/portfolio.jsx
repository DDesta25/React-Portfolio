import React from "react";
import ProjectCards from "../components/projectCard";
import pwa from "../assets/image-3.png"
import PWA from "../assets/wharf.png"
import Pwa from "../assets/ecom.png"
import pwas from "../assets/odin.png"
import PWAS from "../assets/social.png"
import PWASS from "../assets/tech.png"
export default function Portfolio() {
  const projects = [
    {
      title: "PWA-Text-Editor",
      description: "This project was creating a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria.",
      image: pwa,
      repoLink: "https://github.com/DDesta25/PWA-Text-Editor",
      deployedLink: "https://pwa-text-editor-xeab.onrender.com/"
    },
    {
      title: "E-commerce-Backend",
      description: "This project was creating Products, Tags, and catagories.",
      image: Pwa,
      repoLink: "https://github.com/DDesta25/E-commerce-Backend",
      deployedLink: "https://ddesta25.github.io/E-commerce-Backend/",
    },
    {
      title: "Social-Network",
      description: "used in insomnia to to get the data for each output selected, for example when you POST it in the url it should bring you a preview of your expected data.",
      image: PWAS,
      repoLink: "https://github.com/DDesta25/Social-Network",
      deployedLink: "https://ddesta25.github.io/Social-Network/"
    },
    {
      title: "By Odin's Beer'd",
      description: "This app is designed yo locate the nearest brewery to you're location",
      image: pwas,
      repoLink: "https://github.com/DDesta25/By_Odins_Beerd",
      deployedLink: "https://ddesta25.github.io/By_Odins_Beerd/",
    },
    {
      title: "WharfRat",
      description: "A Grateful Dead App for you're wildest dreams",
      image: PWA,
      repoLink: "https://github.com/Jbyrd126/WharfRat",
      deployedLink: "https://wharf-rat-11de69f4736c.herokuapp.com/",
    },
    {
      title: "Tech-Blog",
      description: "This app lets you add posts and also comments to each post which you can delete too.",
      image: PWASS,
      repoLink: "https://github.com/DDesta25/Tech-Blog",
      deployedLink: "https://tech-blog-bl-efca826c8bcf.herokuapp.com/",
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
