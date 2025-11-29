const name = "somu"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('somujha');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-4, 3)
console.log(anotherString);

const newStringOne = "    Somu  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://somu.com/somu%20jha"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'))
console.log(gameName.split('-'));