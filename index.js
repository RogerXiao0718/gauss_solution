const readline = require("readline");

function gauss_solution() {
  //main function
  getAugMatrix().then(augMatrix => {
    augMatrix = arrangeMatrix(augMatrix);
    for (
      let rowPointer = 0, colPointer = 0;
      rowPointer < augMatrix.length &&
      !augMatrix[rowPointer].every(val => val === 0);
      rowPointer++, colPointer++
    ) {
      for (
        let i = rowPointer + 1;
        augMatrix[rowPointer][colPointer] === 0 && i < augMatrix.length;
        i++
      ) {
        if (augMatrix[i][colPointer] !== 0) {
          augMatrix = rowInterchange(augMatrix, rowPointer, i);
          break;
        } //將列調換使augMatrix[rowPointer][colPointer]為引導係數
      }
      while (augMatrix[rowPointer][colPointer] === 0) {
        colPointer++;
      }
      augMatrix = simplifyMatrix(augMatrix, rowPointer, colPointer);
      augMatrix = arrangeMatrix(augMatrix);
    }
    printMatrix(augMatrix);
  });
}

const ask = async function() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question("Enter a list of number(space seperated): ", function(answer) {
      rl.close();
      resolve(answer);
    });
  });
};

async function getAugMatrix() {
  let userInput;
  let augMatrix = [];
  for (let i = 0; userInput !== "x"; i++) {
    userInput = await ask();
    if (userInput !== "x") {
      let userInputArray = userInput.split(" ");
      augMatrix.push(
        userInputArray.map(val => {
          return parseInt(val);
        })
      );
    }
  }
  return augMatrix;
}
function arrangeMatrix(matrix) {
  //將全為0的列踢下去
  let zeroMatrix = matrix.filter(arr => {
    return arr.every(val => val === 0);
  });
  let notZeroMatrix = matrix.filter(arr => {
    return !arr.every(val => val === 0);
  });
  return [...notZeroMatrix, ...zeroMatrix];
}

function rowInterchange(matrix, row1, row2) {
  const temp = matrix[row1];
  matrix[row1] = matrix[row2];
  matrix[row2] = temp;
  return matrix;
}

function simplifyMatrix(matrix, rowPointer, colPointer) {
  if (matrix[rowPointer][colPointer] === 0) return matrix;
  //讓陣列的某一列出現 引導係數 1
  matrix[rowPointer] = matrix[rowPointer].map(val => {
    return val / matrix[rowPointer][colPointer];
  });
  for (let i = rowPointer + 1; i % matrix.length !== rowPointer; i++) {
    const targetIndex = i % matrix.length;
    const subtrahendArray = arrayMultiplicate(
      matrix[rowPointer],
      matrix[targetIndex][colPointer]
    );
    matrix[targetIndex] = arraySubtract(matrix[targetIndex], subtrahendArray); //ex. R(1) = R(1) - R(0)
  }
  return matrix;
}

function printMatrix(matrix) {
  console.log(
    matrix
      .map(val => {
        //return val.join(" ");
        val = val.map(el => {
          if (!Number.isInteger(el)) {
            return el.toFixed(2);
          } else {
            return el;
          }
        });
        return val.join(" ");
      })
      .join("\n")
  );
}

function arrayMultiplicate(arr, mul) {
  return arr.map(val => val * mul);
}

function arraySubtract(arr1, arr2) {
  //arr1 - arr2
  return arr1.map((val, index) => {
    return val - arr2[index];
  });
}

gauss_solution();
