import React, { useState, useEffect, useRef } from 'react';
import './Nav.css'; 
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const navItems = [
  { id: '#', icon: <AiOutlineHome /> },
  { id: '#about', icon: <AiOutlineUser /> },
  { id: '#experience', icon: <BiBook /> },
  { id: '#services', icon: <RiServiceLine /> },
  { id: '#contact', icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const navBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = '#';
      const sectionElements = [
        { id: '#', el: document.body },
        { id: '#about', el: document.getElementById('about') },
        { id: '#experience', el: document.getElementById('experience') },
        { id: '#services', el: document.getElementById('services') },
        { id: '#contact', el: document.getElementById('contact') },
      ];
      for (let i = 0; i < sectionElements.length; i++) {
        const { id, el } = sectionElements[i];
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = id;
          }
        }
      }
      setActiveNav(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate indicator to active nav
    const idx = navItems.findIndex(item => item.id === activeNav);
    if (navRefs.current[idx]) {
      const el = navRefs.current[idx];
      const navBarRect = navBarRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navBarRect.left,
        width: elRect.width
      });
    }
  }, [activeNav]);

  return (
    <nav ref={navBarRef} style={{ position: 'relative' }}>
      {navItems.map((item, idx) => (
        <a
          key={item.id}
          href={item.id}
          ref={el => navRefs.current[idx] = el}
          onClick={() => setActiveNav(item.id)}
          className={activeNav === item.id ? 'active' : ''}
        >
          {item.icon}
        </a>
      ))}
      <div
        className="nav-indicator"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width
        }}
      />
    </nav>
  );
}

export default Nav;
