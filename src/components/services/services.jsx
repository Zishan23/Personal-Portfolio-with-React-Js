import React from 'react'
import './services.css'
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services' className='experience-container'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='experience-content'>
        {WORK_EXPERIENCE.map((item) => {
          <ExperienceCard key={item.title} details={item}/>
          
        })}
      </div>

    </section>
  )
}

export default Services
