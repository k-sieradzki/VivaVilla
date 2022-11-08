import React, {useState, useEffect, useRef} from 'react'
import { GiFalconMoon, GiHamburgerMenu} from 'react-icons/gi';

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false)

  const navLink = useRef(null)

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
    const showMobileNav = () =>{
      setToggleMenu(prevCheck => !prevCheck);
    }

    if(navLink.current){
      let navLinks = [...navLink.current.children]
      navLinks.map(link => {
        link.addEventListener('click', showMobileNav);

        return () => {
          link.removeEventListener("click", showMobileNav);
        };
      })
    }
  })
  
  return (
    <nav className={color ? `${styles.scrolled}` : `${styles.not}`}>
      <div className={styles.navbar}>
        <div className={styles.bar}>
          <div className={styles.logo}>
            <a href="#home"><GiFalconMoon className={styles.logoIcon} /></a>
          </div>
          <div className={styles.links}>
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
          <div className={styles.hamburger} onClick={() => { setToggleMenu(prevCheck => !prevCheck); }}>
            <GiHamburgerMenu className={styles.hamburgerIcon} />
          </div>
        </div>
        {toggleMenu && (
          <div className={styles.mobileLinks}>
          <ul ref={navLink}>
            <li className={styles.navItem} ><a href="#home">Home</a></li>
            <li className={styles.navItem} ><a href="#about">About</a></li>
            <li className={styles.navItem} ><a href="#services">Services</a></li>
            <li className={styles.navItem} ><a href="#projects">Projects</a></li>
            <li className={styles.navItem} ><a href="#skills">Skills</a></li>
            <li className={styles.navItem} ><a href="#team">Team</a></li>
            <li className={styles.navItem} ><a href="#blog">Blog</a></li>
          </ul>
        </div>
        )
        }
      </div>
    </nav>
  )
}
export default Navbar