import React from 'react'
import "./ServicesCard.css"
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
const ServicesCard = ( details) => {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <div className='work-duration'>{details.date}</div>

        <ul>
            {details.responsibilities.iterable.map((item) => {
                <li key={item}>{item}</li>
            })}
        </ul>

    </div>
  )
}

export default ServicesCard