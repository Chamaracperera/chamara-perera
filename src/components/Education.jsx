import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);


  const education = [
    {
      institution: "University of Colombo",
      period: "2023 - Present",
      degree: "Bachelor of Information and Communication Technology (Honours)",
      logo: "src/uoc.png",
      side: "left"
    },
    {
      institution: "Ananda College, Colombo 10",
      period: "2019-2021",
      degree: "A/L Technology Stream",
      logo: "src/ac.png",
      side: "right"
    },
    {
      institution: "Ananda Shastralaya, Kotte",
      period: "2018",
      degree: "O/L Examination",
      logo: "src/ask.png",
      side: "left"
    }
  ];

  return (
    <section id="education">
      <div className="academic-journey" data-aos="fade-up">
        <h3>Education Journey</h3>
        <div className="timeline-underline"></div>

        <div className="timeline-container">
          {/* Center Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {education.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.side}`}
                data-aos={item.side === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot"></div>

                {/* Education Card */}
                <div className="education-card">
                  <div className="card-header">
                    <div className="institution-logo">
                      <img src={item.logo} alt={item.institution} />
                    </div>
                    <div className="institution-info">
                      <h4 className="institution-name">{item.institution}</h4>
                      <p className="institution-period">{item.period}</p>
                    </div>
                  </div>
                  <p className="degree-info">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}