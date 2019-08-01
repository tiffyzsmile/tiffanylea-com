import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PropTypes from 'prop-types';
import './styles.css';

const Page = ({ children, title, description, fullWidth }) => {
  return (
    <div className="page">
      <Helmet>
        <title>Tiffany Lea May | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <div className={`content ${fullWidth ? 'fullWidth' : 'setWidth'}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
Page.defaultProps = {
  title: 'Full Stack Javascript Engineer',
  description: 'portfolio website ',
  fullWidth: false
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default Page;
