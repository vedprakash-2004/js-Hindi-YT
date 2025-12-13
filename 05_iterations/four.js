const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift: "swift by apple"
}
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(programming[key]);
    // if(Object.hasOwnProperty.call(Object, key)){
    //     const element = Object[key];
    // }
}

const map = new Map()
map.set('USA',"United States of America")
map.set('IN', "India")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(key);
}