import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import useTags from 'hooks/useTags';

const TagField = ({ name, label, category, multiple }) => {
  const { getTags, getGroupedTags } = useTags();
  const { loading: loadingTags, error: tagsError } = getTags({});
  const { data } = getGroupedTags({});

  console.log('data NEW FIELD', data);

  const tagsSubOptionList = tags =>
    tags.map(e => {
      if (category === 'all' || category === e.category) {
        return (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        );
      }
      return false;
    });

  const tagsOptionList = Object.keys(data).map(group => {
    const categoryTags = tagsSubOptionList(data[group] || []);
    return <optgroup label={group}>{categoryTags}</optgroup>;
  });

  return (
    <label htmlFor={name}>
      {label}
      <Field
        id={name}
        name={name}
        component="select"
        type="select"
        multiple={multiple}
        size={15}
      >
        {loadingTags && <option>Loading Tags</option>}
        {tagsError && <option>Error Loading Tags</option>}
        {tagsOptionList}
      </Field>
    </label>
  );
};

TagField.defaultProps = {
  label: 'Tags',
  category: 'all',
  multiple: false
};

TagField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  category: PropTypes.string,
  multiple: PropTypes.bool
};

export default TagField;
