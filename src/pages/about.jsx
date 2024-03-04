import React from "react";
import aboutPic from "../assets/buddy.jpg"
export default function About() {
    return (
        <div>
        <div className="container-fluid bg-light">
            <div className="row ">
                <div className="col-md-5 col-sm-12  " >
                    <img src= {aboutPic} alt="..."  />
                </div>
                <div className="col-md-7 col-sm-12 align-self-center">
                    <h1>Daniel Desta</h1>
                    <h2>Junior Web Developer</h2>
                </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="bg-black text-color-light badge text-bg-primary text-wrap">Bio</h1>
                    <p className="bg-light text-secondary">Are you ready to stand out in the world of web development? Look no further! I am a dedicated and ambitious junior web developer in training, currently enrolled in a comprehensive full stack web development course. Equipped with a solid foundation in CSS, JavaScript, HTML, React, Node.js, MongoDB, and Express.js, I am eager to dive headfirst into the world of coding. With a passion for learning and a hunger to excel, I am determined to master the craft of web development. I am a fast learner, always up for new challenges, and will give my absolute best to any project or opportunity that comes my way. So, if you're seeking a talented and committed junior web developer who is ready to make a mark in the industry, look no further. I am here, ready to bring your vision to life and contribute to your team's success. Let's embark on this exciting journey together!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sequi eligendi pariatur qui nemo. Ipsum iusto, facilis, tempora, repudiandae accusamus error voluptatem unde ducimus delectus aut suscipit dignissimos excepturi! Est!</p>
                </div>
            </div>
        </div>
        </div>
        );
    }