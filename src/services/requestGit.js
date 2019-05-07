import axios from 'axios';

export default function gitService(url) {
  return axios.get(url)
    .then(({ data }) => data)
    .catch(e => console.log('error, que triste', e.response));
}
