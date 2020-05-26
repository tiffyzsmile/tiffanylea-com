import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';
import FeatureItems from './FeatureItems';
import FeatureHeading from './FeatureHeading';
import AddFieldButton from './AddFieldButton';

const FeaturesField = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <FieldArray name={name}>
          {({ fields }) => {
            const featuresContent = fields.map((featureSet, i) => (
              <div key={`${featureSet}.heading`}>
                <FeatureHeading
                  name={`${featureSet}.heading`}
                  remove={() => fields.remove(i)}
                />
                <FeatureItems name={`${featureSet}.items`} />
              </div>
            ));
            return (
              <div>
                <AddFieldButton
                  name="addNewFeatureSet"
                  push={fields.push}
                  linkText="Add New Set"
                />
                {featuresContent}
              </div>
            );
          }}
        </FieldArray>
      </label>
    </div>
  );
};

FeaturesField.defaultProps = {
  label: 'Features:',
  name: 'features'
};

FeaturesField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
};

export default FeaturesField;
