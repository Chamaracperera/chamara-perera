import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: false,      // animate every scroll
      mirror: true,     // animate on scroll up
    });
  }, []);

  return (
    <section id="services">
      <h2 data-aos="fade-down">Skills</h2>

      {/* Existing service cards */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-card-inner" data-aos="fade-up" data-aos-delay="100">
            <img src="src/UIUX.jpg" alt="Graphic Design" />
            <h3>UI / UX Design</h3>
            <p>Designing intuitive interfaces and engaging user experiences for web and mobile applications.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-inner" data-aos="fade-up" data-aos-delay="200">
            <img src="src/development.avif" alt="Development" />
            <h3>Mobile App Development</h3>
            <p>Custom mobile solutions tailored to your needs.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-inner" data-aos="fade-up" data-aos-delay="300">
            <img src="src/web-design.jpg" alt="Web Design" />
            <h3>Web Design</h3>
            <p>Modern, responsive websites with great UX.</p>
          </div>
        </div>
      </div>

      {/* Languages & Tools Section */}
      <h3 data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '2rem' }}>Languages & Tools</h3>
      <div
  className="tools-icons"
  data-aos="fade-up"
  data-aos-delay="500"
  style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '1rem', justifyContent: 'center' }}
>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" title="HTML5">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" title="CSS3">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" title="JavaScript">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer" title="Node.js">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
  </a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer" title="Python">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
  </a>
  <a href="https://www.java.com" target="_blank" rel="noreferrer" title="Java">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
  </a>
  <a href="https://kotlinlang.org" target="_blank" rel="noreferrer" title="Kotlin">
    <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/>
  </a>
  <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" title="C">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
  </a>
  <a href="https://www.php.net/" target="_blank" rel="noreferrer" title="PHP">
    <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="php" width="40" height="40"/>
  </a>
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" title="MySQL">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
  </a>
  <a href="https://www.figma.com/" target="_blank" rel="noreferrer" title="Figma">
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
  </a>
  
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer" title="Git">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a>
  <a href="https://developer.android.com/studio" target="_blank" rel="noreferrer" title="Android Studio">
    <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" alt="android studio" width="40" height="40"/>
  </a>

  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" title="Firebase">
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
  </a>
    <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer" title="Photoshop">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/>
  </a>

  <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noreferrer" title="Adobe Illustrator">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="illustrator" width="40" height="40"/>
  </a>

  <a href="https://www.figma.com/" target="_blank" rel="noreferrer" title="Figma">
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
  </a>
</div>

    </section>
  );
}
