1. Sending GET request using XMLHttpRequest();

```
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload  = function() {
        console.log(xhr.response);
    }

    xhr.send();

```

2. Sending POST request using XMLHttpRequest

```
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload  = function() {
        console.log(xhr.response);
    }

    xhr.send(JSON.stringify(body));

```

3. Handling errors

```
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload  = function() {
        if(xhr.status > 200 && xhr.status <300>) {
            console.log(xhr.response);
        } else {
            // server error block
            console.log(xhr.response);
        }
        
    }

    xhr.onerror = function() {
        // network error block
        console.log(xhr.response);
    }

    xhr.send();

```

4. fetch API
    - By default fetch sends GET request
    - response.json() returns a promise

```
    return fetch(url).then(response => {
        return response.json();
    })

    # POST request

    return fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    })

```

5. Error handling
    - catch block handles only the incomplete request like due to network errors
    - Errors with staus code 500, 400 etc will not be handled
    - So to handle that we need to check the status code in the response body

```
    fetch(url, {})
        .then(response => {
            if(response.status >= 200 && response.status < 300>) {
                console.log('Valid response');
                return response.json();
            } else {
                console.log('Error');
                throw new Error('semething went wrong');
            }
        })
        .catch(error => {
            console.log('Network error');
        })

```

6. Axios
    - Need to download the script or use CDN url in index.html
    - Syntax
    - Here all type of errror comes in catch block (network, server,etc)

```
try {
    async function fetchPostsUsingAxios() {
    const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);

    # Post request
    await axios.post('url', data);

    }
} catch(Error error) {
    alert(error.message);
}

```

