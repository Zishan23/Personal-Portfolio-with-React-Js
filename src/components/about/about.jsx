import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className='about_card'>
            <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>20+ Clients Worldwide</small>
            </article>

            <article className='about_card'>
            <GoProjectSymlink className='about_icon'/>
              <h5>Projects</h5>
              <small>28+ Completed Projects</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet. Et molestiae officia ad cupiditate sunt et quisquam iste. Eum quia quaerat non voluptate perferendis quo recusandae delectus et explicabo vero.
          Ut consequatur impedit in quas maxime ut vitae autem. A odit veritatis sed quia voluptatum non animi quia.
          </p>

          <a href='#contact'className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About