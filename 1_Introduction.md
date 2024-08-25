1. Javascript is a dynamic, weekly typed programming language that is compiled at the runtime

2. Runs code in a browser (on a webpage)

3. How Javascript executes in the browser :

   - It uses the Javascript engine present in the browser like V8 in chrome and SpiderMonkey in firefox.
   - Engine parses the code, compiles to machine code and then executes the machine code on the webpage.
   - All runs on a single thread

4. It is a Dynamic language means it is not precompiled like Java, or C++. it is JIT compiled

5. Weekly type means no need to declare the type of variable, So 2 different data type values can be assigned to a same variable
   example

```
        let a = 10;
        a = 'abc';
```

6. Javascript can run on a Browser or on serverside (must have an engine to interpret the JS file) (example Node.js)

7. Javascript cannot access your local file system, interact with the operating system (when running on Browser)

8. Javasfcript is based in ECMAscript. ECMAscript is managed by ECMA team. Javascript is most famous ECMAscript inplementation

9. Arrow functions
   - we need curly brackets when there is more than 1 line in the function body
   - we dont need to add return keyword when there is only 1 line in the functional body

```
   const greet = () => console.log('greet');
   
```
10. Things to check again
   - Hoisting
   - bind, call and apply