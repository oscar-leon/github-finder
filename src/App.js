import React, { Fragment } from 'react';

const App = () => (
  <Fragment>
    <form action="" id="search-form">
      <div className="form-container">
        <div className="input-container">
          <input type="text" placeholder="Search username..." name="username" required />
        </div>
        <div className="button-container">
          <button id="search-button">Search</button>
        </div>
      </div>
    </form>

    <div id="user">
      <div id="user-img">
        <img id="user-avatar" src="" alt="" />
      </div>
      <div id="user-info" />
    </div>
    <div id="repos" />
    <div id="error" />
  </Fragment>
);

export default App;
