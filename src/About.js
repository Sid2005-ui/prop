import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
      
      <div className="about-content">
        <div className="intro-section">
          <h2>Hi, I'm Siddhant! 👋</h2>
          <p>
            I'm an Electrical Engineering student with a passion for technology that extends 
            far beyond traditional engineering. While pursuing my degree, I've developed a 
            strong interest in web development and modern technologies.
          </p>
        </div>

        <div className="skills-section">
          <h2>Technical Skills</h2>

          <div className="skill-category">
            <h3>🌐 Web Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>💼 Professional Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PowerPoint</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>🤖 Emerging Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Generative AI</span>
              <span className="skill-tag">AI Concepts</span>
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h2>My Journey</h2>
          <p>
            As an Electrical Engineering student, I've discovered that my interests span 
            across multiple domains. While studying traditional engineering concepts, 
            I've been actively learning. web development technologies like <u>HTML, CSS, 
            JavaScript, and React.</u>
          </p>
          <p>
            I believe in the power of combining technical knowledge with practical skills. 
            That's why I've also focused on mastering essential tools like Excel for data 
            analysis, MySQL for database management, and PowerPoint for effective presentations.
          </p>
          <p>
            Recently, I've been exploring the fascinating world of  <u>Generative AI through 
            specialized courses </u>, keeping myself updated with the latest technological trends 
            that are shaping our future.
          </p>
        </div>

        <div className="interests-section">
          <h2>What Drives Me</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h4>⚡ Engineering</h4>
              <p>Solving complex problems through systematic thinking and innovation</p>
            </div>
            <div className="interest-card">
              <h4>💻 Web Development</h4>
              <p>Creating interactive and user-friendly digital experiences</p>
            </div>
            <div className="interest-card">
              <h4>🚀 AI & Innovation</h4>
              <p>Exploring how artificial intelligence can transform industries</p>
            </div>
            <div className="interest-card">
              <h4>📊 Data & Analytics</h4>
              <p>Turning raw data into meaningful insights and solutions</p>
            </div>
          </div>
        </div>

        <div className="closing-section">
          <h2>Let's Connect!</h2>
          <p>
            I'm always excited to learn new technologies, work on interesting projects, 
          . Whether it's about engineering, 
            web development, or the latest in AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;