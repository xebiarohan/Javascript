const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
  return fetch(url);
}

function fetchPosts() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
    (posts) => {
      const listOfPosts = JSON.parse(posts);

      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
      }
    }
  );
}

async function fetchPostsUsingAxios() {
  const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(responseData);
}


fetchPosts();
