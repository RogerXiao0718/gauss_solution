const ask = require('./ask.js');

 //列與行的pointer

function gauss_solution() {
    let userInput;
    let augMatrix;
    let rowPointer = 0, colPointer = 0;
    let tempBuffer; //存垃圾
    for (let i = 0;userInput !== 'x'; i++) {
        userInput = await ask();
        let userInputVector = userInput.split(' ');
        augMatrix[i] = userInputVector;
    }
    for(let i = rowPointer; (augMatrix[rowPointer][colPointer] === 0) && i < augMatrix.length; i++) {
        augMatrix = rowExchange(augMatrix, rowPointer, (rowPointer+1)/augMatrix.length);
    }

}

function rowInterchange(matrix, row1, row2) {
    const temp = matrix(row1);
    matrix[row1] = matrix[row2];
    matrix[row2] = temp; 
    return matrix;
}

function letRowFixed(matrix, rowPointer, colPointer) {
    for(let i = rowPointer; i% matrix.length !== rowPointer; i++) {

    }
}

function arrayMultiplicate(array1, mul) {

}


gauss_solution();