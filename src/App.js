import React, { useState } from 'react';
import profilePic from './ntshu.jpg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact-info">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Ntshuxekani Zitha</h1>
        <img src={profilePic} alt="Ntshuxekani Zitha" className="profile-photo" />

        <p>Full Stack Developer</p>

         {/* Download CV Button */}
         <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download className="download-cv-button">
          <button>Download CV</button>
        </a>
      </header>

      {/* About Me Section */}
      <section id="about-me">
        <h2>About Me</h2>
        <p>I'm a Full Stack Developer with experience in Angular, Spring Boot, PostgreSQL, and more.</p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Angular)</li>
          <li>Java (Spring Boot)</li>
          <li>SQL (PostgreSQL)</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>ProcessPulse</h3>
          <p>ProcessPulse is a platform that allows Organizations to post their business processes, then hunters 
            comes to the platform to look for business process that organization posts and evaluate them.</p>
        </div>
        <div className="project">
          <h3>Photography Booking Application</h3>
          <p>An app where photographers showcase their work and get booked.</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <p>Junior Full Stack Developer at Shaper</p>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        <p>Diploma in Systems Development</p>
      </section>

      {/* Contact Section */}
      <footer id="contact-info" className="contact-info">
        <h2>Contact</h2>
        <p>Email: ntshuxekanizitha@gmail.com</p>
        <p>Phone: +27 76 916 8770</p>
        <p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a> | 
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
