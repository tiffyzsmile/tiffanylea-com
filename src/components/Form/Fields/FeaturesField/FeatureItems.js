import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';
import AddFieldButton from './AddFieldButton';
import FeatureItem from './FeatureItem';

const FeatureItems = ({ name }) => {
  return (
    <FieldArray name={name} key={name}>
      {({ fields }) => {
        const itemFields = fields.map((item, index) => (
          <FeatureItem
            name={item}
            key={item}
            remove={() => fields.remove(index)}
          />
        ));
        return (
          <div>
            {itemFields}
            <AddFieldButton
              name={`addNewFeatureItem${name}`}
              push={fields.push}
              linkText="Add New Item"
            />
          </div>
        );
      }}
    </FieldArray>
  );
};

FeatureItems.defaultProps = {};

FeatureItems.propTypes = {
  name: PropTypes.string.isRequired
};

export default FeatureItems;
