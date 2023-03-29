const Sentiment = require('sentiment');

const sentimentPackage = new Sentiment();

const result = sentimentPackage.analyze('Cats are super cool')

console.log(result)

// var variable = 'this'
// const variable_2 = 'cannot be changed'
// let = variable_3 = 'can be changed'

// function SayHello(variable, variable2){
//     console.log(variable, variable2)
// }

// SayHello("Good Evening!", 'Hello Cool People!')

// displayName(10,5)
// function myName(name){
//     if (name === "Mad"){
//         return true
//     }
//     return false
// }

// function displayName(name){
//     if (myName(name)){
//         console.log("Hello ".concat(name))
//     }
//     else {console.log("Not my name")}
// }

// displayName("Mad")