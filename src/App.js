import React, { Component } from 'react';
import gitService from './services/requestGit';
import BASE_API_ENDPOINT from './constants';
import User from './components/User';

class App extends Component {
  state = {
    input: ''
  }

  updateState = (value) => {
    this.setState({
      ...value
    });
  }

  handleChange = (e) => {
    const { value: input } = e.target;
    this.updateState({ input });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { input: user } = this.state;
    const userUrl = `${BASE_API_ENDPOINT}/users/${user}`;
    const reposUrl = `${userUrl}/repos`;

    this.handleError({ clean: true });
    this.fetchData(userUrl, 'user');
    this.fetchData(reposUrl, 'repo');
  }

  fetchData = (uri, handler) => {
    const handlers = {
      user: this.handleUserData,
      repo: this.handleRepoData
    };

    gitService(uri)
      .then(handlers[handler])
      .catch(this.handleError);
  }

  handleError = ({ clean }) => {
    const error = 'Does not exist';

    this.updateState({
      user: null,
      error: {
        data: clean ? !clean : error,
        class: 'error'
      }
    });
  }

  handleUserData = (data) => {
    const {
      login,
      name,
      bio,
      avatar_url: avatar = 'No avatar'
    } = data;

    const newState = {
      user: {
        login,
        name,
        bio,
        avatar
      },

    };

    this.updateState(newState);
  }

  handleRepoData = (data) => {
    const { user } = this.state;

    this.updateState({
      user: {
        ...user,
        repos: data
      }
    });
  }

  render() {
    const {
      input, error = {}, ...userProps
    } = this.state;

    return (
      <div className="body-container">
        <form id="search-form">
          <div className="form-container">
            <div className="input-container">
              <input
                value={input}
                type="text"
                placeholder="Search username..."
                name="username"
                required
                onChange={this.handleChange}
                />
            </div>
            <div className="button-container">
              <button id="search-button" type="button" onClick={this.handleSubmit}>Search</button>
            </div>
          </div>
        </form>
        {
          !error.data
          && <User {...userProps} />
        }
        {
          error.data
          && <div id="error" className={error.class} dangerouslySetInnerHTML={{ __html: error.data }} />
        }
      </div>
    );
  }
}

export default App;
