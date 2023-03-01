import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './PageWrapper.css';

const PageWrapper = ({ children }) => {
  return (
    <div className="home-page-wrapper">
      <div className="home-page-wrapper-background">
        {Children.toArray(children)}
      </div>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PageWrapper };
