import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const ReposList = ({ repos }) => {
  if (!repos.length) return null;

  return (
    <div id="repos">
      <h3>Repositories</h3>
      {
        repos.map(repo => <Repo key={repo.id} {...repo} />)
      }
    </div>
  );
};

ReposList.propTypes = {
  repos: PropTypes.array
};

ReposList.defaultProps = {
  repos: []
};

export default ReposList;
