import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ avatar }) => (
  <div id="user-img">
    <img id="user-avatar" src={avatar} alt="" />
  </div>

);

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Avatar;

