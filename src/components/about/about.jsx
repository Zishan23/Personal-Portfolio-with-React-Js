import React from 'react'
import './about.css'
import ME from '../../assets/me-about.gif'
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
          I have a diverse background in both technical account management and software development, allowing me to bring a unique perspective to every project. 

Throughout my career, I have successfully onboarded new e-commerce merchants, integrated their data, and effectively communicated technical issues to both merchants and internal teams. By leveraging my skills in React.js, Jest, and Enzyme, I conduct thorough unit and integration testing, improving code quality and ensuring a bug-free product. I also excel in performance optimization techniques such as code splitting and lazy loading, resulting in faster page load times and an enhanced user experience.


My educational journey includes a B.Sc. in Computer Science with a major in Multimedia from University Putra Malaysia, where I gained a solid foundation in operating systems, databases, algorithms, and programming languages such as Java, C#, python. Currently pursuing an M.Sc. in Information Technology from the Royal Melbourne Institute of Technology, I am expanding my knowledge in cloud data, big data analytics, software systems, and security.

I have a diverse skill set that includes Python, Java, Dart, Django, SQL, React JS, Node.js, and more. Proficient in tools such as Adobe Creative Suite, Flutter, and TensorFlow Lite, I am equipped to handle various technical challenges.

Some notable projects I have worked on include the Image Based Animal Classification System, where I developed a visual classification system using MATLAB, and the Mobile Fruit Recognition application, which utilizes machine learning techniques for fruit identification. I also contributed to the development of copper24.com, a comprehensive betting website platform built with Node.js, React, Postgre SQL, and hosted on GCP.

If you're seeking a passionate and dedicated professional who thrives in both technical account management and full-stack development, let's connect and explore potential collaboration opportunities. Feel free to reach out to me at zishanismam@gmail.com
          </p>

          <a href='#contact'className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About