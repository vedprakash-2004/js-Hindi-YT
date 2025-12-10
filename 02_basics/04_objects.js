// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

//  console.log(tinderUser);

const regularUser = {
    email: "somu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "somu",
            lastname: "jha"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "somu@gmail.com"
    },
    {
        id: 2,
        email: "jha@gmail.com"
    }
];

console.log(users[1].email);   // ✔ jha@gmail.com


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in  hindi",
    price: "999",
    courseInstructor: "somu"
}

//course.courseInstructor
const{courseInstructor: instrutor} = course

//console.log(courseInstructor);
console.log(instrutor);

// {
//     "name"; "somu",
//     "coursename": "js in hindi",
//     "price": "free"
// }

{
    {},
    {},
    {}
}