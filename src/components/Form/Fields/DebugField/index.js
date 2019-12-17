import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const DebugField = ({ values }) => {
  const [showDebug, setShowDebug] = useState();

  const buttonText = showDebug ? 'Hide Debug' : 'Show Debug';

  return (
    <div style={{ padding: '25px 0' }}>
      <Button styleAs="link" onClick={() => setShowDebug(!showDebug)}>
        {buttonText}
      </Button>
      {showDebug && <pre>{JSON.stringify(values, 0, 2)}</pre>}
    </div>
  );
};

DebugField.defaultProps = {
  values: {}
};

DebugField.propTypes = {
  values: PropTypes.shape({})
};

export default DebugField;
