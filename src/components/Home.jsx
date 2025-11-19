import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-detail">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chamara Perera
        </motion.h1>

        <h2>
          I’m a{" "}
          <Typewriter
            words={["Web Developer", "UI/UX Designer", "Interactive Designer", "Mobile App Developer"]}
            loop
            cursor
          />
        </h2>

        <p>
          I specialize in creating innovative digital solutions with expertise in full-stack
          development, UI/UX design, and interactive animations.Passionate about solving real-world problems through technology.
        </p>
        <div className="download-social">
          <a href="/src/Chamara Perera CV.pdf" download className="btn">
            <i className="ri-download-line"></i> Download CV
          </a>
          <div className="social-icons">
            <a href="https://github.com/Chamaracperera"><i className="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/chamara-perera-b832762b7"><i className="ri-linkedin-fill"></i></a>
            <a href="https://x.com/wchamaraask"><i className="ri-twitter-x-fill"></i></a>
            <a href="https://www.instagram.com/cha_mara__"><i className="ri-instagram-fill"></i></a>
            <a href="mailto:wchamaraask@gmail.com"><i className="ri-mail-fill"></i></a>
            <a href="https://wa.me/94766980626?text=Hello%20Chamara%2C%20I%27d%20like%20to%20contact%20you%20about%20your%20portfolio.">
                <i className="ri-whatsapp-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <img src="/src/photo.png" alt="Chamara Perera" />
        </div>
      </div>
    </section>
  );
}
