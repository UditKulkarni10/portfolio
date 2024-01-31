import { Nav, Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg'
import nav1 from '../assets/img/nav-icon1.svg'
import nav2 from '../assets/img/nav-icon2.svg'
import nav3 from '../assets/img/nav-icon3.svg'



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>  {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Link</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Link</Nav.Link>
            <Nav.Link href="#work experience" className={activeLink === "work experience" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('work experience')}>Link</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#home">
                <img src={nav1} alt="" />
              </a>
              <a href="#skills">
                <img src={nav2} alt="" />
              </a>
              <a href="#projects">
                <img src={nav3} alt="" />
              </a>
              <a href="#work experience">
                <img src={nav3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
