import React from 'react'
import './footer.css'
import { RiHome2Line, RiInformationLine, RiBriefcaseLine, RiContactsLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>© 2023 My L300 portfolio.</p>
      <ul className="footer-links">
        <li><a href="#home"><RiHome2Line /> Home</a></li>
        <li><a href="#About"><RiInformationLine /> About</a></li>
        <li><a href="#services"><RiBriefcaseLine /> Services</a></li>
        <li><a href="#contact"><RiContactsLine /> Contact</a></li>
      </ul>
      <div className="socials">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>

    </div>
  </footer>
  )
}

export default Footer