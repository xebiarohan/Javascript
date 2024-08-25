1. We can inject the javascripts in the webpage using the <script></script> tag

2. we can add it in head section or the body based on when we want to use the javascript code

3. In case of multiple scripts add the scripts in proper order as the order matters

```
<head>
    <script src="assets/scripts/vendor.js"></script>
    <script src="assets/scripts/app.js"></script>
</head>

```

4. A variable is a data container where value can change

```
    let a = 'rohan'
    a = 'aggarwal'
```

5. A constant is a data container where value must not change

```
    const numberOfUsers = 10;
```

6. Variable name must not start with a number

7. Data types

   - Numbers, Strings, Booleans, Objects, Arrays, null, undefined and NaN

8. We can define fucntions whereever we want in the script, the script scans it and put it on top while interpreting it. The same is not true for the variables (let, const). we have to define the variable first and then only we can use it.

9. A function that returns the same output for same inputs is known as Pure function

10. A local variable declared inside a function that also exist as a global variable (with the same name) is called Shadowed variable.

11. User input value by default is always string.

12. Functions to convert string to int and float - parseInt('20') - parseFloat('20.2')

13. Converting number value to a string - x.toString()

14. Adding comments like explaination of the class or method

    - First way is used use '//' for single line comments
    - /\* \*/ for multi line comments

15. Objects : for the key the quotes are not important
    - We can have even functions as a value in object
    - Example

```
          const logEntry = {
            operand: 'ADD',
            'test':'passed'
            test2: 'this will also pass',
            function1: myFunc
        }
```

16. null, undefined and NaN
    - undefined: Default value of uninitialized variables 
        example let a;
    - null: not a default value but we can set a variable to null
        example let a = null;
    - NaN (Not a number): It is kind of an error when we are computing some number and with some non number value
        example 3 * 'hello'      // NaN
    
17. typeof is used to check the type of a variable
    - typeof 'rohan'      // string
    - typeof 1            // number
    - typeof [1,2]        // object
    - typeof {a: 12}      // object
    - typeof null         // object

18. Importing script in HTML file
    - the best practice is to keep the scripts in the head section of the HTML
    - and add defer to it
        - <script src="..." defer></script>
    - defer instruct the Browser to download the script first then continue loading the HMTL and after loading only execute the script
    - defer makes sure that the loading of HTML happens first and then execution of script starts
    - If we want to execute the script when ever it get laoded, irirespective to the laoding status of the HTML code then we use async
        - <script src="" async></script>
    - in async the order of the script is not guranteed

19. Best reference website for Javascript : MDN Web Docs