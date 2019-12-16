import React from 'react';
import { Field } from 'react-final-form';

const CategoryField = () => {
  return (
    <label htmlFor="category">
      Category
      <Field id="category" name="category" component="select">
        <option>Industry</option>
        <option>Language</option>
        <option>Project Type</option>
        <option>User Interface (UI)</option>
        <option>User Experience (UX)</option>
        <option>Data</option>
        <option>CMS</option>
        <option>E-Commerce</option>
        <option>Server</option>
        <option>Analytics</option>
        <option>Tooling</option>
        <option>AWS</option>
        <option>Devops</option>
        <option>Role</option>
        <option>Library</option>
        <option>Framework</option>
        <option>Software</option>
      </Field>
    </label>
  );
};

export default CategoryField;
