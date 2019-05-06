import React, { Component } from 'react';
import gitService from './services/requestGit';

class App extends Component {
 state = {
   input: '',
   userHtml: '',
   avatar: '',
   repos: '',
   error: {}
 }

  handleChange = (e) => {
    const { value: input } = e.target;

    this.setState({
      input
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.state.input;

    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    gitService(userUrl)
      .then(this.handleUserData)
      .catch(this.handleError);

    gitService(reposUrl)
      .then(this.handleRepoData)
      .catch(this.handleError);
  }

  handleError = () => {
    const error = 'Does not exist';

    this.setErrorData({
      data: error,
      class: 'error'
    });
  }

  setErrorData = (error) => {
    this.setState({
      error
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

    this.setUserData(userHTML);
    this.setAvatarData(avatar);
  }

  setUserData = (html) => {
    this.setState(
      { userHtml: html }
    );
  }

  setAvatarData = (avatar) => {
    this.setState({
      avatar
    });
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

    this.setRepoData(repoHtml);
  }

  setRepoData = (repos) => {
    this.setState({
      repos
    });
  }

  render() {
    return (
      <div className="body-container">
        <form id="search-form">
          <div className="form-container">
            <div className="input-container">
              <input
              value={this.state.input}
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
            <img id="user-avatar" src={this.state.avatar} alt="" />
          </div>
          <div id="user-info" dangerouslySetInnerHTML={{ __html: this.state.userHtml }} />
        </div>
        <div id="repos" dangerouslySetInnerHTML={{ __html: this.state.repos }} />

        <div id="error" className={this.state.error.class} dangerouslySetInnerHTML={{ __html: this.state.error.data }} />
      </div>
    );
  }
}

export default App;
