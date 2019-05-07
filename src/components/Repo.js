import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, stargazers_count: stars, forks }) => (
  <div className="repo-info">
    <div className="repo-name"><h3>{name}</h3></div>
    <p>
      <i className="fa fa-star" />{stars}
      <i className="fa fa-code-fork" />: {forks}
    </p>
  </div>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired
};

export default Repo;
