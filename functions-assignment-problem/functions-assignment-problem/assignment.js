const sayHello = (name) => console.log('Hi ' + name);

const checkInput = (funcHandler, ...str) => {
  let hasEmptyString;
  for (x of str) {
    if (x === '') {
      hasEmptyString = true;
      break;
    }
  }
  if (hasEmptyString) {
    funcHandler();
  }
};

sayHello();
