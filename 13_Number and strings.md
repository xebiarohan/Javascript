1. Number

   - Every number in javascript is a float
   - Internally stored as 64 Bit floating point
   - Finding max and min number
     - Number.MAX_SAFE_INTEGER 2^53-1
     - Number.MIN_SAFE_INTEGER
     - Number.MAX_VALUE (smaller than the max integer but max in length with proat point)

2. Floating point imprecision

   - Javascript internally wporks with binary, when we do some numeric expression, it first change it into binary from decimal, executes and converts back.
   - Becaiuse of that
     - 0.2 + 0.4 === 0.6 //False
     - it is converted into 1/5 + 2/5 then they get converted into binary numbers and then operation takes place

3. Converting a decimal number into binary
   - (5).toString(2); // 101

4. To get a defined number of decimal value
   - (0.2 + 0.4).toFixed(2) // 0.60
   - toFixed() method returns string

5. To get perfect number
   - work with integers only like first multiple with 100 then after computation divide by 100
   - (0.2*100 + 0.4*100)/100

6. BigInt
   - Used for number bigger than max number value(2^53 -1)
   - For creating a big number of type BigInt just add n in the end of the number
     - 1234243413431433141n
   - No decimal number is supported (only integer types)
   - cannot mix BigInt and other types
     - 10n - 4 // error
   - Converting number to BigInt
     - 10n - BigInt(4) // 6n
   - Converting BigInt to number
     - parseInt(4n) // 4
   - Removes decimal places like
     - 5n/2n //2n

7. Global Number object
   - Number.POSITIVE_INFINITY // Infinity
   - Number.isFinite(1/0) // false
   - Number.isNaN()

8. Math object
   - Math.PI()
   - Math.sqrt()
   - Math.pow()
   - Math.abs()
   - Math.random()
   - Math.floor()

9. Random function between 2 numbers
```
    function randomIntBetween(min, max) {

        return Math.random() * (max - min) + min;

    }

```

10. Strings
    - can be created with '' , "" or ``

11. Template literal

```
    const name = 'Max';

    console.log(`My name is ${name}`);

```

12. Closure
    - Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function
    - Examples : https://blog.hubspot.com/website/javascript-closure
