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
    - Can we accessed using the name of the class
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
