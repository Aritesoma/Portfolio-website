import React, { useState } from "react";
import "./App.css";
import CaseStudy from "./CaseStudy";
import CaseStudyYt from "./CaseStudyYt";

// Reusable Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container nav-container">
        <div className="logo-brand">
          <span className="logo">
            {" "}
            <img src="images/Ari.png" alt="logo" />
          </span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#footer">Contact</a>
          <a href="#Project">
            {" "}
            <button className="cta-button">Projects</button>
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="hero-section">
    <div className="container hero-container">
      <div className="hero-content">
        <h1 className="hero-title1">
          Hi! I'm Ari. <br /> A <span className="highlight">UX Designer</span>
        </h1>
        <p className="hero-subtitle">
          I specialize in crafting user experiences that blend clean aesthetics
           with research-driven, visually engaging layouts and carefully curated 
           color palettes. Designs that feel as good as they look.
        </p>
        <div className="hero-buttons">
          <a href="#Project">
            {" "}
            <button className="cta-button large-cta-button">Case Study</button>
          </a>
          <a href="https://docs.google.com/document/d/1wpkeY_-Dcm0DK0pGfWGFN6t3aALY0we6Dm52gnpOll4/edit?usp=sharing" 
            target="_blank" rel="noopener noreferrer">
            <button className="cta-button large-cta-button">View CV</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Projects
const Projects = ({ onViewCaseStudy, onViewCaseStudyYt }) => {
  return (
    <section id="Project" className="project-section">
      
      <div className="container project-container">
        <div className="project-content">
          <h1 className="project-title">
            <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            A smart mobile app that replaces the manual meal ordering system at AMCE hospital.
            it is a leap towards efficiency and delivering quality patient experience achieved
           through staff satisfaction. 
            
          </p>
          <div className="moreinfo-content">
              <div className="moreinfo-block"><h3>Role</h3><p>UX Designer</p></div>
              <div className="moreinfo-block"><h3>Project Duration</h3><p>2 Weeks</p></div>
              <div className="moreinfo-block"><h3>Estimated Read Time</h3><p>15 Mins</p></div> 
          </div>
          <div className="project-buttons">
              <button onClick={onViewCaseStudy} className="cta-button large-cta-button">
                Read Case Study
              </button>
              < a href="https://embed.figma.com/proto/EV6FJFwLWr89ppesZ4BFcD/AMCE-Meals?page-id=3%3A2&node-id=150-406&viewport=-548%2C-191%2C0.53&scaling=scale-down&content-scaling=fixed&starting-point-node-id=150%3A397&embed-host=share" target="_blank" rel="noopener noreferrer">
               <button className="cta-button large-cta-button">
                View Prototype
              </button>
              </a>
          </div>
          
        </div>
        <div className="project-image-wrapper">
          <img src="images/opening.png" alt="My profile" className="project-imagemobile" />
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="images/fpytui.png" alt="My profile" className="project-imagedesktop" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            YouTube <span className="highlight1">Shorts</span> Re-design
          </h1>
          <p className="project-subtitle">
            Enhancing the YouTube Shorts experience on desktop. Aiming to bring mobile-first creativity 
            to the big screen with smoother navigation, smarter engagement, and a more immersive viewing flow.
          </p>
          <div className="moreinfo-content">
              <div className="moreinfo-block"><h3>Role</h3><p>UX Designer</p></div>
              <div className="moreinfo-block"><h3>Project Duration</h3><p>1 Week</p></div>
              <div className="moreinfo-block"><h3>Estimated Read Time</h3><p>10 Mins</p></div> 
          </div>
          <div className="project-buttons">
              <button onClick={onViewCaseStudyYt} className="cta-button large-cta-button">
                Read Case Study
              </button>
              < a href="https://embed.figma.com/proto/AOtzPMBIXu5pzFoPeuosn9/YT-Shorts-Redesign?page-id=75%3A2&node-id=76-713&starting-point-node-id=76%3A713&embed-host=share" target="_blank" rel="noopener noreferrer">
               <button className="cta-button large-cta-button">
                View Prototype
              </button>
              </a>
            
          </div>
        </div>
      </div>

    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <p className="section-subtitle1">Get To Know More</p>
        <h1 className="section-title">About Me</h1>

        <div className="about-section-container">
          <div className="about-left-column">
            <div className="about-image-wrapper">
              <img
                src="images/aripic.jpg"
                alt="Profile picture"
                className="about-pic"
              />
            </div>
           </div> 

       
          <div className="about-details-container">
            <center>
            <div className="moreinfo-content1">
              <div className="moreinfo-block"><h3>Skills</h3><p style={{ fontSize: '10px' }}>Figma React JS HTML CSS JavaScript</p></div>
              <div className="moreinfo-block"><h3>Currently Pursuing</h3><p style={{ fontSize: '10px' }}>BSc. Computer Science</p></div>
          </div>
          </center>
            <div className="project-subtitle about-content-text">
              <p>
                I am a 4th year Computer Science student enthusiastically seeking excellence in crafting clean, intuitive and
                user-friendly digital experiences. My journey into UX design
                began during my sophomore year when I took a UX design internship at Soutech. I instantly
                fell in love with the process of understanding user needs and crafting solutions that
                enhance their interactions with technology. 
                Since then, I have been dedicated to honing my skills.
                When I'm not designing, I enjoy watching visually aesthetic video content on YouTube, such as home deco
                and bento-box packaging. I believe that great design has the power to
                transform lives, and I am excited to continue my journey in the field of UX design.
              </p>
              <p> <b>Fun Fact:</b> I designed and coded this React portfolio website! It was a lot of fun.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container footer-container">
      <div className="social-links">
        <a href="https://github.com/Aritesoma" target="_blank" 
        rel="noopener noreferrer" aria-label="Github">
          🐙 Github
        </a>
        <a href="https://www.linkedin.com/in/aritesoma-ejuliuwa-b11141231" 
        target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          🔗 LinkedIn
        </a>
        <a href="Https://aritesomaejuliuwa@gmail.com" target="_blank" rel="noopener noreferrer"
        aria-label="Gmail">
          📧 Email
        </a>
        <a href="https://+2348112797432" target="_blank" rel="noopener noreferrer"
        aria-label="Phone">
          📱 Phone
        </a>
      </div>
      <p className="copyright">&copy; 2025 Aritesoma. All rights reserved.</p>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [showCaseStudyYt, setShowCaseStudyYt] = useState(false);

  const handleViewCaseStudy = () => {
    console.log('switching to case study');
    setShowCaseStudy(true);
    setShowCaseStudyYt(false); // Ensure YT is off
};

const handleViewCaseStudyYt = () => {
  console.log('switching to YouTube case study');
  setShowCaseStudyYt(true);
  setShowCaseStudy(false); // Ensure regular case study is off
};

const handleBackToProjects = () => {
  setShowCaseStudy(false);
  setShowCaseStudyYt(false);
};

const handleBackToProjectsYt = () => {
  setShowCaseStudy(false);
  setShowCaseStudyYt(false);
};

return (
  <div className="app-container">
    {showCaseStudy ? (
      <CaseStudy onBackClick={handleBackToProjects} />
    ) : showCaseStudyYt ? (
      <CaseStudyYt onBackClickYt={handleBackToProjectsYt} />
    ) : (
      <>
        <Header />
        <main>
          <HeroSection />
          <Projects
            onViewCaseStudy={handleViewCaseStudy}
            onViewCaseStudyYt={handleViewCaseStudyYt}
          />
          <About />
        </main>
        <Footer />
      </>
    )}
  </div>
);

};
export default App;
