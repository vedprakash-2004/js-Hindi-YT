const user = {
    username: "somu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this.username);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "somu"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "somu"
//     console.log(this.username);
// }


const chai = () => {
    let username = "somu"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>   num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));

