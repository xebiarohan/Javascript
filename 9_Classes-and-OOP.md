1. What is OOP - Object oriented programming

   - way of struncturing your programme
   - work with real-life entities in your code
   - Working with objects

2. Classes are the blueprint of an object

   - Object represents a real entity and its properties

3. Syntax of Class and its object
   - Constructor is not mandatory
   - if we are setting the value in the constructor then even declaring field above is not mandatory
   - we can declare fields and functions inside a class

```
class Product {
  title = 'DEFAULT';
  imageURL;
  description;
  price;

  constructor(title, imageURL, price, description) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  printTitle() {
    console.log(this.title);
  }
}

class ProductItem {
    constructor(product){
        this.product = product;         // automatically adds a property product in ProductItem
    }
}


    const product1 = new Product('A Pillow', '', 19.99, 'A soft pillow');
```

4. Static methods and properties
   - Common to all the instances of the class
   - Defined with static keyword infront of that
   - No need to create an instance of class to access them
   - Can be accessed using the name of the class

```
class App {
  static init(){
    const shop = new Shop();
    shop.render();
  }
}

App.init();

```

5. Inheritance

- When a class inherits proerties and methods from another class
- A class can inherit another class using the extends keyword
- Multi inheritance is not available in javascript
- So can extend only 1 class
- we can call the constructor of the extended class using the super() inside the contructor of the base class

6. Private fields, properties and methods

- Public fields, properties or methods are accessible from outside of an object or a class
- Asseccible from inside an object or a class only
- need to use with hash only inside the class

```
  class abc {
    #prodducts = [];    // # makes it private

    abc() {
      console.log(#products);
    }
  }

```

7. instanceOf

   - If we create an instance of Person class and check it with typeof then it will return object
   - So we use instanceof to check if an object is an instance of some class
   - An object is an instance of the main class and its all parent classes
```
    const p = new Person();
    typeof p        // object

    if(p instanceof Person) {
        console.log('Yes');
    }

```

8. Object descriptors
   - Every property of an object has a descriptor
   - To check descriptor of all the properties
   - we can use these values to change description of any value like making it read only
   - to prevent it to delete then set configurable to false
   - to make read only set writable to false
   - if want to stop any property to parse in for-in loop then set enumerable to false
```

const person = {name: 'abc', greet() {

    console.log(this.name);

}}

Object.getOwnPropertyDescriptors(person);

OR

Object.getOwnPropertyDescriptor(person, 'name');


Object.defineProperty(person, 'name', {
    configurable: true,
    enumerable: true,
    value: person.value,
    writable: false
});

```
