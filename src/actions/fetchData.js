import BASE_API_ENDPOINT from '../constants';
import gitService from '../services/gitService';

async function fetchData(user) {
  try {
    const userUrl = `${BASE_API_ENDPOINT}/users/${user}`;
    const reposUrl = `${userUrl}/repos`;

    const userData = await gitService(userUrl);
    const repos = await gitService(reposUrl);

    const {
      login,
      name,
      bio,
      avatar_url: avatar
    } = userData;

    return {
      error: null,
      user: {
        repos,
        login,
        name,
        bio,
        avatar: avatar || 'No avatar'
      }
    };
  } catch (e) {
    console.log(e);

    return {
      user: null,
      error: 'Does not exist'
    };
  }
}

export default fetchData;

