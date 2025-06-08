import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
          <h1 className="logo">Rajiv P.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/iamrajivprajapati/" target='_blank' rel="noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#f">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/iamrajivprajapati/" target='_blank' rel='noreferrer'>
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let’s Connect</span>
            </button>
            {/* <HashLink to='#connect'>
              </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
