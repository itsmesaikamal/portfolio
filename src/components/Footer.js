import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const footerStyles = {
  backgroundColor: '#282c34',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center',
  position: 'relative',
};

const footerContentStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const nameStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  animation: 'fadeIn 2s ease-out',
};

const navHeaderStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const websiteLogoStyles = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const navMenuStyles = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  gap: '15px',
};

const iconStyles = {
  fontSize: '24px',
  color: '#ffffff',
  transition: 'transform 0.3s ease',
};

const copyrightStyles = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#bbbbbb',
  animation: 'fadeIn 2s ease-out',
};

// Keyframes for animations
const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Footer = () => (
  <footer style={footerStyles}>
    <style>{keyframes}</style>
    <div style={footerContentStyles}>
      <p style={nameStyles}>Sai Kamal</p>
      <nav style={navHeaderStyles}>
        <div style={navHeaderStyles}>
          <p style={websiteLogoStyles}>RA</p>
          <ul style={navMenuStyles}>
            <li>
              <FaLinkedin style={iconStyles} />
            </li>
            <li>
              <FaGithub style={iconStyles} />
            </li>
            <li>
              <FaTwitter style={iconStyles} />
            </li>
          </ul>
        </div>
      </nav>
      <p style={copyrightStyles}>© 2024 Sai Kamal. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
