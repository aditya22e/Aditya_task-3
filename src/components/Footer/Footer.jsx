import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faDiscord,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  const socialLinks = [
    { icon: faTwitter, url: 'https://twitter.com/dotcodehack', label: 'Twitter' },
    { icon: faDiscord, url: 'https://discord.gg/dotcodehack', label: 'Discord' },
    { icon: faLinkedin, url: 'https://linkedin.com/company/dotcodehack', label: 'LinkedIn' },
    { icon: faInstagram, url: 'https://instagram.com/dotcodehack', label: 'Instagram' },
  ];

  return (
    <footer style={{backgroundImage: "URL(/hero1.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="footer-content" >
        <p>
          Contact us: <a href="mailto:gdp.rgpv@gmail.com">gdp.rgpv@gmail.com</a>
        </p>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.label}`}
              className="social-icon"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
        <p>© 2025 Growth Driven Pioneers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
