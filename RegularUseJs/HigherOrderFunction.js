// function name(name,callFunction){
//  callFunction()  
//  console.log('may name is' +name) 

// }

// function title(){
//     console.log('Web developer')
// }

// console.log(name('Mozahid',title))




// function name(name,callFunction){
//  callFunction(23)  
//  console.log('may name is' +name) 

// }

// function title(old){
//     console.log('I am' +old+ 'years old')
// }

// console.log(name('Mozahid',title))






// return function to function
// function welcome(name){
//     console.log('Welcome to My page'+name)
//     return function howIam(title){
//         console.log('I am a web Developer'+title)
//     }
// }

// console.log(welcome('mozahid') ('web Developer'))



// pass variable

var name=function(name){
    console.log('I am a web developer may name is'+name)
}
var result=name
console.log(result('Mozahid'))
