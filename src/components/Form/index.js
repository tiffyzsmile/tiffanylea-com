import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Form = ({ status, onSubmit, children, successMessage, errorMessage }) => {
  // if form succesfully submitted return success message
  if (status === 'submitted') {
    return successMessage;
  }

  // else return form
  return (
    <form onSubmit={onSubmit}>
      {status === 'error' && errorMessage}
      {children}
    </form>
  );
};

Form.defaultProps = {
  status: 'not submitted',
  onSubmit: () => {},
  successMessage: <p>Wahoo!</p>,
  errorMessage: <p>Darn!</p>
};

Form.propTypes = {
  status: PropTypes.oneOf(['not submitted', 'submitted', 'error']),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  successMessage: PropTypes.node,
  errorMessage: PropTypes.node
};

export default Form;
