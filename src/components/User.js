import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import ReposList from './ReposList';
import UserInfo from './UserInfo';

const User = ({ user }) => {
  if (!user) return null;
  const { avatar, repos, ...userInfo } = user;

  return (
    <Fragment>
      <div id="user">
        {
            avatar
            && <Avatar avatar={avatar} />
          }
        <UserInfo {...userInfo} />
      </div>
      <ReposList repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

User.defaultProps = {
  user: null
};

export default User;
