import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Certificates() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="certificcations">
      <h2 data-aos="fade-down">Certificates</h2>

      <div className="certificates-grid">
        {/* Certificate Card 1 */}
        <div className="certificate-card">
          <div className="certificate-card-inner" data-aos="zoom-in" data-aos-delay="100">
            <a href="https://www.linkedin.com/posts/chamara-perera-b832762b7_webdev-fullstack-frontabrendabrwebdevelopment-activity-7318694508563496960-eF9Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwJLhMBqQrheZjOj_ImgYYoCveTbaL-Fk4" target="_blank" rel="noopener noreferrer">
                <img src="src/cert1.jpg" alt="Full Stack" />
            </a>
            <h3>Trainee - Full Stack Developer</h3>
            <p><strong>University of Moratuwa</strong></p>
            <p>(Ongoing - 4 Stages Completed)</p>

            {/* Tooltip / popup */}
            <div className="popup-tooltip">
              <strong>Completed Stages:</strong>
              <ul>
                <li>Python for Beginners ✔️</li>
                <li>Web Design for Beginners ✔️</li>
                <li>Python Programming ✔️</li>
                <li>Front-End Web Development ✔️</li>
                <li>Server-side Web Programming ■□□□□ 20%</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Certificate Card  2*/}
        <div className="certificate-card">
          <div className="certificate-card-inner" data-aos="zoom-in" data-aos-delay="100">
            <a href="https://www.linkedin.com/in/chamara-perera-b832762b7/" target="_blank" rel="noopener noreferrer">
                <img src="src/cert3.jpg" alt="Cisco certifications" />
            </a>
            <h3>Cisco certifications</h3>
            <p><strong>Cisco Networking Academy</strong></p>
            <p>2025</p>

            {/* Tooltip / popup */}
            <div className="popup-tooltip">
              <strong>Completed certifications: </strong>
              <ul>
                <li>Introduction to Cybersecurity ✔️</li>
                <li>Cybersecurity Essentials ✔️</li>
                <li>IT Essentials ✔️</li>
                <li>CCNA: Introduction to Networks✔️</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certificate Card 3 */}
        <div className="certificate-card">
          <div className="certificate-card-inner" data-aos="zoom-in" data-aos-delay="150">
            <a href="https://www.credly.com/badges/739ceed0-b599-48ae-91e0-83d2ce620342/public_url" target="_blank" rel="noopener noreferrer">
                <img src="src/cert2.png" alt="AWS Badge" />
            </a>
            <h3>Cloud Foundations - Training Badge</h3>
            <p><strong>Amazon Web Services</strong> </p>
            <p>June 25, 2024</p>
            <div className="popup-tooltip">
              <ul>
                <li><strong>AWS Academy Graduate - Cloud Foundations - Training Badge</strong><br/>
                    Issued by Amazon Web Services Training and Certification ✔️</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Certificate Card 4 */}
        <div className="certificate-card">
          <div className="certificate-card-inner" data-aos="zoom-in" data-aos-delay="150">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="src/cert4.jpg" alt="Figma" />
            </a>
            <h3>Figma Certification</h3>
            <p><strong>DP Education</strong> </p>
            <p>(Ongoing)</p>
            <div className="popup-tooltip">
              <ul>
                <li><strong>Figma Certification Course</strong><br/>
                    Issue by DP Education ⏳ </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
