import PropTypes from 'prop-types';
import React from 'react';

export default function LayoutWithHeader({ children }) {
  return (
    <div className="container">
      { children}
    </div>
  );
}

LayoutWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
