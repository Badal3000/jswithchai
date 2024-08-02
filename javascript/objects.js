//what are objects?
//for the simple understanding the objects are key value pairs
/* 
    how can we define objects?
    -> objects can be defined in two ways
    1. object literals
    2.object constructors
 */

// 1. object literals
/*const juser = {} // empty object
console.log(juser)*/


const juser = {
    name : "hitesh",
    age : 21,
    location : "Mumbai",
    email : "abc@gamil.com",
    isloggedin : false,
    lastlogindays : ["monday", "saturday"]
}

//accessing the objects
console.log(juser.email)
console.log(juser["email"])

//if we have object like 
const user = {
    "name" : "badal"
}
/*
    the we can access it using 
    console.log(user."badal")
 */
console.log(user["name"])

//to define symbols in objects

const mysym = Symbol("key1")
const auser = {
    [mysym] : "key11"
}
console.log(auser[mysym])
//we can change value as
juser.email = "xyz@gmail.com"
//console.log(juser["email"])

//if we want that our values in object should not change then we use freeze function
Object.freeze(juser)
juser.email = " pqr@gmail.com"
console.log(juser["email"])

