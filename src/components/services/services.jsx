import React from 'react'
import './services.css'
import ServicesCard from './ServicesCard';
import { BsCheck2 } from "react-icons/bs";

const WORK_EXPERIENCE = [
  {
    title:"Senior Front End Enginner",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
    
  },
  {
    title:"Senior Front End Enginner",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
  },
  {
    title:"Senior Front End Enginner",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
  }
  
]

const Services = () => {
  return (
    <section id='services' className='experience-container'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='experience-content'>
        {WORK_EXPERIENCE.map((item) => {
          <ServicesCard key={item.title} details={item}/>
          
        })}
      </div>

    </section>
  )
}

export default Services
