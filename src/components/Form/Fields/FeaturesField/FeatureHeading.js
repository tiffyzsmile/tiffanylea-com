import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Button from 'components/Button';

const styles = {
  arrayFieldWrap: {
    display: 'flex'
  },
  arrayFieldInput: {
    marginBottom: '5px'
  },
  arrayFieldRemoveButton: {
    marginBottom: '5px',
    cursor: 'pointer'
  }
};

const FeatureHeading = ({ name, remove }) => {
  return (
    <div style={styles.arrayFieldWrap}>
      <Field name={name} component="input" style={styles.arrayFieldInput} />
      <Button style={styles.arrayFieldRemoveButton} onClick={() => remove()}>
        x
      </Button>
    </div>
  );
};

FeatureHeading.defaultProps = {};

FeatureHeading.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
};

export default FeatureHeading;
