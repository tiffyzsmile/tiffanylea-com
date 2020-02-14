import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = ({ isAdmin }) => {
  return (
    <header>
      <div className="header">
        <h1>
          <Link to="/" className="logo">
            Tiffany Lea May
          </Link>
        </h1>
      </div>

      <nav>
        <div className="topNav">
          <ul className="nav">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            {/* <li> */}
            {/*  <Link to="/skills">Skills</Link> */}
            {/* </li> */}
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {isAdmin && (
          <div className="adminNav">
            <ul className="nav">
              <li>
                <Link to="/admin/projects">Projects</Link>
              </li>
              <li>
                <Link to="/admin/employers">Employers</Link>
              </li>
              <li>
                <Link to="/admin/clients">Clients</Link>
              </li>
              <li>
                <Link to="/admin/tags">Tags</Link>
              </li>
              <li>
                <Link to="/admin/taggedprojects">Tagged Projects</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

Header.defaultProps = {
  isAdmin: false
};

Header.propTypes = {
  isAdmin: PropTypes.bool
};

export default Header;
