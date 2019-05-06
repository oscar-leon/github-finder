import React, { useState } from 'react';
import User from './components/User';
import fetchData from './actions/fetchData';
import ErrorComponent from './components/ErrorComponent';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [store, setStore] = useState({});

  function handleChange(e) {
    const { value } = e.target;
    setUserInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetchData(userInput)
      .then(setStore);
  }

  const { error, ...userProps } = store;

  return (
    <div className="body-container">
      <form id="search-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="input-container">
            <input
                value={userInput}
                type="text"
                placeholder="Search username..."
                name="username"
                required
                onChange={handleChange}
                />
          </div>
          <div className="button-container">
            <button id="search-button" type="button" onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </form>
      {
          error ? <ErrorComponent error={error} /> : <User {...userProps} />
        }
    </div>
  );
};

export default App;
