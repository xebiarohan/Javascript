const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');


function sendHttpRequest(method, url) {

    const promise = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload  = function() {
            resolve(xhr.response);
        }
        xhr.send();
    });

    return promise;

}

function fetchPosts() {
   sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
        const listOfPosts = JSON.parse(posts);
        
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            listElement.append(postEl);
        }
    });
}


fetchPosts();
