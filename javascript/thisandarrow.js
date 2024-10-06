// const user = {
//     username : "badal",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome`)
//         console.log(this)
//     }


// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) // this represents an emoty object 

// function chai () {
//     let username = "badal"
//     console.log(this)
// }
// chai() // kafi sari values milengi

// const chai = function(){
//     let username = "badal"
//     console.log(this.username)
// }//here this doesnt know what it is

// const chai = () =>{
//    let username = "badal"

//    consol.log(this);
// }
// chai()  // another method to write a function using this and arrow function


//basic synatx = (()=>{})

const addTwo = function(num1, num2) {
    return num1+num2
}
console.log(addTwo(4,5))

const mul = (num1, num2) => { //explicit function
    return num1*num2
}
console.log(mul(3,3))

const subtract = (num1, num2) => (num1-num2) // implicit function we assume it already knows without us telling it that it belongs to the function
console.log(subtract(10, 5))

