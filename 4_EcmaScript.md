1. Different between var, let and const

   - var is used till ECMA5 and has global or functional scope
   - let is same as the var it just has a block scope like any block in {} brackets example if-else blocks, etc
   - const is same as the let in terms of block scope but its value can not be changed, we have to declare and initialize it at the same time.
   - let and const are introduced in ECMA6 in 2015

2. Hoisting
   - it is a process of moving the declaration of variable on the top of the script
   - It works for all 3 types var, let and const
   - Difference between var and remaining two is that the declaration in var is initialized with undefined and for other 2 there is no initial value.
   - So if you use a var type of variable before declaring in script it will return undefined
   - If you use let or const variable before declaring in script, it will throw an error

```
    console.log(userName);
    var userName = 'abc';

It is changed into the below code during the interpretation at browser

    var userName;       // initialized to undefined
    console.log(userName);
    userName = 'abc';               // output is undefined

```

    for let and const

```
    console.log(userName);
    let userName = 'abc';

It is changed into the below code during the interpretation at browser

    let userName;       // not initialized to any value
    console.log(userName);
    userName = 'abc';               // output is not Initialization error

```

3. Strict mode
   - we can use strict mode in any script or even a function to force good javascript syntax
   - add 'use strict'; at he beginning of any script
   - Example

```
    userName = 'abc';
    console.log(userName);      // Output: abc (browser automatically adds var if not present in non strict mode)
                                // In strict mode : userName is not defined error

```

4. Javascript Engine and what they do?

   - Browser runs the HTML code.
   - When browser sees any script in the HTML code
   - They parse and executes it using the Javascript engine.
   - Every browser has there own engine like chrome has V8 and firefox has spider monkey, etc
   - Mostly an engine can be divided into two parts: interpreter and compiler (JIT compiler)
   - First he interpreter takes the scripts parses it and executes it to make a byte code
   - Byte code is picked by the compiler that compiles it to change it in machine code and sends it your computer
   - Then computer executes it

5. How code execution works inside engine

   - There are 2 types of memory used by browser heap and stack
   - heap is a long term memory where data get stored like variables, functions
   - Stack is used for short term memory like keeping track of which function is currently getting executing and primitive variables
   - The first function is anonymous that refers to a function which executes the whole script
   - There is Event loop also which is used to handle events

6. Primitive and Reference

   - Primitives value

     - String, Numbers, Boolean, undefined, Symbol, null
     - Usually stores in the stack memory
     - copying a variable (assign to a different variable) copies the value

   - Reference value
     - Other objects like arrays, Object
     - takes more memory to create, so gets stored in heap
     - variable stores the value of reference of the object not the object itself
     - So copying a variable just copies the reference not the object itself
     - to copy the real variable use spread operator
       xyz = {name: 'xyz', age: 50}
       let abc = {...xyz};

7. Garbage collection of Heap memory (present in Chrome)
   - Every engine has a garbage collector
   - It predically checks the heap memory for unused objects
   - Unused objects are the once that dont have any references
   - Modern browser can even checks that if a variable is declared by const or let and are not used.
   - You cannot force the garbage collector to go and collect the garbage from the memory.
