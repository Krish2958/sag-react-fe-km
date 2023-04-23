import React from 'react';
import { Button } from 'react-bootstrap';
import './ClearAllButton.css';

const ClearAllButton = ({ onClick }) => {
  return (
    <Button className="filter-clear-all" onClick={onClick}>
      Clear All
    </Button>
  );
};

export default ClearAllButton;
