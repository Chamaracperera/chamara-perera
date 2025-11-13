import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkewook", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("✅ Thank you for your message! I’ll get back to you soon.");
        form.reset();
      } else {
        alert("❌ There was a problem sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("⚠️ Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact">
      <h2 data-aos="fade-down">Get In Touch</h2>
      <div className="contact-container" data-aos="fade-up">
      <div class="contact-info">
        <p><i class="ri-mail-fill"></i> <a href="mailto:wchamaraask@gmail.com">wchamaraask@gmail.com</a></p>
        <p><i class="ri-phone-fill"></i> <a href="tel:+94766980626">+94 76 698 0626</a></p>
        <p><i class="ri-map-pin-fill"></i> Colombo, Sri Lanka</p>
      </div>
      
      <div className="contact-divider"></div>
       <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
