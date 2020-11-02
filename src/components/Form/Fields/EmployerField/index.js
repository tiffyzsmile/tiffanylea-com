import React from 'react';
import { Field } from 'react-final-form';
import useEmployers from 'hooks/useEmployers';

const EmployerField = () => {
  const { getEmployers } = useEmployers();
  const {
    loading: loadingEmployers,
    data: employers,
    error: employersError
  } = getEmployers();

  // may want to remove this completely and make it an autocomplete field
  const employersOptionList = (employers || [])
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
    <label htmlFor="employer">
      Employer
      <Field id="employer" name="employer.id" component="select">
        {loadingEmployers && <option>Loading Employers</option>}
        {employersError && <option>Error Loading Employers</option>}
        <option />
        {employersOptionList}
      </Field>
    </label>
  );
};

export default EmployerField;
