import React, { useState } from "react";
import "./CaseStudyYt.css";

// Reusable Header Component
const Header = ({ onBackClickYt }) => {
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
          <button  onClick={onBackClickYt} className="cta-button">Home</button>
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
  <section className="hero-section-cs">
    <div className="container hero-container">
      
      <div className="hero-content">
        <h1 className="hero-title">
          A UX Re-Design for YouTube<span className="highlight2"> Shorts </span>  
           Desktop View
        </h1>
        <p className="hero-subtitle">
          This project is all about attempting to enhance the YouTube Shorts experience for desktop users by 
        introducing an immersive, intuitive, and visually engaging interface.
        </p>
      </div>
      <div className="hero-image-container">
        <img
          src="/fpytui.png"
          alt="Business management illustration"
          className="hero-image1"
        />
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
            The YouTube <span className="highlight1">Shorts</span> Page
          </h1>
          <p className="project-subtitle">
            I designed the main Shorts page to reflect the feedback from
            user interviews. The layout is optimized to reduce whitespace,
            enhance video visibility, and introduce a "Suggested Videos"
            section to facilitate content discovery also helping the Creator 
            Community. The design aims to create
            a more engaging and user-friendly experience for desktop users.
         </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/fpytui.png" alt="My profile" className="textpic-image" />
        </div>
      </div>  
      
      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/ytuihmlk.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            Familiar <span className="highlight1"> Button </span> Interaction
          </h1>
          <p className="project-subtitle">
            I redesigned the interactive buttons to mirror the mobile experience.
            The current black-on-white gave the impression that the buttons had already been engaged with
            for frequent mobile users. By aligning the desktop button design with the mobile version, I aimed to
            create a more consistent user experience across platforms. The updated design 
            transforms from white to black upon interaction, providing clear and familiar 
            feedback thus, reducing cognitive friction.
          </p>
        </div>
        
      </div>

      <div className="container project-container">    
        <div className="project-content">
          <h1 className="project-title">
           The <span className="highlight1">Comment</span> Section Panel
          </h1>
          <p className="project-subtitle">
            The redesigned comment section retaines 50% of its original layout
            while introducing a more compact and visually appealing design.
            The comment input box is prominently placed at the top, encouraging
            user engagement. Suggested videos were also added below the comments.
            When the comment panel is closed, the suggested videos seamlessly
            integrate into the main Shorts page, ensuring a cohesive browsing experience.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/ytuihmcm.png" alt="My profile" className="textpic-image" />
        </div>
      </div>

      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/ytuihmdes.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            The Video <span className="highlight1">Description</span> Panel
          </h1>
          <p className="project-subtitle">
            Similar to the comment panel, the updated description panel allows the user to 
            both view the video description and explore sugested videos. When the description 
            panel is closed, the layout reverts back to show the full view of the similar 
            video content. 
          </p>
        </div> 
      </div>

      <div className="container project-container">    
        <div className="project-content">
          <h1 className="project-title">
            The Video <span className="highlight1">Remix </span> Panel
          </h1>
          <p className="project-subtitle">
            When the user clicks the remix button, a panel pops up,
            displaying a QR code to be scanned. The panel retains its original easy to navigate,
            with clear labels and iconzs. When the panel is closed, the user is returned to the main Shorts page,
            with the suggested videos still visible beside the video player.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/ytuihmremx.png" alt="My profile" className="textpic-image" />
        </div>
      </div>
      
      <div className="container project-container reverse">
        <div className="project-image-wrapper">
          <img src="/ytuihmsh.png" alt="My profile" className="textpic-image" />
        </div>
        <div className="project-content">
          <h1 className="project-title">
            The <span className="highlight1">Share</span> Video Pop-Up
          </h1>
          <p className="project-subtitle">
            When the user clicks the share button, it turns black to indicate engagement and a pop-up appears,
            displaying various sharing options. When the pop-up is closed, the user is returned to the main Shorts page,
            with the suggested videos still visible beside the video player.
          </p>
        </div> 
      </div>
    </section>
  );
};
/*
const ProjectItem1 = ({ title, highlight, description, imageSrc, reverse, secname, header}) => {
  return (
    <section  className={secname}>
      <h1 className="uj-title">
            {header}
      </h1>
    <div className={`container project-container ${reverse ? 'reverse' : ''}`}>
      <div className="project-image-wrapper">
        <img src={imageSrc} alt={title} className="textpic-image" />
      </div>
      <div className="project-content">
        <h1 className="project-title">
          {title} <span className="highlight1">{highlight}</span>
        </h1>
        <p className="project-subtitle">{description}</p>
      </div>
    </div>
  </section>
  );
};
const ProjectItem2 = ({ title, highlight, description, imageSrc, reverse }) => {
  return (
    <div className={`container project-container ${reverse ? 'reverse' : ''}`}>
      
      <div className="project-content">
        <h1 className="project-title">
          {title} <span className="highlight1">{highlight}</span>
        </h1>
        <p className="project-subtitle">{description}</p>
      </div>
      <div className="project-image-wrapper">
        <img src={imageSrc} alt={title} className="textpic-image" />
      </div>
    </div>
  );
};
*/

//pic down, text up
function TextPic({ title, highlight, subtitle, imageDesktop, 
  imageMobile, altText, imageClass, secid }) {
  return (
    <section id={secid} className="textpic-section">
      <div className="container textpic-container">
        <div className="textpic-content">
          <h1 className="textpic-title">
            {title} <span className="highlight1">{highlight}</span>
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
    <section className="sidebysidetxt-section">
      <div className="container sidebysidetxt-container"></div>
        <div className="sidebysidetxt-content">
          
          <div className="sidebysidetxt-block">
            <h3>User Interview and Needs</h3>
            <p className="textpic-subtitle">
              A total of five users were interviewed, and 80% 
              reported rarely using desktop systems to watch YouTube Shorts. 
              Their main discomforts stemmed from the overwhelming white 
              space on screen and the additional effort required to dive into
               a specific content rabbit hole. Interestingly, one user noted
             that the desktop "like" button interaction gave the impression that 
             the video had already been liked, creating confusion around past engagement.

            </p>
          </div>
          <div className="sidebysidetxt-block">
            <h3>User Pain Points</h3>
            <p className="textpic-subtitle">
              <i>"When I attempted to like the video I was watching, for a moment,
                I thought that I had already done so"</i>
              <br/> <b>~ Junis</b>
              <br/><br/>
              <i>"I often found myself squinting at the screen to get a better
                view. I also want to keep watching similar content without distractions"</i> <br/> 
                <b>~ Temi</b>
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
              This project has been a valuable learning experience in deepening my understanding of user needs and
              translating them into effective design solutions. It reinforced the importance of user-centered design principles,
              especially in creating interfaces that are both functional and visually appealing. The feedback from user testing
              highlighted the significance of iterative design and the need to continuously refine and improve based on real user interactions.
              Overall, this project has enhanced my skills in UX design, prototyping, and user research, and I look forward to applying these lessons in future projects.
            </p>
          </div>
          <div className="sidebysidetxt-block">
            <h3>Future Improvements</h3>
            <p className="textpic-subtitle">
              Moving forward, I plan to further refine the YouTube Shorts desktop experience by creating a high-fidelity prototype.
              <br/><br/>Additionally, I aim to conduct more extensive user testing to gather deeper insights and validate the effectiveness of the design changes.
              <br/><br/>Overall, my goal is to continue enhancing the user experience by staying attuned to user feedback and industry best practices.
            </p>
          </div>
        </div>
    </section>
    );
}

const ThreeGrid = () => {
    return (
      <section className="threegrid-section">
        <div className="container threegrid-container">
            <h1 className="textpic-title"> Solution Goals
          </h1>
          <div className="threegrid-content">
            
            <div className="threegrid-block">
              <h3>Reduce Whitespace</h3>
              <p className="textpic-subtitle">
                To enhance visual engagement and minimize visual imbalance, excessive 
                whitespace in the desktop layout was strategically reduced. By tightening margins, optimizing 
                content alignment, and enlarging video scaling, the redesign delivers 
                a more immersive viewing experience while maintaining clarity and usability.
              </p>
            </div>

            <div className="threegrid-block">
              <h3>Suggest Similar Content</h3>
              <p className="textpic-subtitle">
                This adjustment not only enhanced content focus but also freed 
                up valuable screen real estate. The reclaimed space was effectively 
                utilized to introduce a “Suggested Videos” module, enabling seamless 
                content discovery and encouraging deeper user interaction without 
                overwhelming the interface.
              </p>
            </div>

            <div className="threegrid-block">
              <h3>Fix Button Interaction</h3>
              <p className="textpic-subtitle">
                To reduce cognitive friction, the desktop button was redesigned 
                to mirror its mobile counterpart. This change leverages users' 
                existing familiarity with mobile interactions, creating a more 
                intuitive and consistent experience across platforms. The 
                updated button fosters quicker recognition and clearer engagement.

              </p>
          
            </div> 
          </div>
        </div>
      </section>
    );
};


// Main casestudy Component
const CaseStudyYt = ({ onBackClickYt }) => {
  return (
    <div className="app-container">
      <Header onBackClickYt={onBackClickYt}/>
      <main>
        <HeroSection />
         <Textonly
          secid="Problem"
          title="Problem Statement" 
          subtitle="'After primarily using YouTube Shorts 
                    on mobile devices, users reported 
                    a level of dissatisfaction and a less engaging 
                    experience when switching to the desktop view '"
          titleClass="textpic-title"
          subtitleClass="textonly-subtitle"
        />

        <SideBySideText />
         <Textonly
          secid="Solution"
          title="Solution" 
          subtitle="'The propsed solution was thoughtfully designed based 
          on direct user feedback. Drawing insights from the interviews, 
          I took the liberty to restructure the YouTube Shorts desktop layout to 
          better align with user expectations and address their specific pain points.



            '"
          titleClass="textpic-title"
          subtitleClass="textonly-subtitle"
        />
        <ThreeGrid />
       
        <TextPic
            title="Sketches And"
            secid="Ideate"
            highlight="Iterations"
            subtitle="Initial sketches were created to explore various layout options
                and design elements. These sketches served as a foundation for 
                brainstorming and visualizing different approaches to enhance 
                the YouTube Shorts desktop experience."
            imageDesktop="/ytsked.png"
            imageMobile="/ytske.png"
            altText=" project image"
            imageClass="textpic-image"
        />
        <TextPic
            title="Wireframes"
            highlight="Proposed"
            subtitle="This wireframe diagram provides a visual blueprint 
                of the redesigned YouTube Shorts desktop interface. It outlines 
                the structural layout, key interactive elements, and content placement 
                strategies aimed at enhancing user engagement."
            imageDesktop="/ytwfm.png"
            imageMobile="/ytwfm.png"
            altText=" project image"
            imageClass="textpic-image"
        />
        <Projects />
        <TextPic
            title="High Fidelity"
            highlight="UI Designs"
            subtitle="The wireframes were created using Figma.
                The wireframes were designed to be simple and intuitive, 
                with a focus on usability and accessibility."
            imageDesktop="/fullytui.png"
            imageMobile="/fullytui.png"
            imageClass="textpic-image"
            altText="YouTube project image"
        />
        
        <TextPic
            title="User Testing and "
            secid="Testing"
            highlight="Validation"
            subtitle="User testing was conducted to gather feedback on the redesigned interface.
                Participants were asked to perform specific tasks and provide feedback on 
                the overall usability and visual appeal of the design. Reports showed that 
                users wanted a full viewing experience on the comments and video description panels.
                The feedback was
                used to make further refinements and improvements to the design."
            imageDesktop="/usertestyt.png"
            imageMobile="/usertestyt.png"
            imageClass="textpic-image"
            altText="YouTube project image"
        />

         <TextPic
            title="Before And "
            highlight="After"
            subtitle="The image below shows a side-by-side comparism of the original desktop view of 
            YouTube Shorts and the updated proposed design. "
            imageDesktop="/bandaf.png"
            imageMobile="/bandafmob.png"
            imageClass="textpic-image"
            altText="YouTube project image"
        />
        <SideBySideText2 />

        
      </main>
    </div>
  );
};

export default CaseStudyYt;
