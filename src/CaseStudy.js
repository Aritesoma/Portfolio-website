import React, { useState } from "react";
import "./CaseStudy.css";

// Reusable Header Component
const Header = ({ onBackClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container nav-container">
        <div className="logo-brand">
          <span className="logo">
            {" "}
            <img src="/Ari.png" alt="logo" />
          </span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#Problem">Problem</a>
          <a href="#Solution">Solution</a>
          <a href="#Ideate">Ideation</a>
          <a href="#Testing">Testing</a>
          <button  onClick={onBackClick} className="cta-button">Home</button>
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
  <section className="hero-section-cs1">
    <div className="container hero-container">
      
        <img
          src="/opening.png"
          alt="Business management illustration"
          className="hero-image2"
        />
      
      <div className="hero-content">
        <h1 className="hero-title">
          A UX Design for the  <span className="highlight">AMCE Meals</span> App
        </h1>
        <p className="hero-subtitle2">
          My Internship project at AMCE Hospital involved designing a mobile app UI to streamline
          the meal ordering process for hospital staff. I worked with engineers and project managers to create 
          a user-oriented interface.
        </p>
      </div>   
    </div>
  </section>
);

// Projects
const Projects = () => {
  return (
    <section id="Project" className="project-section">
      <h1 className="uj-title">
            User <span className="highlight">Journey</span>
      </h1>
      <div className="container project-container ">
        <div className="project-content">
          <h1 className="project-title">
            The Login Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The login flow design incorporates using
            staff already existing official email and password to login. In
            The event that they forget their password, they can contact the I.T
            department to reset it for them. If they do not have an account in
            event they are new staff, they can visit the I.T department to create one.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/loginflow.png" alt="My profile" className="textpic-image" />
        </div>
      </div>  
      
      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/qrcodeflow.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            The QR Code Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The home screen is designed to provide users with quick access to
            essential features and information. The first of this the option to
            directly to the QR code screen to have access to their unique QR code
            that can be scanned at the restaurant to quickly retrieve their order.
            After placing an order, users get a confirmation screen which also shows
            how many tickets they have left.
          </p>
        </div>
        
      </div>

      <div className="container project-container">    
        <div className="project-content">
          <h1 className="project-title">
            The Top-Up Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The top-up flow is designed to be simple and efficient, allowing
            users to quickly make payments to the stated account details via
            bank transfer. After making the payment, users can upload a screenshot
            of the transaction as proof of payment. Once the payment is verified,
            the user's ticket balance is updated accordingly and is taken to the
            QR code screen.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/topupflow.png" alt="My profile" className="textpic-image" />
        </div>
      </div>

      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/menuflow.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            The Menu Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The home screen also offers users the ability to view the menu to 
            eliminate the knowledge gap of being unaware of available food at the
            cafeteria.The menu is organized into categories, making it easy 
            for users to find their desired items.
          </p>
        </div> 
      </div>

      <div className="container project-container">    
        <div className="project-content">
          <h1 className="project-title">
            The Articles Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The app offers articles that provide users with valuable information
            and insights related to health, nutrition, and wellness. These articles
            are curated to keep users informed and engaged, promoting a holistic
            approach to their dining experience. Users can also choose to read more
            similar articles by clicking on the "Read More" button which takes them to
            an external site.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/articlesflow.png" alt="My profile" className="textpic-image" />
        </div>
      </div>
      
      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/historyflow.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            The History Flow <span className="highlight">AMCE</span> Meals
          </h1>
          <p className="project-subtitle">
            The app enables users to track their order history, providing a
            convenient way to review payments made and associated ticket update.
            The order history is presented in a clear and organized manner,
            allowing users to easily find specific payments through the filter
            option.
          </p>
        </div> 
      </div>

      <div className="container project-container">    
        <div className="project-content">
          <h1 className="project-title">
            No Ticket Situation
          </h1>
          <p className="project-subtitle">
            Peradventure a user runs out of tickets 
            and clicks the QR Code button on the home screen,
            they can easily navigate to the top-up screen
            where they can purchase more tickets or can go back to
            the home screen if they are not ready to do so.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/noqr.png" alt="My profile" className="textpic-image" />
        </div>
      </div>


    </section>
  );
};

//pic down, text up
function TextPic({ title, highlight, subtitle, imageDesktop, 
  imageMobile, altText, imageClass, secid }) {
  return (
    <section id={secid} className="textpic-section">
      <div className="container textpic-container">
        <div className="textpic-content">
          <h1 className="textpic-title">
            {title} <span className="highlight">{highlight}</span>
          </h1>
          <p className="textpic-subtitle">{subtitle}</p>
        </div>
        <div className="textpic-image-wrapper">
          <picture>
            <source media="(min-width: 768px)" srcSet={imageDesktop} className="textpic-image" />
            <source media="(max-width: 767px)" srcSet={imageMobile} className="textpic-image" />
            <img src={imageMobile} alt={altText} className={imageClass} />
          </picture>
        </div>
      </div>
    </section>
  );
}

function Textonly ({title, highlight, subtitle, 
  titleClass, subtitleClass, secid}) {
  return (
    <section id={secid} className="textpic-section">
      <div className="container textpic-container">
        <div className="textpic-content">
          <h1 className={titleClass}>
            {title}
          </h1> <br/>
          <p className={subtitleClass}>
            {subtitle} 
          </p>
        </div>
      </div>
    </section>
  );
};

//side by side text
const SideBySideText = () => {
    return (
    <section id="Sidebyside" className="sidebysidetxt-section">
      <div className="container sidebysidetxt-container"></div>
        <div className="sidebysidetxt-content">
          
          <div className="sidebysidetxt-block">
            <h3>User Interview and Needs</h3>
            <p className="textpic-subtitle">
              We conducted five interviews with both clinical and non-clinical 
              staff to uncover pain points in the process. 
              Staff unanimously emphasized the need for a faster, hassle-free way to access 
              meals during busy shifts without physical tickets, payment delays, 
              or manual steps. These insights directly shaped the design of the AMCE Meals app.

            </p>
          </div>
          <div className="sidebysidetxt-block">
            <h3>Business Needs</h3>
            <p className="textpic-subtitle">
              At AMCE, the core value is delivering patient-centered care which is achieved by supporting
               the people who make it possible. 
              <br /><br /><b><i> "Patient-centered care, staff-first policy" </i></b><br /><br />
               By prioritizing staff well-being, 
               AMCE seeks to create an environment where compassionate, efficient care can thrive.

            </p>
          </div>
        </div>
    </section>
    );
}

const SideBySideText2 = () => {
    return (
    <section className="sidebysidetxt-section">
      <div className="container sidebysidetxt-container"></div>
        <div className="sidebysidetxt-content">
          
          <div className="sidebysidetxt-block">
            <h3>Lessons Learned</h3>
            <p className="textpic-subtitle">
              Being a part of this project has been an incredible learning experience.
              working closely with real users to understand their challenges and needs has
               deepened my empathy and sharpened my problem-solving skills. Also working within
               the constraints of a hospital environment has taught me to think creatively and 
               prioritize simplicity and efficiency in design. Patnerning with stakeholders and engineers to align
               business goals with user needs has reinforced the importance of collaboration and 
               communication throughout the design process.
                Overall, this project has reinforced my passion for user-centered design and 
                my commitment to creating solutions that truly make a difference in people's lives.

            </p>
          </div>
          <div className="sidebysidetxt-block">
            <h3>Future Improvements</h3>
            <p className="textpic-subtitle">
              The AMCE Meals app UI is just the beginning. I plan to further refine the design based on user feedback, 
              create high-fidelity prototypes for usability testing, and collaborate with developers to bring the app to life.
              Future iterations will focus on enhancing accessibility, expanding features, and ensuring seamless integration 
              with hospital systems to deliver a truly frictionless meal ordering experience for AMCE staff.
              </p>
          </div>
        </div>
    </section>
    );
}

const ThreeGrid = () => {
    return (
      <section id="ThreeGridSection" className="threegrid-section">
            <h1 className="textpic-title"> Solution Goals
          </h1>
        <div className="container threegrid-container">
          <div className="threegrid-content">
          
            <div className="threegrid-block">
              <h3>Eliminate The Paper-Based Process</h3>
              <p className="textpic-subtitle">
                AMCE operates zero-Paper environment. The solution seeks to 
                replace physical meal tickets with a digital system that eliminates ticket loss and
                mis-management.
              </p>
            </div>

            <div className="threegrid-block">
              <h3>Support Staff Well-being</h3>
              <p className="textpic-subtitle">
                Design a frictionless experience that respects staff time, reduces stress,
                 and fits seamlessly into demanding hospital routines.
              </p>
            </div>

            <div className="threegrid-block">
              <h3>Simplify and Organize Payments</h3>
              <p className="textpic-subtitle">
                Centralize payment tracking and confirmation to ensure transparency, reduce 
                miscommunication, and improve accountability.
              </p>
          
            </div> 
          </div>
        </div>
      </section>
    );
};


// Main casestudy Component
const CaseStudy = ({ onBackClick }) => {
  return (
    <div className="app-container">
      <Header onBackClick={onBackClick}/>
      <main>
        <HeroSection />
         <Textonly
          secid="Problem"
          title="Problem Statement" 
          subtitle="'Following the launch of the new 7-floor hospital and its ground-floor cafeteria, 
            AMCE staff quickly found the manual meal ticketing process burdensome—requiring physical purchases
            and tedious, error-prone payment confirmations that disrupted workflow and efficiency.
            '"
          titleClass="textpic-title"
          subtitleClass="textonly-subtitle"
        />
        <TextPic
            title="Current User Journey"
            highlight="AMCE Meals"
            subtitle="Staff pay online, visit the cashier to show proof, collect paper tickets, and present 
            them to cafeteria servers for meal pickup. The process is slow, manual, and prone to errors, highlighting 
            the need for a streamlined digital solution.
            "
            imageDesktop="/cuf.png"
            imageMobile="/cufamo.png"
            imageClass="cuf-image"
            altText="AMCE Meals project image"
        />
        <SideBySideText />
         <Textonly
          secid="Solution"
          title="Solution Statement" 
          subtitle="'With staff well-being at the heart of patient-centered care, I designed 
            user experience for a mobile app solution to streamline meal ordering process—allowing staff to purchase tickets, view 
            menu updates, track usage history, and report issues, all in one seamless experience.
          '"
          titleClass="textpic-title"
          subtitleClass="textonly-subtitle"
        />
        <ThreeGrid />
        <TextPic
            secid="Ideate"
            title="User Flow"
            highlight="Proposed"
            subtitle="We mapped out the core user flow within the AMCE Meals app. 
              The flow prioritizes clarity, speed, and accessibility—guiding users from 
              login to meal redemption. Each screen is designed to 
              support quick decision-making and reduce cognitive load, especially during busy shifts.
               "
            imageDesktop="/ufam1.png"
            imageMobile="/ufamo.png"
            imageClass="textpic-image"
            altText="AMCE Meals project image"
        />
        <TextPic
            title="Sketches"
            highlight="Proposed"
            subtitle="I started with quick sketches to explore layout ideas, user flows, and key
             interactions. These early drafts helped me test assumptions fast and stay flexible. 
             Through multiple iterations, I refined the experience—shaping each screen based on 
             usability goals, and real-world constraints."
            imageDesktop="/amske.png"
            imageMobile="/amskem.png"
            altText="AMCE Meals project image"
            imageClass="textpic-image"
        />
        <TextPic
            title="Wireframes"
            highlight="Proposed"
            subtitle="To translate user needs into a functional interface, 
              I developed low-fidelity wireframes that outline the core 
              structure and flow of the AMCE Meals app. The wireframes were 
              created using Figma."
            imageDesktop="/wfam.png"
            imageMobile="/wfamo.png"
            altText="AMCE Meals project image"
            imageClass="textpic-image"
        />
        <TextPic
            title="User Interface"
            highlight="Design"
            subtitle="Designing for hospital staff means designing for speed, 
            clarity, and zero guesswork. The UI had to feel familiar yet 
            frictionless—like second nature during a busy shift. The color 
            palette draws from AMCE's branding. Clean lines, ample white space,
             and intuitive iconography ensure the interface is easy to scan and navigate."
            imageDesktop="/uiam.png"
            imageMobile="/uio.png"
            imageClass="textpic-image"
            altText="AMCE Meals project image"
        />
        <Projects />
        <TextPic
            title="User Testing and "
            secid="Testing"
            highlight="Validation"
            subtitle="100% of users could not at first glance recognize the navigation menu icons 
             and their functions. To address this, I added text labels below each icon to clarify their purpose.
             Additionally, users wanted direct access to the QR code from the home screen, so I incorporated a 
             prominent QR code button for quick access."
            imageDesktop="/utam.png"
            imageMobile="/utam.png"
            imageClass="textpic-image"
            altText="YouTube project image"
        />
        <TextPic
            title="Final "
            secid="Testing"
            highlight="Design"
            subtitle="Taking all feedback into consideration, I made some changes to the design
                to make it more user-friendly."
            imageDesktop="/finalamui.png"
            imageMobile="/finalamui.png"
            imageClass="textpic-image"
            altText="YouTube project image"
        />
        <SideBySideText2 />
        
      </main>
    </div>
  );
};

export default CaseStudy;
