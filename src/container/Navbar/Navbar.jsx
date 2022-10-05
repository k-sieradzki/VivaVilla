import React, {useState, useEffect} from 'react'


import './Navbar.scss'
import { GiFalconMoon, GiHamburgerMenu} from 'react-icons/gi';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false)

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 1){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  });

  useEffect(() => {
    const showDesktopBar = () =>{
      if(window.innerWidth > 992){
        setToggleMenu(false)
      }
    }
    window.addEventListener('resize', showDesktopBar)

    return () => {
      window.removeEventListener("resize", showDesktopBar);
    };

  }, []);



  useEffect(()=>{
    const navItem = document.querySelectorAll('.nav-item');

    const showMobileNav = () =>{
      setToggleMenu(prevCheck => !prevCheck);
    }

    navItem.forEach(e => {
      e.addEventListener('click', showMobileNav);

      return () => {
        e.removeEventListener("click", showMobileNav);
      };
    });
  })
  



  return (
    <nav className={color ? 'scrolled' : 'not'}>
      <div className="navbar">
        <div className="bar">
          <div className="logo">
            <a href="#home"><GiFalconMoon className='logo-icon' /></a>
          </div>
          <div className="links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => { setToggleMenu(prevCheck => !prevCheck); }}>
            <GiHamburgerMenu className='hamburger-icon'/>
          </div>
        </div>
        {toggleMenu && (
          <div className="mobile-links">
          <ul>
            <li className='nav-item'><a href="#home">Home</a></li>
            <li className='nav-item'><a href="#about">About</a></li>
            <li className='nav-item'><a href="#services">Services</a></li>
            <li className='nav-item'><a href="#projects">Projects</a></li>
            <li className='nav-item'><a href="#skills">Skills</a></li>
            <li className='nav-item'><a href="#team">Team</a></li>
            <li className='nav-item'><a href="#blog">Blog</a></li>
          </ul>
        </div>
        )
        }
      </div>
    </nav>
  )
}
export default Navbar