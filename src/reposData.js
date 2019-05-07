function reposData(data) { // eslint-disable-line
  const repoInfo = document.getElementById('repos');
  let repoHtml = '<h3>Repositories</h3>';

  data.forEach((repo) => {
    const repoName = `<div class="repo-name"><h3>${repo.name}</h3></div>`;
    const repoStars = `<i class="fa fa-star"></i>:${repo.stargazers_count}`;
    const repoForks = ` <i class="fa fa-code-fork"></i>:${repo.forks}`;
    const repoCont = `<div class="repo-info">${repoName}<p>${repoStars}${repoForks}</p></div>`;

    repoHtml += repoCont;
  });

  repoInfo.innerHTML = repoHtml;
}
