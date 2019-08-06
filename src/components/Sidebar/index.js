import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <aside className="rightCol">
        <Link to="/reviews">What others say about me &raquo;</Link>
      </aside>
      <aside className="rightCol">
        <h1>Code</h1>
        <p className="imgGrid imgGrid4">
          <a
            href="https://www.codeschool.com/users/504021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Code School" src="/images/icons/codeschool.png" />
          </a>
          <a
            href="http://www.codecademy.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Code Academy" src="/images/icons/codeacademy.png" />
          </a>
          <a
            href="https://github.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="GitHub" src="/images/icons/github.png" />
          </a>
          <a
            href="http://codepen.io/tiffyzsmile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="CodePen" src="/images/icons/codepen.png" />
          </a>
        </p>
      </aside>
      <aside className="rightCol">
        <h1>Follow</h1>
        <p className="imgGrid imgGrid4">
          <a
            href="https://www.facebook.com/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Facebook" src="/images/icons/facebook.png" />
          </a>
          <a
            href="http://twitter.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Twitter" src="/images/icons/twitter.png" />
          </a>
          <a
            href="http://www.linkedin.com/in/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Linked In" src="/images/icons/linkedIn.png" />
          </a>
          <a
            href="https://plus.google.com/100065966193940166530/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Google Plus" src="/images/icons/googleplus.png" />
          </a>
        </p>
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
