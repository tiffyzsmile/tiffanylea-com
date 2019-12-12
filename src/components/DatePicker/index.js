import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ name, value, onChange, ...props }) => {
  return (
    <ReactDatePicker
      name={name}
      selected={value}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
      {...props}
    />
  );
};

DatePicker.defaultProps = {
  value: null,
  onChange: () => {}
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func
};

export default DatePicker;
