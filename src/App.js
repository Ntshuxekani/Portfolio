import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Your responsive and styled navbar here */}
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Ntshuxekani Zitha</h1>
        <img src="ntshu.jpg" alt="Ntshuxekani Zitha" className="profile-photo" />
        <p>Full Stack Developer</p>
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
          <h3>Photographer Showcase and Booking App</h3>
          <p>A web application that allows photographers to showcase their work and get booked by clients.</p>
        </div>
        <div className="project">
          <h3>Office Booking Application</h3>
          <p>An app where employees can book office spaces to optimize workplace usage.</p>
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
      <footer className="contact-info">
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +27 123 456 7890</p>
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
