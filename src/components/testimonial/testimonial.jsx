import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar: AVTR4,
    name: 'David Christ',
    review : 'Senior Software Engineer at Canva'
    
  },
  {
    avatar: AVTR2,
    name: 'Tahmid Hossain',
    review : 'Machine Learning Engineer at Arkeus'
    
  },
  {
    avatar: AVTR3,
    name: 'Sadman Protik',
    review : 'SWE-SRE III at Google Dublin, Ireland'
    
  },
  {
    avatar: AVTR1,
    name: 'Kazi Abir Adnan',
    review : 'Senior MLDataOps Engineer at Foxtel Group Australia'
    
  },
]



const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>References</h5>
      <h2>Recommendation </h2>

      <Swiper className="container testimonial_container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key = {index}className="testimonial">
              <div className="client_avatar">
                <img src={avatar}  />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>  
            </SwiperSlide>
            )
          })
        }
       
       
      </Swiper>

    </section>
  )
}

export default Testimonial
