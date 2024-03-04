
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectCards({title, description, image, repoLink, deployLink}) {
    return (
      <div class="card">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={repoLink} class="btn btn-primary">Github</a>
        <a href={deployLink} class="btn btn-primary">Demo App</a>
      </div>
    </div>
    );
}
  
  export default ProjectCards;