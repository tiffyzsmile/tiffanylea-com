import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'react-final-form';

const DateField = ({
  name,
  label,
  showMonthDropdown,
  showYearDropdown,
  dropdownMode,
  dateFormat
}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          render={({ input }) => {
            return (
              <ReactDatePicker
                {...input}
                selected={input.value}
                dateFormat={dateFormat}
                showMonthDropdown={showMonthDropdown}
                showYearDropdown={showYearDropdown}
                dropdownMode={dropdownMode}
                style={{ display: 'block' }}
              />
            );
          }}
        />
      </label>
    </div>
  );
};

DateField.defaultProps = {
  name: 'date',
  label: 'Date:',
  showMonthDropdown: true,
  showYearDropdown: true,
  dropdownMode: 'select',
  dateFormat: 'yyyy-MM-dd'
};

DateField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  dropdownMode: PropTypes.string,
  dateFormat: PropTypes.string
};

export default DateField;
