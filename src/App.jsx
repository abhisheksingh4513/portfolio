import { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Skills from './sections/Skills'
import ParticleBackground from './components/ParticleBackground'
import profileImage from '/profile.jpg'

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #0a192f;
    color: #8892b0;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }
`

const AppContainer = styled.div`
  min-height: 100vh;
`

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(10, 25, 47, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`

const Logo = styled(motion.div)`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #64ffda;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 200;
  @media (max-width: 768px) {
    display: flex;
  }
  span {
    width: 24px;
    height: 3px;
    background: #64ffda;
    margin: 3px 0;
    border-radius: 2px;
    transition: 0.3s;
  }
`

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 70vw;
    height: 100vh;
    background: #0a192f;
    box-shadow: -2px 0 20px rgba(2,12,27,0.7);
    z-index: 150;
    padding: 80px 30px 30px 30px;
    gap: 2rem;
    animation: slideIn 0.3s;
  }
  @keyframes slideIn {
    from { right: -100vw; }
    to { right: 0; }
  }
`

const MobileNavLink = styled.a`
  color: #ccd6f6;
  font-size: 1.2rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid #112240;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #64ffda;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${props => props.active ? '#64ffda' : '#ccd6f6'};
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #64ffda;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #64ffda;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  ${props => props.active && `
    &::after {
      transform: scaleX(1);
    }
  `}
`

const MainContent = styled.main`
  padding-top: 80px;
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  max-width: 1200px;
  margin: 0 auto;
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const HeroText = styled(motion.div)`
  h1 {
    color: #ccd6f6;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #8892b0;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  p {
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`

const ProfileImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #64ffda;
    transform: translate(10px, 10px);
    z-index: -1;
    border-radius: 4px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    filter: grayscale(100%) contrast(1);
    transition: all 0.3s ease;
    
    &:hover {
      filter: none;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`

const SocialLink = styled.a`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`

const navVariants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#achievements", text: "Achievements" },
    { href: "#contact", text: "Contact" }
  ]

  const handleMobileNav = (href) => {
    setActiveSection(href.slice(1))
    setMenuOpen(false)
  }

  return (
    <GlobalStyle>
      <AppContainer>
        <ParticleBackground />
        <Navbar
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <Logo
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            AS
          </Logo>
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }} />
          </Hamburger>
          <NavLinks>
            {navLinks.map((link, i) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href.slice(1))}
                active={activeSection === link.href.slice(1)}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                {link.text}
              </NavLink>
            ))}
          </NavLinks>
          {menuOpen && (
            <MobileMenu>
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => handleMobileNav(link.href)}
                >
                  {link.text}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </Navbar>

        <MainContent>
          <HeroSection>
            <HeroContent>
              <HeroText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Hi, I'm Abhishek Singh</h1>
                <h2>Full Stack Developer</h2>
                <p>
                  I'm a passionate developer who loves building web applications
                  with modern technologies. I specialize in creating responsive,
                  user-friendly interfaces and robust backend solutions.
                </p>
                <SocialLinks>
                  <SocialLink href="https://github.com/abhisheksingh4513" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/abhishek-singh-ba5a59257/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href="https://x.com/abhishek_4513?s=08" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href="https://leetcode.com/u/abhishek4513/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                  </SocialLink>
                  <SocialLink href="https://www.codechef.com/users/abhishekcoee" target="_blank" rel="noopener noreferrer">
                    <SiCodechef />
                  </SocialLink>
                  <SocialLink href="https://www.geeksforgeeks.org/user/abhishek_solver/" target="_blank" rel="noopener noreferrer">
                    <SiGeeksforgeeks />
                  </SocialLink>
                </SocialLinks>
              </HeroText>
              <ProfileImage
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src={profileImage} alt="Abhishek Singh" />
              </ProfileImage>
            </HeroContent>
          </HeroSection>

          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </MainContent>
      </AppContainer>
    </GlobalStyle>
  )
}

export default App
