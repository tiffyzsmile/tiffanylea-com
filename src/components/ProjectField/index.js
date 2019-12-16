import React from 'react';
import { Field } from 'react-final-form';
import useProjects from 'hooks/useProjects';

const ProjectField = () => {
  const { getProjects } = useProjects();
  const {
    loading: loadingProjects,
    data: projects,
    error: projectsError
  } = getProjects();

  // may want to remove this completely and make it an autocomplete field
  const projectsOptionList = (projects || []).map(e => {
    return (
      <option key={e.id} value={e.id}>
        {e.name}
      </option>
    );
  });

  return (
    <label htmlFor="project">
      Project
      <Field id="project" name="project.id" component="select">
        {loadingProjects && <option>Loading Projects</option>}
        {projectsError && <option>Error Loading Projects</option>}
        <option />
        {projectsOptionList}
      </Field>
    </label>
  );
};

export default ProjectField;
