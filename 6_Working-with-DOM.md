1. DOM (Document object model) is loaded and rendered HTML code

2. Browser expose functionalities to let javascript interact with the rendered HTML, in the end that is called DOM

3. 2 built-in global objects in the browser

   - document - gives different ways to interact with the HTML
   - window - document is the property of window, reflects the active browser window
   - when we call any fucntion like alert, prompt, etc browser automatically adds window. in front of it while executing

4. document and window

   - To see all the properties of document
     console.dir(document);
   - same for window
     console.dir(window);

5. Quering Elements

   - querySelector(), getElementById() - Returns 1 element
   - querySelectorAll(), getElementsByTagName(),... - returns multiple elements (array)
   - QuerySelector and querySelectorAll() are new way to get the elements from HTML
   - querySelector returns the first matching item
   - document.getElementById('abc') can be written as document.querySelector('#abc')
   - document.getElementsByClass('text-area') can be written as document.querySelectorAll('.text-area')
   - const ul = document.querySelector('ul');

6. we can get the access of any HTML node like

```
    const heading = document.querySelector('#haeadingId');
```

7. Then we can change any property of it like

```
    heading.textContent = 'New content';
    heading.class = 'header';  // css class
    heading.style.backgroundColor = 'white';
```

8. To see the list of all the properties we can check through

```
   console.dir(heading);
```

4. Attributes are placed in HTML tags like id, class, value, etc where as properties are added automatically on the DOM object. Mostly they have 1-TO-1 mapping

5. To get the last Item using the querySelector

   - const lastItem = document.querySelector('li:last-of-type');
   - here last-of-type is a pseudo selector

6. Traversing the DOM

   - We dont have to always get every element using the documet.querySelector or getElementBy...
   - we can get 1 element Node and then check all its example children nodes, parent, ansestors and Descendants
   - Child - Direct child node or element example <li> of <ul>
   - Descendant - Direct or indirect child (includes child of child)
   - Parent - Direct parent node or element
   - Ancestor - Direct or indirect parent node or element
   - We have other methods for siblings : previousSibling, previousElementSibling, nextSibling, nextElementSibling

7. Child Nodes
   - Example  
     const ul = document.querySelector('ul');
     ul.children
     ul.children[1] // to get the second child
   - The empty spaces in the HTML is also treated as the nodes
   - If we use children then it will not include these empty space nodes
   - But if we use childNodes then they are also covered
   - we can get the first/last nodes like
     ul.childNodes
     ul.firstChild
     ul.firstElementChild
     ul.lastChild
     ul.lastElementChild

```
    <ul>
        <li>abc</li>
        <li>xyz</li>
    </ul>
```

8. Parent Nodes
   - A node can have exactly 1 parent node
   - can be exacted using parentNode or parentElement

```
    const li == document.querySelector('li');
    li.parentNode       // ul
    li.parentElement    // ul
```

9. Sibling Nodes

   - ul.previousSibling // it can also be a text node (empty space)
   - ul.previousElementSibling // it provides the proper previous sibling
   - ul.nextElementSibling // it provides the proper nexr sibling to <ul>

10. Traversing DOM is faster than the querySelector

11. Styling DOM elements

- Using the style property (highest priority) - Directly targeting individual CSS styles
- Via ClassName - Directly set the CSS classes assigned to the element
- Via ClassList - Conveniently add, remove or toggle CSS classes
- Example

```
  const section = document.querySelector('selector');
  section.style.backgroundColor = 'green';

  section.className = 'red-bg';     // red-bg is a css class

```

- Example we want to toggle a css based on a button click, here ClassList is a better option

```
Option 1 with className

    if(section.className === 'red-bg visible') {
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';
    }

Option 2 with ClassList

    section.classList.toggle('visible');
    section.classList.toggle('invisible');
```

12. Creating and inserting elements

- Using HTML code inside java script
- Using createElement() method

13. Adding element via HTML in code

- let say we have a section with with multi line code

```
  const header = document.querySelector('section');
  header.innerHTML = '<h1> New title</h1>'
```

- It will replace all the content of the section with this new title (not the text message but the HTML inside the section node)
- If we want to keep the old one and just append a new HTML node with it

```
  const ul = document.querySelector('ul');
  ul.insertAdjecentHTML('beforeend','<l1>4</li>');

```

14. Creating element via createElement()

- let say we want to create a li in an ul

```
  const ul = document.querySelector('ul');
  const newLI = document.createElement('li');
  ul.appendChild(newLI);
  newLI.textContent = 'New LI';

```

- we can also use append() instead of appendChild()
- append() can takes a string value in case we want to append a string
- we can pass multiple parameter to append multiple nodes in 1 like example

```
    ul.append(newLi1, newLi2);
```

- If we want to insert it as a first element then we can use prepand

```
  ul.prepand(newLi);
```

- we can insert items before or after any element node lile

```
  ul.lastElementChild.before(newLi);
  ul.lastElementChild.after(newLi2);
  ul.firstElementChild.replaceWith(newLi3);
```

15. Copy a element node
  - li.copyNode(true)
  - It takes a boolean that marks deep copy of node (with all the children nodes)

16. Live node list and static Node list
  - When we fetch a list of nodes using querySelector or querySelectorAll then it takes a snapshot of the Node list
  - Any change in the DOM after fetching the list will not get refrect in the list (like list of li of an ul)
  - But when we fetch using getElementsBy<Something> like getElementsByTagName(), it fetches the live list
  - Any change in the DOM will be reflected on the list like change in the number of li of an ul.

17. Removing elements
  - There are 2 ways to remove items from the DOM
  - list.remove(<NodeName>)
  - ul.parentElement.removeChild(ul);
