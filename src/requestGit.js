function requestGit(method, url, onSuccess, onError) { // eslint-disable-line
  // Ajax request with vanilla.js
  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    const { response } = xhr;

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (typeof onSuccess === 'function') {
          onSuccess(response);
        }
      } else if (typeof onError === 'function') {
        onError(response);
      }
    }
  };

  xhr.send(null);
}
