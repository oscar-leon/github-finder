function userData(data) { // eslint-disable-line
  const name = data.name || 'No name available!';
  const { login } = data;

  const bio = data.bio || 'No bio to show...';
  const avatar = data.avatar_url;

  const userInfo = document.getElementById('user-info');
  const dataLogin = `<p><i>@${login}</i></p></div>`;
  const fullName = `<h1>${name}</h1>`;
  const userBio = `<p>${bio}</p>`;

  document.getElementById('user-avatar').setAttribute('src', avatar);

  userInfo.innerHTML = dataLogin + fullName + userBio;
}
