// const { use } = require("react");   // ❌ React remove because Node cannot load react

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

// console.log(loginUserMessage("somu"))


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2,...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400, 2000))

const user = {
    username: "somu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 500, 1000]));

