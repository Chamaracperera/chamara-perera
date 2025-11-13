import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animated">
      <a href="#" className="logo">CP</a>
      <nav className={menuOpen ? "navbar active" : "navbar"}>
        <a href="#" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="ri-menu-line"></i>
      </button>
    </header>
  );
}
