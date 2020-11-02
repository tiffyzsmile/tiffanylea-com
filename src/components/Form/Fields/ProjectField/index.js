import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import useProjects from 'hooks/useProjects';

const ProjectField = ({ name, label, multiple }) => {
  const { getProjects } = useProjects();
  const {
    loading: loadingProjects,
    data: projects,
    error: projectsError
  } = getProjects({});

  // may want to remove this completely and make it an autocomplete field
  const projectsOptionList = (projects || [])
    // Sort list alphabetically by name
    .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
    .map((e) => {
      return (
        <option key={e.id} value={e.id}>
          {e.name}
        </option>
      );
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
      >
        {loadingProjects && <option>Loading Projects</option>}
        {projectsError && <option>Error Loading Projects</option>}
        <option />
        {projectsOptionList}
      </Field>
    </label>
  );
};

ProjectField.defaultProps = {
  label: 'Projects',
  multiple: false
};

ProjectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool
};

export default ProjectField;
