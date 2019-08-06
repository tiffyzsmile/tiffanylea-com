import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="setWidth">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Tiffany Lea May
        </p>
      </div>
    </footer>
  );
};

export default Footer;
