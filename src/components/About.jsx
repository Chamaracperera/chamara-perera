import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const skills = [
    { icon: "ri-code-box-line", text: "Web Development (HTML, CSS, JavaScript, PHP)" },
    { icon: "ri-palette-line", text: "UI/UX Design (Figma)" },
    { icon: "ri-computer-line", text: "Software Engineering (Python)" },
    { icon: "ri-database-2-line", text: "Database Management (SQL)" },
    { icon: "ri-movie-2-line", text: "Interactive Animation (CSS, JavaScript, HTML5)" },
    { icon: "ri-brush-line", text: "Graphic Design (Adobe Photoshop, Illustrator)" },
    { icon: "ri-brush-line", text: "Mobile App Development (Android Studio, Java | Kotlin)" },
  ];

  return (
    <section id="about">
      <h2 data-aos="fade-down">About Me</h2>
      <div className="about-content" data-aos="fade-up">
        <div className="about-text">
          <p>
            Currently pursuing my Bachelor's in Information & Communication Technology at University of Colombo with expertise in:
          </p>
          <ul>
            {skills.map((skill, index) => (
              <li
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <i className={skill.icon}></i> {skill.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
