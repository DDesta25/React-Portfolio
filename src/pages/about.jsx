import React from "react";
import aboutPic from "../assets/profile_720.png";
export default function About() {
  return (
    <div>
      <div className="container bg-secondary rounded">
        <div className="row fixed ">
          <div className="col-md-5 col-sm-12  ">
            <img className="img-fluid about-pic" src={aboutPic} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 align-self-center">
            <h1>Daniel Desta</h1>
            <h2>Junior Web Developer</h2>
          </div>
        </div>
        <hr />
      </div>
      <div className="container bg-secondary rounded">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="bg-black text-color-light badge text-bg-primary text-wrap">
              Bio
            </h1>
            <p className="bg-light text-midnight-black">
              I'm a junior Web Developer, a passionate individual who finds joy in the wonders of
              nature and the companionship of animals. With a heart filled with
              love for the outdoors, I thrive in natural surroundings, finding
              solace and inspiration in every step taken outside. Not only do I
              have a deep affinity for nature, but I also possess a fervent
              devotion to our furry and feathered friends. Encountering animals
              of all shapes and sizes sparks an indescribable joy within me, as
              I believe in the importance of cherishing and preserving all forms
              of life. In addition to my love for animals and the natural world,
              I have a zest for various sports such as basketball and football.
              Engaging in these activities not only showcases my competitive
              spirit but also highlights my ability to work as part of a team
              and remain focused on a common goal. 
            </p>
            <p className="bg-light text-midnight-black">
            With an adventurous spirit
              and an appreciation for the great outdoors, I embrace every
              opportunity to explore and engage in outdoor activities. Whether
              it's hiking through breathtaking trails, camping beneath starlit
              skies, or simply reveling in the beauty of nature, I derive
              boundless happiness from these extraordinary experiences. If
              you're searching for someone who possesses a true love for
              animals, a passion for outdoor adventures, and a keen interest in
              sports, look no further than me. I am eager to harness my skills
              and bring my enthusiasm to any endeavor, making a positive impact
              and leaving a lasting impression along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
