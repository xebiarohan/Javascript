1. Third-party-library
    - Packages of javascript code that provide some specific functionalities

2. Using 3rd party library
    -  we can download the min js file of any third party library like lodash.min.js
    - Use it in the index.html file (keep it on top of all script as sequence matters)

```
    <script src="lodash.min.js" defer></script>
 ```

3. Other way to add library
    - copy the CDN link of the library and add it in the script
```
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" defer></script>
```

4. Adding new lirary is not always good
    - every library has some size
    - like lodash itself is 25kb
    - It impacts the loading time of the application
    - 