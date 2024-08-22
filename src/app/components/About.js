/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import linkedin from '../images/linkedin.png';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-center">
      <div className="border-[2px] border-solid border-black m-2 rounded-2xl ">
        <h1 className="text-black border-2 border-dashed border-red-800">
          Hello, I'm Matthew!
        </h1>
        <h3>
          Software Engineering and Management Student
        </h3>
        <p className="mx-5">
          
          I'm a student at <span>McMaster University</span> studying software engineering and Management. Back in my first year 
          of school, I found myself wanting to make the most of my co-op experiences by getting a breadth of knowledge.

          In 2022, I worked for RBC under the Amplify program where I helped develop an end-to-end solution 

          I love seeing how things work and figuring it out is one of the most rewarding experiences!
        </p>
        <Image 
          src={linkedin} 
          alt="Linkedin Logo"
          width={300}
          height={300}
        />
      </div>
      
    </section>
  )
}

export default About
