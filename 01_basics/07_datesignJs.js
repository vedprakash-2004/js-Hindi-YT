let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate = new Date (2025, 11, 5);
// let myCreateDate = new Date (2025, 11, 5, 6, 35)
// let myCreateDate = new Date("2025-11-15")
let myCreateDate = new Date("01-11-2025")
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time`

newDate.toLocaleDateString('default',{
    weekday:"long",
})