1. Javascript is single threaded

   - Can execute 1 task at a time
   - So when we have some blocking code like setTimeout(), http request then
   - browser assigns these task to another thread and javascript thread continues to execute the remaining javascript code
   - Browser needs to communicate back to the main javascript thread when the result comes, so for that it uses CALLBACKS

2. Event loop

   - Helps us deal with callbacks
   - When browser's other thread finishes the execution it sends a message in the message queue
   - Message for javascript engine main thread that the response came and JS main thread needs to execute it
   - Event loop (java of javascript host machine like browser) keeps on checking the message queue and moves it to the JS call stack

3. Promises
   - Saves us from callback hell (callback into callbacks)
   - Promise syntax
   - What ever we returns from a promise becomes a promise if it is not like if someOtherFunction() returns string value then it will Promise<String>.
   - we can have a catch block just like then block to catch any error coming from any then block before it.
   - if there is an error in any then block it searches for the second argument error handling or catch and will not execute any other then
   - Bettter approach is to use catch at the end

```
    someFunction
    .then(() => {
        return someOtherFunction();
    })
    .then(() => {
        return someThirdFunction();
    })
    .catch(error => {

    });

    # Creating promise

    const setTimer = (duration) => {
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                if(x === 20) {
                    resolve('Done!');
                } else {
                    reject('Failed message');
                }

            }, duration);
        });

        return promise;
    }

    setTimer(2000)
        .then(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });

```

4. Async/Await
   - Uses promises behind the scenes, it just omits the then and catch blocks and makes the code little more linear
   - we can use async/await for functions only
   - Need to add async in front of functions
   - Function with async in front of it automatically returns the Promise
   - then we add await in front of any promise inside an async function
   - await will stop the synchronous execution where the await comes and wait for the promise to resove or reject before continuing the execution
   - for error handling we can use try catch

```
#Syntax
async function add() {
    ...
    await callHttpEndpoint();
    ...
}

const add = async (a,b) => {...};

async function add() {
    try {
        await callHttpEndpoint();
        await callAnotherEndpoint();
    } catch(error) {
        console.log(error);
    }
}

```

5. Promise.race()
    - Takes an array of promises and returns the result of the fastest promise

```
    Promise.race([function1(), function2()])
        .then((result) => console.log(result));
```

6. Promise.all()
    - It will execute all the promises and returns result only when all the promises returns result
    - Result also comes as an array
    - If one of the promise failed then other promise will get cancelled and only the error response of the failed error will be comes as output

```
    Promise.add([function1(), function2()])
        .then(promiseData => console.log(result));

```

7. Promise.allSettled()
    - If we want the response of all the promises  (failed or passed) then we use allSettled() instead of all()

```

    Promise.allSettled([function1(), function2()])
        .then(promiseData => console.log(result));

```