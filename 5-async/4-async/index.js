async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const result = await fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('error');
    })
    .catch(error => console.error(error));
  document.writeln(result.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
