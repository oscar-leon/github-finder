/* eslint-disable */
document.querySelector('#search-form')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const username = event.target[0].value;
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    requestGit('GET', userUrl, userData, onError);
    requestGit('GET', reposUrl, reposData, onError);

    // Error message
    function onError() {
      const error = 'Does not exist';
      const messageError = document.getElementById('error');

      messageError.innerHTML = error;
      messageError.setAttribute('class', 'error');
    }
  });
