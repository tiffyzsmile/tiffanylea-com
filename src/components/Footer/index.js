import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="setwidth noPadding">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tiffany Lea May
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
