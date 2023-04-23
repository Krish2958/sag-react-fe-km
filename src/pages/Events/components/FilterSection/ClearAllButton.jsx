import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ClearAllButton.css';

const ClearAllButton = ({ onClick }) => {
  return (
    <Button className="filter-clear-all" onClick={onClick}>
      Clear All
    </Button>
  );
};

ClearAllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearAllButton;
