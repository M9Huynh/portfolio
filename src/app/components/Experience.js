import React from 'react';
import Job from './helper/Job';

const jobs = [
    {
        title: "National Program Manager",
        company: "Jetson Infinity",
        desc: "",
        time: "Oct. 2023 - Aug 2024",
        // skills: ["Leadership", "Time "]
        
    }, 
    {
        title: "Software Engineer",
        company: "Royal Bank of Canada - Ojo Canada",
        desc: "",
        time: "May 2023 - Aug. 2023",
        skills: "JavaScript, TypeScript, HTML & CSS, React Native, Contentful"
        
    }, 
    {
        title: "Software Developer",
        company: "Royal Bank of Canada - Amplify",
        desc: "",
        time: "May 2022 - Aug. 2022",
        skills: "JavaScript, Python, HTML & CSS, Axios, Material UI"
        
    }, 
    {
        title: "Analyst",
        company: "Grant Thornton - R&D and Government Incentives",
        desc: "",
        time: "May 2021 - Aug. 2021",
        skills: "Time Management, Organization, Technical Writing"
        
    }, 
]

const experience = () => {
  return (
    <div>
      <ul>
        {jobs.map((job, index) => (
            <li key={job}>
                <Job 
                    title={job.title}
                    company={job.company}
                    desc={job.desc}
                    time={job.time} 
                    skills={job.skills}
                />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default experience
