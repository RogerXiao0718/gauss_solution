const ask = require('./ask.js');

let userInput;
let augMatrix;
let rowPointer = 0, colPointer = 0; //列與行的pointer

function rowExchange(matrix, row1, row2) {
    const temp = matrix(row1);
    matrix[row1] = matrix[row2];
    matrix[row2] = temp; 
}


for (let i = 0;userInput !== 'x'; i++) {
    userInput = await ask();
    let userInputVector = userInput.split(' ');
    augMatrix[i] = userInputVector;
}