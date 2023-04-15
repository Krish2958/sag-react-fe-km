import React, { forwardRef } from 'react';
import { FormCheck } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import './Checkbox.css';
import { useState } from 'react';

const Checkbox = forwardRef(({ label, children }, ref) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    // onChange && onChange(isChecked);
  };

  return (
    <FormCheck>
      <FormCheck.Label className=".sag-checkbox__label">
        <FormCheck.Input
          type="checkbox"
          label={label}
          checked={checked}
          onChange={handleCheckboxChange}
          ref={ref}
          className="sag-checkbox"
        />
        {children}
      </FormCheck.Label>
    </FormCheck>
  );
});

Checkbox.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};

export default Checkbox;
