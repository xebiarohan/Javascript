1. Objects

   - made up of properties and methods
   - Allow us to group related data
   - All reference values are of type objects like DOM Nodes, arrays, Set, Maps etc

2. Adding, Modifying and deleting a property
   - For Adding a value directly assign the value (Doesnot matter if the property already exist or not)
   - Modifying is same as the Adding value, if the property exist it will modify it else add it
   - For deleting use 'delete' keyword and then the property that you want to delete

```
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports'].
    greet: () => {
        console.log('Hi There!');
    }
}


// Adding a value
    person.isAdmin = true;

// Modifing a value
    person.age = 31;

// Deleting a value
    delete person.age;
```

3. If the property name is not a simple string for example
   - first-name then we have to use it using single quotes
   - and accessing property is also changed to square brackets

```
    const person = {
        'first-name': 'max'
    }

    console.log(person['first-name']);
```

4. Property Types and Property Order

   - we can use string, number and symbol as the key example {1.5: 'hello'}
   - order is maintained in which we add it
   - if all the keys are numbers then they get sorted

5. Dynamic property access

```
const person = {
    name: 'xyz'
}


const keyName = 'name'

console.log(person[keyName]);       // xyz
```

6. If the key and value parameter is same then we can omit the value like
   {title: title} can be written as {title}

7. If the key is a dynamic value then we can add it in an object using square brackets

```
    {
        [dynamicParameter]: value
    }
```

8. Spread operator in Objects
   - we can create a shalow copy of an object using the spread operator
   - we can override some values if we want while using the spread operator

```
    let person = {
        name: 'Rohan',
        age: 31,
        hobbies: ['Sports', 'Reading']
    }

    let person2 = {...person};
    let person3 = {...person, age: 29}
    let person4 = {...person, hobbies: [...person.hobbies]} // now it becomes deep copy
```

9. Another way to do shallow copy
   - Using Object.assign
   - we can merge multiple objects in an object
   - we can merge object in an existing object

```
    const person5 = Object.assign({}, person);
    const person6 = Object.assign({}, person1,person2);
    const person7 = Object.assign(person, person1, person2);
```

10. Object destructuring
    - Same as the array destructuring
    - variable name in the curly brackets on the left side must be present in the object on the right side
    - we want to use the other name not the same name then use : and then add the new name
    - if using spread operator on the left side then any variable name can be used

```
const movie = {
    info: {
        title: 'IronMan',
        rating: 5
    },
    id: 123
}

const {info} = movie;
console.log(info)       // {title: 'IronMan', rating: 5}

const {info: movieInfo} = movie;
console.log(movieInfo);     // {title: 'IronMan', rating: 5}

const {info, ...otherProperties} = movie;

```

11. Checking if any property exists in an object
    - Use the 'in' keyword
    - Other way is to compare its value with undefined

```
    if( 'info' in movie) {
        console.log('present');
    }

    if(movie.info !== 'undefined') {
        console.log('present');
    }
```

12. this keyword
    - It refer to the function caller like

```
const movie = {
    info: {
        title: 'IronMan',
        rating: 5
    },
    id: 123,
    formatTitle: function() {
        this.info.title.toUpperCase()
    }
}

console.log(movie.formarTitle());  // Here movie object is calling the function so this refers to movie object

```

13. if we dont have any object to call the function means if it is direct execution then we can use bind to pass the value of this keyword

```
const movie = {
    info: {
        title: 'IronMan',
        rating: 5
    },
    id: 123,
    formatTitle: function() {
        this.info.title.toUpperCase()
    }
}

let {formatTitle} = movie;
formatTitle = formatTitle.bind(movie);      // first argument is the value of this in bind function
formatTitle();
```

14. Call and Apply
    - Here the bind function call is redundant
    - first we are binding the value and then we are calling the function
    - we can replace it with call() method that sets the value of 'this' as well as call the function
    - Apply is same as the call in sense that it calls the function immidiately but it just takes 2 arguments 'this' value and an array
    - Array contains all the parameter value that we want to pass in the function call
    - Call allows to pass parameter as comma seperated list where as Apply takes an array

```
    let {formatTitle} = movie
    formatTitle.call(movie);
```

15. This inside of an event listener function refers to the element on which we are adding the event listener

```
searchButton.addEventListener('click', searchButtonHandler);

const searchButtonHandler = function() {
    console.log(this);
}

// <button>Search</button> will get printed in the console

```

16. this keyword with Arrow function
    - this keyword by default referes to the global object (window) inside an arrow function (in strict and non-strict mode)
    - Arrow function dont bind this to anything, they just keep the context they have

17. Getters and Setters
    - use the set and get keyword infront of methods
    - we can access it directly without brackets

```
    const movie = {
        info: {
            set title(value) {
                this._title = value;
            }

            get title() {
                return this._title;
            }
        }
    }

    movie.info.title = 'abc';       // calls setter method
    console.log(movie.info.title);  // calls getter method

```
