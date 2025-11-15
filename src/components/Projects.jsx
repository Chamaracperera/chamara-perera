import { useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaFigma, FaJava, FaJs, FaDatabase, FaCode 
} from 'react-icons/fa';
import { SiFirebase, SiAdobe, SiAndroid } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
      AOS.init({
        duration: 1000,   // animation duration
        once: false,      // animate every scroll
        mirror: true,     // animate on scroll up
      });
    }, []);
  return (
    <section id="projects">
      <h2 data-aos="fade-down">Projects</h2>

      {/* Web Projects */}
      <h3 className="category-title" data-aos="fade-right" data-aos-delay="200">Web Projects</h3>
      <div className="projects-grid" data-aos="fade-up" data-aos-delay="400">
        {/* QR-Based Attendance System */}
        <div className="project-card">
          <img src="/src/project1.png" alt="QR-Based Attendance System" />
          <h3>QR-Based Attendance System</h3>
          <p>A digital attendance solution using QR code scanning technology with real-time tracking and reporting</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="HTML"><FaHtml5 /></div>
            <div className="tech-item" data-tooltip="CSS"><FaCss3Alt /></div>
            <div className="tech-item" data-tooltip="JavaScript"><FaJs /></div>
            <div className="tech-item" data-tooltip="Firebase"><SiFirebase /></div>
            <div className="tech-item" data-tooltip="SQL"><FaDatabase /></div>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Chamaracperera/Attendance-Marking-System.git" className="btn project-btn">View Project</a>
            <a href="https://youtu.be/V6OgCaox4Ps" className="btn project-btn">View Demo</a>
          </div>
        </div>

        {/* Library Management System */}
        <div className="project-card">
          <img src="/src/project2.png" alt="Library Management System" />
          <h3>Library Management System</h3>
          <p>Comprehensive system for managing book inventory, member registrations, and loan tracking</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="HTML"><FaHtml5 /></div>
            <div className="tech-item" data-tooltip="CSS"><FaCss3Alt /></div>
            <div className="tech-item" data-tooltip="JavaScript"><FaJs /></div>
            <div className="tech-item" data-tooltip="SQL"><FaDatabase /></div>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Chamaracperera/LMS.git" className="btn project-btn">View Project</a>
            <a href="https://youtu.be/RlZfk7MaC6c" className="btn project-btn">View Demo</a>
          </div>
        </div>
        
      </div>

      {/* UI/UX Design Projects */}
      <h3 className="category-title" data-aos="fade-right" data-aos-delay="100">UI/UX Design</h3>
      <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
        {/* FoT Live UI Design */}
        <div className="project-card">
          <img src="/src/project4.png" alt="FoT Live UI Design" />
          <h3>FoT Live UI Design</h3>
          <p>A news and updates platform for the Faculty of Technology, University of Colombo.</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="Figma"><FaFigma /></div>
          </div>
          <div className="project-buttons">
            <a href="https://www.figma.com/proto/Z8Pes0QsViHrTE7BaB3OGb/FoT-Live-app-android?node-id=7-126&p=f&t=ocqHrX8jR1e4L3Tw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=45%3A27" className="btn project-btn">View Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/src/project5.png" alt="Elephat House Beverage" />
          <h3>Elephat House Beverage</h3>
          <p>A crisp, colorful Figma design for Elephant House Beverages with a refreshing user experience.</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="Figma"><FaFigma /></div>
          </div>
          <div className="project-buttons">
            <a href="https://www.figma.com/proto/BEOyAYhNvymRlUtEVTCTwt/Elephant-House-Drinks?node-id=1-123&p=f&t=i7EAhqJOo6A9hoLi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A123" className="btn project-btn">View Demo</a>
          </div>
        </div>
      </div>

      {/* Mobile / Android Projects */}
      <h3 className="category-title" data-aos="fade-right" data-aos-delay="100">Mobile / Android Projects</h3>
      <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
        {/* FoT Live App */}
        <div className="project-card">
          <img src="/src/project4.png" alt="FoT Live App"/>
          <h3>FoT Live Mobile APP</h3>
          <p>A news and updates platform for the Faculty of Technology, University of Colombo.</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="Android Studio"><SiAndroid /></div>
            <div className="tech-item" data-tooltip="Firebase"><SiFirebase /></div>
            <div className="tech-item" data-tooltip="Kotlin"><FaCode /></div>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Chamaracperera/newsapp.git" className="btn project-btn">View Project</a>
            <a href="https://www.figma.com/proto/Z8Pes0QsViHrTE7BaB3OGb/FoT-Live-app-android?node-id=7-126&p=f&t=ocqHrX8jR1e4L3Tw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=45%3A27" className="btn project-btn">View Demo</a>
          </div>
        </div>
      </div>

      {/* Adobe Animate / Interactive Projects */}
      <h3 className="category-title" data-aos="fade-right" data-aos-delay="100">Interactive / Animation</h3>
      <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
        {/* The Animal Kingdom Explorer */}
        <div className="project-card">
          <img src="/src/project3.png" alt="Animal Kingdom Explorer"/>
          <h3>The Animal Kingdom Explorer</h3>
          <p>Interactive website using Adobe Animate to explore various animal species and their details.</p>
          <div className="project-tech">
            <div className="tech-item" data-tooltip="Adobe Animate"><SiAdobe /></div>
          </div>
          <div className="project-buttons">
            <a href="https://youtu.be/CwpoBwJBdIk" className="btn project-btn">View Demo</a>
          </div>
        </div>
      </div>

    </section>
  );
}
