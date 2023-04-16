import React from 'react';
import Form from 'react-bootstrap/Form';
import './Checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <Form.Check>
      <Form.Check.Input
        className="sag-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={`checkbox-${label}`}
      />
      <Form.Check.Label
        className="sag-checkbox__label"
        htmlFor={`checkbox-${label}`}
      >
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default Checkbox;
