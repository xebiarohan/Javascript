1. Constructor function
    - Special type of function that can act as a blueprint for Objects (just like a class)
    - Holds properties and methods
    - Called with the new keyword just like a class
    - Classes behind the scene uses this constructor functions
    - Classess are just the wrapper of a construction function
    - Class is wrapper of construction function and prototype that powers an object

2. Prototypes
    - Every class has a prototype object (__proto__) and a prototype property (an object)
    - When we create an instance of a class, the __proto__ object of the instance refers to the prototype property of the class
    - __proto__ object is a fallback object means if a property is not present in an instance then javascript starts searching it in its prototype object.
    - Every prototype also has its own prototype
    - If a property or method is not present on an instance, javascript checks its prototype, then its protype until the end of the chain.
    - if we print an object it contains : __proto__  that refers to the prototype object
    - End of the chain is the Object.prototype property which contains methods like toString(), valueOf(), hasItsOWnProperty, etc
    - __proto__ is present on all types of object even on functions object, class object, array, etc
    - Prototype property is a different property than the __proto__ object
    - Prototype property is present on the constructor function (classess) only. It is used to set the __proto__ property to all its instances
    - we can update the prototype property of a class.
    - when we extends some class, behind the scene javascript updates the prototype property of that class with the properties of the extended class
    - __proto__ of an instance also has the access to the constructor of its class, so we can use it to create a new object

```
    class Person {
        constructor() {}
        name = 'abc';
    }

    const abc = new Person();

    console.log(abc.__proto__ === Person.prototype)      // true

    Person.prototype = {
        greet() {
            console.log('Hi ' + this.name);
        }
    }

    const p2 = abc.__proto__.contructor();

```

3. Class methods placcement in __proto__
    - When we create a class with multiple fields and methods
    - And we console.dir(instance) on the console
    - we can see that behind the scene javascript moves the function in the __proto__ object
    - Javascript does it for optiomization as the field value can be different for different instances but the functions remains same
    - So instead of adding it to each instance, javascript adds it to the __proto__ object
    - __proto__ is also written as [[Prototype]]
    - __proto__ of 2 instance points to the same object
    - if we create it using the arrow function then it will be individually added to each instance hence takes more memory

```
    class Person extends AgedPerson {
        name = 'abc';

        constructor(age) {
            super();
            this.age = age;
        }

        greet() {
            console.log(`Hi, my name is ${this.name}`);
        }
    }

    const p = new Person(20);

    console.dir(p);

    age: 20
    name: "abc"
    [[Prototype]]: AgedPerson
        constructor: class Person
        greet: ƒ greet()
        [[Prototype]]: Object

```

4. So using the above functionality we can set some values in the prototype property of a class and that will shared by all its instances

```
    Person.prototype.sayHello = function() {
        console.log('Hello');
    }
```

5. Updating the __protot__/ [[prototype]] property of an instance
    - using getPrototypeOf and setPrototypeOf
    - second way is using create method

```

const course = {
    title: 'Javascript',
    rating: 5
};

console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating() {
        console.log(`${this.rating}/5`);
    }
});

course.printRating();
```

```
    const abc = Object.create({})       // Object passed as parameter becomes the __proto__ of the created object
```