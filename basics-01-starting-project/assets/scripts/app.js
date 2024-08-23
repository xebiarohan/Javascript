const defaultResult = 0;
let currenResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, beforeValue, valueToUpdate) {
  const currentCaculation = `${beforeValue} ${operator} ${valueToUpdate}`;
  outputResult(currenResult, currentCaculation);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operand: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
      };
      logEntries.push(logEntry)
      console.log(logEntries);
}

function calculateResult(type) {
  const userInput = getUserInput();
  const currentValue = currenResult;
  let mathOperator

  if(!userInput) {
    return;
  }

  if(type === 'ADD') {
    currenResult += userInput;
    mathOperator = '+'
  } else if(type === 'SUBTRACT') {
    currenResult -= userInput;
    mathOperator = '-';

  } else if(type === 'MULTIPLY') {
    currenResult *= userInput;
    mathOperator = '*';

  } else {
    currenResult /= userInput;
    mathOperator = '/'
  }

  
  createAndWriteOutput(mathOperator, currentValue, userInput);
  writeToLog(type, currentValue, userInput, currenResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
