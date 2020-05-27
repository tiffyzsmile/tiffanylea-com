import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { Field } from 'react-final-form';

const styles = {
  arrayFieldWrap: {
    display: 'flex',
    marginLeft: '15px'
  },
  arrayFieldInput: {
    marginBottom: '5px'
  },
  arrayFieldRemoveButton: {
    marginBottom: '5px',
    cursor: 'pointer'
  }
};

const FeatureItem = ({ name, remove }) => {
  return (
    <div style={styles.arrayFieldWrap}>
      <Field style={styles.arrayFieldInput} name={name} component="input" />
      <Button style={styles.arrayFieldRemoveButton} onClick={() => remove()}>
        x
      </Button>
    </div>
  );
};

FeatureItem.defaultProps = {};

FeatureItem.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
};

export default FeatureItem;
