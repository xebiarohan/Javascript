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

function add() {
  const userInput = getUserInput();
  const currentValue = currenResult;
  currenResult += userInput;
  createAndWriteOutput('+', currentValue, userInput);
  writeToLog('Add', currentValue, userInput, currenResult);
}

function subtract() {
  const userInput = getUserInput();
  const currentValue = currenResult;
  currentCaculation = `${currenResult} - ${userInput}`;
  currenResult -= userInput;

  outputResult(currenResult, currentCaculation);
  writeToLog('SUBTRACT', currentValue, userInput, currenResult);
}

function multiply() {
  const userInput = getUserInput();
  const currentValue = currenResult;
  currentCaculation = `${currenResult} * ${userInput}`;
  currenResult *= userInput;

  outputResult(currenResult, currentCaculation);
  writeToLog('MMULTIPLY', currentValue, userInput, currenResult);
}

function divide() {
  const userInput = getUserInput();
  const currentValue = currenResult;
  currentCaculation = `${currenResult} / ${userInput}`;
  currenResult /= userInput;

  outputResult(currenResult, currentCaculation);
  writeToLog('DIVIDE', currentValue, userInput, currenResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
