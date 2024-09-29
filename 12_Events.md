1. We have a core event object Event in javascript (kind of super class of all the event types)

2. Then we have several events types like

   - Mouse Event
   - Drag event
   - Keyword event, etc

3. There are different ways to connecct function call to an element change like
   - onclick property in HTML (depricated)
   - we can use the same property in script like, but we can call only 1 function on click event
   - Third is the old document.addEventListener('click', functionName); approach (best one)

```
const button = document.querySelector('button');

const onButtonClickHandler = () => {
    console.log('Hi there!');
}

button.onclick = onButtonClickHandler;

```

4. Just like the addEventListener we have the removeEventListener to remove an event listener
   - we need to pass the same function in the removeEventListener that we passed in the addEventListener

```
const button = document.querySelector('button');

const onButtonClickHandler = () => {
    console.log('Hi there!');
}

document.addEventListener('click', onButtonClickHandler);

setTimeout(() => {
    document.removeEventListener('click', onButtonClickHandler);
},2000);

```

5. We have different events like

   - click, mouseenter, mousexit, etc

6. By default the form element with submit button reloads the page when ever the button is clicked
   - we can prevent this by using the preventDefault() function
   - add can add a submit event handler to call a function when sibmit is clicked on a form

```
    <form>
      <label for=""title>title</label>
      <input type="text" id="title">
      <button type="submit">Submit</button>
    </form>


    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('submitted');
    });
```

7. Capturing phase and bubbling phase (Event propagation)
   - when we have a button inside a div
   - if we add event handler on the button and div and we click on the button
   - then first the event handler of button will get called and then event handler of the div
   - Bubbling means event propagation from inside to outside
   - Capturing phase means from outside to inside
   - by defauly the addEventLister is of type bubbling phase so goes from inside to outside
   - we can change the behavoir by setting the value to true while adding the event listener
   - After changing the div event listener will get called first then the button event listener gets called
   - To prevent the event propagation we can use event.stopPropagation() method
   - if we have multiple event listener then we can use event.stopImmidiatePropagation();
   - not all event propagates

```
button.addEventListener('click', event => {
    console.log(event);
});

div.addEventListener('click', event => {
    console.log('div');
    console.log(event);
});

# changing to capturing phase

button.addEventListener('click', event => {
    console.log(event);
}, true);

# Preventing propagation

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log(event);
});
```

8. Event deligation
    - Let say we have a list of items in the HTML
    - and we want to change the background color of the individual items (li) by clicking on it
    - One way to get a list of li and then change the classList using element.classList OR event.target.classList property
    - but we have to have event listener for each li individually, that can be lots of event listener
    - Or we can use the Event deligation and can put 1 event listener on the <ul> and then check which element in it is clicked
    - and just change the background of that
    - event.target will always returns the exact element to which we clicked
    - even if the element that we are using is the <ul> but in the event one of its <li> will be present

```
    #1st way

    const listItems = document.querySelectorAll('li');

    listItems.forEach(item => {
        item.addEventListener('click', event => {
            event.target.classList.toggle('highlight');
        })
    });


    #Best way

    const list = document.querySelector('ul');

    list.addEventListener('click', event => {
        event.target.closest('li').classList.toggle('highlight');
    });


```

9. We can call the event programatically like
    - form.click(), form.submit()       // form is the form element
    - button.click()


10. Drag and Drop
    - Need to make the element draggable
    - then start listening to draggable event ('dragstart')
    - Accept drop via 'dropenter' and 'dragover' events and also prevent the default using preventDefault()
    - As default behavious does not allow an element to drap and drop

```
        <li
          id="p3"
          data-extra-info="Super important conference! Fictional but still!"
          class="card"
          draggable="true"
        >

        document.getElementById(this.id).addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', this.id);
            event.dataTransfer.effectAllowed = 'move';
        });


# Creating drop area
        list.addEventListener('dragenter', (event) => {
        if (event.dataTransfer.types[0] === 'text/plain') {
            list.parentElement.classList.add('droppable');
            event.preventDefault();
        }
        
        });

        list.addEventListener('dragover', (event) => {
        if (event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
        }
        });

        list.addEventListener('dragleave', event => {
        if(event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
            list.parentElement.classList.remove('droppable');
        }
        });

        list.addEventListener('drop', event => {
            const projectId = event.dataTransfer.getData('text/plain');
            if(this.projects.find(p => p.id === projectId)) {
            return;
            }

            document.getElementById(projectId).querySelector('button:last-of-type').click();
            list.parentElement.classList.add('droppable');
            event.preventDefault();
        });

```