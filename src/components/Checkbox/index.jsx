import React from 'react';
import { FormCheck } from 'react-bootstrap';
import './Checkbox.css';
import { PropTypes } from "prop-types"


const Checkbox = ({children}) => {
  return (
    <>
      <FormCheck>
        <FormCheck.Label className="checkbox-text">
          <FormCheck.Input className="sag-checkbox" />
          {children}
        </FormCheck.Label>
      </FormCheck>
    </>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Checkbox;
