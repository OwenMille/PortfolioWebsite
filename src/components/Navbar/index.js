import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              OM
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Education
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='skills'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='Experience'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Experience
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/statement'>Author Statement</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
