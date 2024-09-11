1.  Creating arrays

    - const arr1 = [1,2,3,4]; // Fastest way to create an array(best performance)
    - const arr2 = new Array(1,2,3); // [1,2,3]
    - const arr2_1 = new Array(5); // empty array of length 5
    - const arr3 = Array(1,2,3); // [1,2,3]
    - const arr3_1 = Array(5); // empty array of length 5
    - const arr4 = Array.of(1,2); // [1,2]
    - const arr5 = Array.from(<any-array-like-object>);
      - const arr5_1 = Array.from('Hello'); // ['H','E','L','L','O'];

2.  Data can be of mixed type
    let arr = [1, 'Hi', false, [1,2], {}];

3.  Updating Arrays

    - let arr = [1,2];
    - To add value at the value at end: arr.push(3); // [1,2,3]
    - To add value at the first place: arr.push(3); // [3,1,2,3]
    - To remove the last element: arr.pop(); // 3 [3,1,2]
    - To remove the first element: arr.shift(); //3 [1,2]
    - To replace a value: arr[1] = 3 //[1,3]
    - If we set a value that is not defined

```
      arr[5] = 5; //[1,3,empty,empty,empty,5];

      console.log(arr[4]); // undefined
```

4.  Splice method

    - Used to add and delete elements togather in 1 command
    - Can be used to just add or delete as well
    - First argument is the index number from where to start
    - Second argument is the number of items to delete
    - From third arguments (infinite) values that needs to be added
    - Splice returns the removed elements
    - Example

```

    let numbers = [1,2,3,4];
    numbers.splice(0,0,7);      //[7,1,2,3,4];
    numbers.splice(1,3);        //[7,4];
    numbers.splice(0);      // [] removes everything
    numbers.splice(-1,1);   // removes the last element
```

5. Creating copies with slice

   - create a new copy of an array : arr.slice();
   - Creating a subarray of an array: arr.slice(0,2); // creates a new array from first 2 values
   - Selecting all from an element: arr.slice(2); // from 2nd element till last element

6. Concatenating arrays

   - arr1.concat(arr2);
   - it returns a new array, does not updates the current array

```
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = arr1.concat(arr2);
```

7. indexOf() and lastIndexOf()

   - Find the first occurance and the last occurance of any value
   - if value is not found then returns -1
   - If found then returns the index
   - Can be used for primitives but not for reference based values
   - we can also includes() method to just check if it is present in an array or not (returns true or false)

8. finding Object in an array

   - find() and findIndex() are used to find object and its index
   - find method returns the matching value it founds
   - Example

```
    personData.find((person, idx, persons) => {
        return person.name === 'Max';
    });

```

    - It returns the same value reference that is the array. So changing it will change the value in the array
    - FindIndex takes the same annonymous function and returns the index

9. forEach loop
   - it can take upto 3 parameters
   - value, index and the list

```
    arr.forEach((x,index, arr) => console.log(x));
```

10. map() function
    - Used to transform the values inside an array
    - Also takes the same 3 parameters value, index and the array itself

```
    let arr = [1,2,3,4];
    const transformedArray = arr.map((x,index,arr) => {
        return x*x;
    });
    console.log(transformedArray)   // [1,4,9,16];
    console.log(arr)                // [1,2,3,4];
```

11. Sorting and reversing array
    - Sort by default converts everything to a string and then it sorts the values
    - we need to call the sort method and we can pass an anonymous function in it.
    - If we are sorting an array of string then we dont need to pass any function to it.

```
    const prices = [10.99,5.99,3.99,6.59];
    prices.sort((x,y) => {
        if(x >y) {
            return 1;
        } else if(x === y) {
            return 0;
        } else {
            return -1;
        }
    });
```

12. Filter method
    - Used to filter values of an array
    - Also takes same 3 parameters value, index and the array itself

```
    const prices = [10.99,5.99,3.99,6.59];
    prices = prices.filter(x => x > 4);

```

13. Reduce method
    - Used to reduce an array to a single value example sum of all the values
    - Its function takes 4 paramters : previous value, current value, index and array itself
    - we can also set the first initial value as the second parameter of the reduce function itself

```
    const prices = [10.99,5.99,3.99,6.59];
    const total = prices.reduce((previousValue,currentValue) => {
        return previousValue + currentValue;
    }, 0);

```

14. Split and join methods
    - Split is used to split any string using any delimiter and convert into an array
    - we can pass a number as a second argument to limit the number of entries you want to store in that array
    - Join is used to merge the values of an array into a string
    - we can pass a delimiter value as well

```
const str = 'a;b;c';
const arr = str.split(';',2);       // [a,b];

arr.join();     // 'ab'
arr.join('-')   // 'a-b'

```

15. Spread operators
    - Can be used for copying values
    - Can be used to find the min value using the Math.min() method as it takes values not the whole array

```
    const arr1 = [1,2,3];
    const arr2 = [...arr1];      // [1,2,3]
    const minValue = Math.min(...arr1)  // 1

```

16. Array structuring
    - Used to get values from an array
    - Example
```
const values = [1,2,3];
const [a,b,c] = values;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3


const newValues = [1,2,3,4,5,6];
const [x,...y] = newValues;
console.log(x)      // 1
console.log(y)      // [2,3,4,5,6]
```

17. Sets
   - order is not guarenteed
   - No duplicate values
   - we can pass default values in Set in square brackets
   - Syntax :
```
    const set = new Set();
    const ids = new Set([1,2,3,4]);
    console.log(ids.has(1));    // true
    ids.add(5);         // true
    ids.add(2);         // false
    ids.delete(4);
    ids.values().forEach(x => console.log(x));
```

18. Maps
   - Stores key, value pairs
   - we can use objects as a key
   - we can have mix key type like 1 key is of type string other is of type object
   - we can fetch all the entries using map.entries()
   - Can get list of keys using map.keys()
   - Can get list of values using map.values()
   - Syntax
```
const person1 = {name: 'Max'}
const person2 = {name: 'Tax'}


const map = new Map();
const map = new Map([[person1, [1,2,3]]]); // here person1 is the key and array is the value
map.set('xyz', [4,5,6]);



map.entries().forEach((key,value) => {
    console.log(value);
});

```

19. Maps vs Objects
   - Maps can use any types as keys where as Objects can use string, numbers and symbols as keys
   - Maps has better preformance for large quantities of data
   - Objects for small/medium sized sets of data
   - Maps has better performance when adding and removing data frequently where as Objects are easier/quicker to create

20. WeakSet
   - It removes the entries whose value is set to null or it is not used anywhere else
   - value get garbage collected
```

let person = {name: 'max'};
const persons = new WeakSet();
persons.add(person);

person = null;
console.log(persons);       // empty set
```

21. WeakMap
   - Same as the WeakSet
   - If the key is not used anywhere else in the scripts then it will get garbage collected even if it is in map
