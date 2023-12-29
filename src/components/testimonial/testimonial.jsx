import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data=[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?'
    
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?'
    
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?'
    
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?'
    
  },
]



const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>References</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial_container">
        {
          data.map(({avatar,name,review},index) => {
            return(
              <article key = {index}className="testimonial">
              <div className="client_avatar">
                <img src={avatar}  />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small> 
            </article>
            )
          })
        }
       
       
      </div>

    </section>
  )
}

export default Testimonial
