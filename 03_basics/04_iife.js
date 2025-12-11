//Immediatiately Invoked Function Expressions (IIFE)

(function chai (){
    //named IIFE
    console.log(`DB CONNECETED`);
})();


((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('somu')