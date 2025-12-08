const { use } = require("react");

function sayMyName(){
    console.log("s");
    console.log("o");
    console.log("m");
    console.log("u");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1+number2
}
const result = addTwoNumbers(3, 4)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please endter a username");
        return
    }
    return `${username}just logged in`
}
//    console.log(loginUserMessage("somu"))

console.log(loginUserMessage("somu"))
