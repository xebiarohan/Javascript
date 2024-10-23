1. By default we have lots of javascript files that we add in the index.html. We have to manage the order of it as the script can depend upon one another

2. To save ourself from this messy implementation we can use module

3. How to use module approach
    - we have to to atreast import 1 script in the html using the script tag (the main first script)
    - In that we can use type="module"
    - Then we cannot run the index.html from the file explorer, we need to serve it on a server
    - Install dummy server using: npm install -g serve
    - to run serve just type "serve" in the project containing index.html
    - Then we need to add export in front of class that we want to use in other classes
    - we can then import the exported class in other class
    - Then there is no need to import the exported file in the index.html

```
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Project Board</title>
    <link rel="stylesheet" href="assets/styles/app.css" />
    <script src="assets/scripts/app.js" defer type="module"></script>
  </head>


  # Exporting class
  export class Component{}

  # In any other class
  import { Component } from './Component.js';

```

4. we can even export functions and variables from a javascript file
    - Syntax

```
  export function abc{}

  import {abc} from './fileName.js'

```

5. Importing something with a different name
```
import {abc as xyz} from './fileName.js'

```

6. Default export and import
    - we can omit the name of the file if we want to export the whole file
    - then we can import the default exported class without the curly brackets in other JS files

```

export default class {

}

import abc from './fileName.js'