1. We can add function in an object as a property.

```
    const person = {
        greet: function greet() {
            console.log('Hi there!');
        }
    }

    person.greet();
```

2. Function are also objects
   console.dir(anyFunctionName) // whole function object

3. You can store function in variable or constants, we can declare the function with or without name

```
    const greet = function greeting() {
        consol.log('Hi...');
    }

    OR

    const greet = function() {          //Anonymous function (without name)
        consol.log('Hi...');
    }

    greet();
```

4. Hoisting
   - function expression (function name() { ...}) get hoisted on top means they can be used beofre even their declaration in script

```
    greet();            // works fine

    function greet() {
        console.log('hi...');
    }

```

    - function statement (const name = function(){...}) get hoisted but without the initialization so we cannot use it before their declaration

```
    greet();            // Error

    function greet = function() {
        console.log('hi...');
    }
```

5. Default arguments
   - We can set default value of an argument in a function
   - if we dont send the value of the parameter or if we send undefined then the default value will get used
   - we can write an expression while setting the default value in the function argument
   - Example

```

    const add = (firstValue, secondValue = 20) => {
        return firstValue + secondValue;
    }

    add(10, 10);        // 20
    add(10);            // 30

    let x;              // x is undefined
    add(10,x);          // 30

```

6. Rest parameters (rest operator)
   - when we dont know the number of arguments required for a function
   - Internally it is treated as an array
   - rest parameter must be the last argument in the function
   - You can have only 1 rest parameter
   - we can have some other arguments in front of it (a,b, ...c);
   - Example

```
    const addition = (...numbers) => {
        let sum = 0;
        for(num of numbers) {
            sum += num;
        }

        console.log(sum);
    }
```

    - before the rest operator we use to have arguments keyword that takes all the argument

```

    const addition = function() {
        let sum = 0;
        for(num of arguments) {         // arguments contains all the passed parameters (old approach)
            sum += num;
        }

        console.log(sum);
    }
```

7. Functions inside of a function
   - we can create nested functions
   - Scope is limited to the upper function

```
    const addition = (...numbers) => {
        const validNumber = (number) => {
            return isNaN(number) ? 0 : number;
        }

        let sum = 0;
        for(num of numbers) {
            sum += validateNumber(num);
        }

    }
```

8.  Callback functions
    - When we send a function as argument to another function
    - And that function get executed inside the other one on some condition
    - Example

```
    const printSum = (result) => {
        console.log(result);
    }

    const addition = (resultHandler, ...numbers) => {
        let sum = 0;
        for (let num of numbers) {
            sum +=num;
        }

        resultHandler(sum);
    }

    addition(printSum, 1,2,3,4);           // 10
```

9. bind
   - when we have to send some value to the function that is passed as an argument to another function
   - if the passed function takes n arguments then we can send upto n arguments with bind (means less than that also)
   - bind method takes the 'this' as the first argument (mandatory)
   - the arguments are mapped to passed parameter in the same order
   - Basically bind is used to pre-configure a function argument whenever it gets called
   - Example

```
    const addition = (printHandler, ...values) => {
        let sum = 0;
        for(let x of values) {
            sum +=x;
        }

        printHandler(sum);
    }

    const printValue = (operator, value) => {
        console.log('Operator is ' + operator);
        console.log('Value is: ' + value);
    }

    addition(printValue.bind(this, 'ADD'), 1,2,3,4);
```
   - As shown in the example printValue takes 2 arguments, 1 is passed by the bind value and second is passed in the addition fn.
