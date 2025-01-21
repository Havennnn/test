import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to the desired section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
    } else {
      gsap.to(menuRef.current, {
        x: '160%',
        duration: 0.1,
        ease: 'power4.in',
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="relative sticky-navbar">
      <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 flex lg:hidden">
        <h1 className="font-semibold text-3xl py-2 text-gray px-6 sm:px-14 text-shadow">
          Marbls<span className="font-semibold text-5xl text-dgray">Lats</span>
        </h1>
        <div className="flex justify-center items-center p-3 w-16 rounded-bl-[1.5rem] bg-dgray element5 menu">
          <button onClick={toggleMenu} className="text-white2 element6">
            {isMenuOpen ? (
              <i className="fa-solid fa-close text-white text-4xl hover:transform hover:scale-110 transition ease-in-out duration-300 animate-fadeIn"></i>
            ) : (
              <i className="fa-solid fa-bars text-white text-4xl [40px] hover:transform hover:scale-110 transition ease-in-out duration-300 animate-fadeIn"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ transform: 'translateX(100%)' }}
        className="bg-dgray text-white px-2 absolute rounded-bl-[1rem] right-0 top-[62px] z-20 transition-all duration-500 ease-in-out block lg:hidden element8"
      >
        <ul className="flex flex-col pt-2 pb-5 gap-5">
          <li
            className="flex text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300"
            onClick={() => scrollToSection('home')}
          >
            <i className="fa-solid fa-house text-xl text-white"></i>
          </li>
          <li
            className="flex text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300"
            onClick={() => scrollToSection('skills')}
          >
            <i className="fa-solid fa-code text-xl text-white"></i>
          </li>
          <li
            className="flex gap-2 text-white justify-around items-center hover:transform hover:scale-110 hover:cursor-pointer transition ease-in-out duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <i className="fa-solid fa-phone text-xl text-white"></i>
          </li>
          <li
            className="flex gap-2 text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300"
            onClick={() => scrollToSection('projects')}
          >
            <i className="fa-solid fa-folder text-xl text-white"></i>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden lg:flex">
        <div className="flex">
          <h1 className="font-semibold text-3xl text-gray px-14 text-shadow">
            Marbls<span className="font-semibold text-5xl text-dgray">Lats</span>
          </h1>
        </div>
        <div className="flex pl-3 pt-3 pb-5 rounded-bl-[1.5rem] bg-dgray element">
          <ul className="flex gap-1 lg:gap-6 element2">
            <li
              className="flex text-white bg-white py-1 px-6 rounded-xl justify-center items-center gap-2"
            >
              <i className="fa-solid fa-house text-sm text-dgray cursor-default"></i>
              <p className="font-semibold text-dgray cursor-default">Home</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 hover:transform hover:scale-110 hover:bg-white transition ease-in-out duration-300 group"
              onClick={() => scrollToSection('skills')}
            >
              <i className="fa-solid fa-code text-sm group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Skills</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 hover:transform hover:scale-110 hover:bg-white transition ease-in-out duration-300 group"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fa-solid fa-id-badge text-sm group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Contact</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 hover:transform hover:scale-110 hover:bg-white transition ease-in-out duration-300 group"
              onClick={() => scrollToSection('projects')}
            >
              <i className="fa-solid fa-folder text-sm group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Project</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
