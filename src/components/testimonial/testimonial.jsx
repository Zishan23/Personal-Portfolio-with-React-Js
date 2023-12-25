import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>References</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiver</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?
            Ex molestiae sapiente qui quidem nostrum vel laudantium necessitatibu
            </small> 
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiver</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet. Et autem 
            Ex molestiae sapiente qui quidem nostrum 
            vel laudantium necessitatibu
            </small> 
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiver</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet. Et autem consectetur id quas temporibus aut voluptatibus perferendis sit voluptas enim?
            Ex molestiae sapiente qui quidem nostrum vel laudantium necessitatibu
            </small> 
        </article>
      </div>

    </section>
  )
}

export default Testimonial
