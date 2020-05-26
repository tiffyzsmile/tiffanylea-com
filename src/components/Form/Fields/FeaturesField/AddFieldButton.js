import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const styles = {
  arrayFieldAddButton: {
    marginBottom: '25px',
    cursor: 'pointer',
    marginLeft: '15px'
  }
};

const AddFieldButton = ({ name, push, linkText }) => {
  return (
    <div key={name}>
      <Button
        type="button"
        style={styles.arrayFieldAddButton}
        onClick={() => {
          push();
        }}
      >
        {linkText}
      </Button>
    </div>
  );
};

AddFieldButton.defaultProps = {
  linkText: 'add new'
};

AddFieldButton.propTypes = {
  name: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  linkText: PropTypes.string
};

export default AddFieldButton;
