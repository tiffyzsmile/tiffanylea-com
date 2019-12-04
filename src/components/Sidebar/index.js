import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const socialIconStyle = {
    display: 'inline-block',
    maxWidth: '50px',
    maxHeight: '50px',
    margin: '5px'
  };
  return (
    <div>
      <aside className="rightCol">
        <Link to="/reviews">What others say about me &raquo;</Link>
      </aside>
      <aside className="rightCol">
        <h1>Follow</h1>

        <div>
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
        </div>
      </aside>
      <aside className="rightCol">
        <h1>
          <a href="/bookshelf">Bookshelf &raquo;</a>
        </h1>
        <p className="imgGrid imgGrid3">
          <img
            alt="Mobile First (A Book Apart, #6)"
            src="/images/books/mobile-first.jpg"
          />
          <img
            alt="Responsive Web Design"
            src="/images/books/responsive-web-design.jpg"
          />
          <img
            alt="HTML5 For Web Designers"
            src="/images/books/html5-for-web-designers.jpg"
          />
        </p>
      </aside>
    </div>
  );
};

export default Sidebar;
