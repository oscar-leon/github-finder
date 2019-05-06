import React, { Component } from 'react';
import gitService from './services/requestGit';
import BASE_API_ENDPOINT from './constants';

class App extends Component {
 state = {
   input: '',
   error: {}
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

  handleError = () => {
    const error = 'Does not exist';

    this.updateState({
      error: {
        data: error,
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

    const dataLogin = `<p><i>@${login}</i></p></div>`;
    const fullName = `<h1>${name || 'No name available!'}</h1>`;
    const userBio = `<p>${bio || 'No bio to show...'}</p>`;

    const userHTML = dataLogin + fullName + userBio;

    const newState = {
      userHTML,
      avatar
    };

    this.updateState(newState);
  }

  handleRepoData = (data) => {
    let repoHtml = '<h3>Repositories</h3>';

    data.forEach((repo) => {
      const repoName = `<div class="repo-name"><h3>${repo.name}</h3></div>`;
      const repoStars = `<i class="fa fa-star"></i>:${repo.stargazers_count}`;
      const repoForks = ` <i class="fa fa-code-fork"></i>:${repo.forks}`;
      const repoCont = `<div class="repo-info">${repoName}<p>${repoStars}${repoForks}</p></div>`;

      repoHtml += repoCont;
    });

    this.updateState({ repos: repoHtml });
  }

  render() {
    const {
      input, avatar, userHtml, repos, error
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

        <div id="user">
          <div id="user-img">
            <img id="user-avatar" src={avatar} alt="" />
          </div>
          <div id="user-info" dangerouslySetInnerHTML={{ __html: userHtml }} />
        </div>
        <div id="repos" dangerouslySetInnerHTML={{ __html: repos }} />

        <div id="error" className={error.class} dangerouslySetInnerHTML={{ __html: error.data }} />
      </div>
    );
  }
}

export default App;
