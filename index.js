readline = require("readline");

const ask = function() {
    return new Promise((resolve, reject) => {
        rl = readline.createInterface({
            input: process.input,
            output: process.output
        })
        rl.question("Enter a list of number(space seperated): ", function(answer){
            resolve(answer);
        })
    })
}