import React from "react";
import aboutPic from "../assets/buddy.jpg"
export default function About() {
    return (
        <div>
        <div className="container-fluid bg-light">
            <div className="row ">
                <div className="col-md-5 col-sm-12" >
                    <img src= {aboutPic} alt="" />
                </div>
                <div className="col-md-7 col-sm-12 align-self-center">
                    <h1>Daniel Desta</h1>
                    <h2>Web Developer</h2>
                </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="bg-light text-color-light">Bio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex reprehenderit dolore ut sint quisquam! Optio adipisci non qui mollitia aut deserunt voluptate odit vitae debitis, atque ratione inventore quam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sequi eligendi pariatur qui nemo. Ipsum iusto, facilis, tempora, repudiandae accusamus error voluptatem unde ducimus delectus aut suscipit dignissimos excepturi! Est!</p>
                </div>
            </div>
        </div>
        </div>
        );
    }