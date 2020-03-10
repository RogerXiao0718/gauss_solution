const readline = require("readline");

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

module.exports = ask;
