import React from 'react';
import './styles.css';

const socialIconStyle = {
  float: 'right',
  maxWidth: '30px',
  maxHeight: '30px',
  marginLeft: '5px'
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="setWidth">
        <div>
          <a
            href="https://github.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img
              style={{ width: '100%' }}
              alt="GitHub"
              src="/images/logos/github__logo-icon.svg"
            />
          </a>
          <a
            href="http://www.linkedin.com/in/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img
              style={{ width: '100%' }}
              alt="Linked In"
              src="/images/logos/linked-in__logo-icon.svg"
            />
          </a>
          <a
            href="http://twitter.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img
              style={{ width: '100%' }}
              alt="Twitter"
              src="/images/logos/twitter__logo-icon.svg"
            />
          </a>
          <a
            href="https://www.facebook.com/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img
              style={{ width: '100%' }}
              alt="Facebook"
              src="/images/logos/facebook__logo-icon.svg"
            />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Tiffany Lea May
        </p>
      </div>
    </footer>
  );
};

export default Footer;
