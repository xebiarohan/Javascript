
1. We can add some data property to an element in HTML using the data-<any-name>
    - we can then read the value using element.dataset
    - dataset is a json object contains all the elements declared using the data-<name> property
    - we can set a new property through dataset as well
```

    <li
          id="p1"
          data-anyname = "abc"
          data-extra-info="Got lifetime access, but would be nice to finish it soon!"
          class="card"
        >

        const element = document.getElementById('p1');
        console.log(element.dataset)

        element.dataset.newInfo = 'New Info';
```

2. Getting all the coordinates of an element
    - element.getBoundingClientRect();

3. 