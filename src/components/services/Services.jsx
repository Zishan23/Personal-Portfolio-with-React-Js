import React from 'react';
import { useRef } from 'react';
import './services.css'
import ServicesCard from './ServicesCard';
import Slider from "react-slick";


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const WORK_EXPERIENCE = [
  {
    title:"Web3 Developer, Intern",
    date: "Mar 2023 – Present",
    responsibilities: [
      "Built Smart Contract for NFT Tokens.",
      "Redisgned FinX website using React.JS",
      "Designed NFT membership cards for FinX clients.",
    ],
  },
  
  {
    title:"Technical Account Manager, Intern",
    date: "Mar 2022 – Sept 2022",
    responsibilities: [
      "Streamlined manual processes and procedures using Python and ELK.",
      "Optimized and refactored software to improve efficiency and productivity.",
      "Deployed software on AWS Lambda for seamless functionality and scalability.",
      "Successfully onboarded new e-commerce merchants and integrated their data.",
      "Effectively communicated technical and performance issues to both merchants and internal teams.",
    ],
  },
  {
    title:"Senior Front End Engineer",
    date: "Mar 2020 - Present",
    responsibilities: [
      "Collaborated with designers and product managers to implement new features and improve user experience, ensuring adherence to the company's brand guidelines and design principles.",
      "Conducted unit testing and integration testing using Jest and Enzyme, improved code quality and fewer bugs.",
      "Implemented performance optimizations, such as code splitting and lazy loading, resulting in faster page load times and improved user experience for clients.",
      "• Mentored junior developers on React.js and best practices for frontend development.",
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
