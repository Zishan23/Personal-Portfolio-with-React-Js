
import { useRef } from 'react';
import './services.css'
import ServicesCard from './ServicesCard';
import Slider from "react-slick";



const WORK_EXPERIENCE = [
  {
    title:"Senior Front End Engineer",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
  },
  
  {
    title:"Senior Front End Engineer",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
  },
  {
    title:"Senior Front End Engineer",
    date: "April 2020 - Present",
    responsibilities: [
      "Lead the team",
      "Lead the team",
      "Lead the team",
      "Lead the team",
    ],
  },
];

const Services = () => {
  const sliderRef = useRef();
  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slideToShow:2,
    slideToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:700,
        settings:{
          slideToShow:1,
          slideToScroll:1,
        },
      },
    ],
  };

  return (
    <section id='services' className='experience-container'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='experience-content'>
        <Slider ref={sliderRef} {...settings}>
        {WORK_EXPERIENCE.map((item) => (
          <ServicesCard key={item.title} details={item} />
        ))}
        </Slider>
      </div>
    </section>
  )
}

export default Services
