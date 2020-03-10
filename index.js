
let userInput;
let augMatrix;

for (let i = 0;userInput !== 'x'; i++) {
    userInput = await ask();
    let userInputVector = userInput.split(' ');
    augMatrix[i] = userInputVector;
} 