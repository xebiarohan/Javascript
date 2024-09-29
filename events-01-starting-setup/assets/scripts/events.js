const button = document.querySelector('button');

const div= document.querySelector('div');

const onButtonClickHandler = (event) => {
    console.log(event);
}

// button.addEventListener('click', onButtonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', onButtonClickHandler);
// },20000);


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitted');
});

button.addEventListener('click', event => {
    console.log(event);
});

div.addEventListener('click', event => {
    event.stopPropagation();
    console.log('div');
    console.log(event);
});