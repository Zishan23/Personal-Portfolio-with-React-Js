import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' targer="_blank"><BsLinkedin/></a>
        <a href='https://github.com' targer="_blank"><FaGithub /></a>
        <a href='https://dribble.com' targer="_blank"><FaDribbble /></a>

    </div>
  )
}

export default HeaderSocials