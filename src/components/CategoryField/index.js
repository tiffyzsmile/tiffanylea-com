import React from 'react';
import { Field } from 'react-final-form';

const CategoryField = () => {
  return (
    <label htmlFor="category">
      Category
      <Field id="category" name="category" component="select">
        <optgroup label="Industries">
          <option>Real Estate</option>
          <option>E-Commerce</option>
          <option>Higher Ed</option>
          <option>Manufacturing</option>
          <option>Automotive</option>
          <option>Attorneys/Law Firms</option>
          <option>Financial</option>
          <option>Medical Supplies</option>
          <option>Utilities</option>
          <option>Tourism</option>
          <option>Religious</option>
          <option>Global</option>
          <option>Non-profits</option>
        </optgroup>
        <option>Languages</option>
        <option>Project Types</option>
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
        <option>Roles</option>
        <option>Libraries</option>
        <option>Frameworks</option>
        <option>Software</option>
      </Field>
    </label>
  );
};

export default CategoryField;
