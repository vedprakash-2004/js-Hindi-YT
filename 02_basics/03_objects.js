//singleton
//object.create

const { jsx } = require("react/jsx-runtime")

//object literals
const mySym = Symbol("key1")

const JSUser = {
    name: "somu",
    "full name": "somu jha",
    [mySym]: "mykey1",
    age : 18,
    location: "Noida",
    email: "somu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JSUser.email)
// console.log(JSUser["email"])
// console.log(JSUser["full name"])
// console.log(JSUser[mySym])

JSUser.email = "somu@chatgpt.com"
Object.freeze(JSUser)
JSUser.email = "somu@microsoft.com"
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS user");
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
