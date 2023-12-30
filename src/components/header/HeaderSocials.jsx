import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/ismamzishan/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Zishan23' target="_blank"><FaGithub /></a>
        <a href='https://www.facebook.com/iishmam.zishan/' target="_blank"><FaFacebook /></a>

    </div>
  )
}

export default HeaderSocials  