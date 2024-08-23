1. Boolean operators

   - == is used for value equality
   - != is used for value not equal
   - === is used for value and type equality
   - !== value and type not equality
   - > = greater that equal to
   - <= less than equal to
   - ! negate of any value

2. In String comparison the capital letters are considered as small than the lower case (lexicographical ordering)

   - 'ab' > 'aa' // true
   - 'a' > 'B' // true
   - 'a' > 'b' // false

3. Objects and Arrays are not compared using == or ===

4. Falsy and Truthy value
   - javascript tries to coerce values to a boolean value if required
   - Example

```
    const name = 'abc';
    if(abc) {
        console.log('This statement will get printed in console');
    }
```

- 0 is considered as false
- Any other number is considered as true
- any string is considered as true
- empty string is considered as false
- all arrays and objects are considered as true even empty objects and arrays
- null, Nan, undefined are considered as false

5. prompt() is like alert but it provides a dialog where you can enter something

6. Some logical operator tricks

   - !! to change any value to its truthy or falsy value example
     !!56 // true
     !!0 // false

   - || to set a default value example
     const name = someName || 'abc'; // abc in case someName is undefined or null

7. Switch case example
   switch (name) {
   case 'abc':
   console.log('abc');
   break;
   case 'xyz':
   console.log('xyz');
   break;
   default:
   blablaconsole.log('default value');
   }

8. Loops in javascript
   - for loop
   - while loop
   - for-of loop - executes for every element in an array, example

```
     arr = [1,2,3,4];
     for (value of arr) {
        console.log(value);
      }
```

- for-in loop - executes for every key in an object

```
     obj = {'key1': 'value1', 'key2':10};
     for (key in obj) {
        console.log(value);
        console.log(obj[key]);
      }
```

9. Error handling
    - We have to enclose the code that can throw an error with try block
    - we can catch it using the catch block
    - we can optionally have finally block
    - we can throw any value like string, number or an object
    - Example
```
    try {
        let value = prompt('Enter a number');
        if(isNaN(parseInt(value))) {
            throw {message: 'Entered value is not a number'}
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('...');
    }
```