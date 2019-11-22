import React from 'react';
import './styles.css';

const socialIconStyle = {
  float: 'right',
  backgroundColor: '#fff',
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
            <img alt="GitHub" src="/images/icons/github.png" />
          </a>
          <a
            href="http://www.linkedin.com/in/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img alt="Linked In" src="/images/icons/linkedIn.png" />
          </a>
          <a
            href="http://twitter.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img alt="Twitter" src="/images/icons/twitter.png" />
          </a>
          <a
            href="https://www.facebook.com/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <img alt="Facebook" src="/images/icons/facebook.png" />
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
