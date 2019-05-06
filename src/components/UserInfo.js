import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ login, name, bio }) => (
  <div id="user-info">
    <p><i>@{login}</i></p>
    <h1>{name || 'No name available!'}</h1>
    <p>{bio || 'No bio to show...'}</p>
  </div>
);

UserInfo.propTypes = {
  login: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
};

UserInfo.defaultProps = {
  login: '',
  name: '',
  bio: ''
};

export default UserInfo;

