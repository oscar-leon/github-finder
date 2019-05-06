import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ error }) => (
  <div id="error" className="error">
    {error}
  </div>
);

ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorComponent;
