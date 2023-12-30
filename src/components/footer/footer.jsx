import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ismam Zishan</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/iishmam.zishan/" target="_blank"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/ismamzishan/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Zishan23" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ismam Zishan Portfolio. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer