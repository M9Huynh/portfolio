"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="text-5xl">
          Matthew Huynh
        </h1>
        <h3 className="text-lg text-gray-500">
          Software Engineering and Management Student
        </h3>
        <div className="mt-3">
          <p className="">
            I'm a student at <a href="https://www.mcmaster.ca/"><span className="">McMaster University!</span></a> 
          </p>
          <p>  
            Back in my first year 
            of school, I found myself wanting to make the most of my co-op experiences by getting a breadth of knowledge.

            In 2022, I worked for RBC under the Amplify program where I helped develop an end-to-end solution 
          </p>
          <p>
            When I'm not coding I'm {" "}
            <TypeAnimation 
              sequence={[
                "at school!", 1000,
                "learning how to cook!", 1000,
                "going to the gym!", 1000,
                "biking to the nearest city!", 1000,
              ]}
              wrapper="span"
              speed={50}
              style={{display: "inline-block"}}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About
