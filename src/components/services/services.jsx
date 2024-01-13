import React from 'react';
import { useRef } from 'react';
import './services.css'
import ServicesCard from './ServicesCard';
import Slider from "react-slick";
import { chevron_right } from '@mui/icons-material';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const WORK_EXPERIENCE = [
  {
    title:"Web3 Developer, Intern",
    date: "Mar 2023 – Present",
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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

        <div className='arrow-right'>
          <span class="material-symbol-outlined">chevron-right</span>
        </div>

        <div className='arrow-left'>
          <span class="material-symbol-outlined"><IoIosArrowForward /></span>
        </div>
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
