//lets consider we have written any code we bind it as a package and we use the package wherever we want to use it

function callmyname(){
    console.log("badal")
}
callmyname()

function additionoftwo(n1, n2){
    console.log(n1+n2)
}
additionoftwo(4, 5)
const added = additionoftwo(4,5)
//console.log(added)
//lets see if we want to return the value to store it into another value as well as how to print it
function addingtwo(n1, n2){
    return n1+n2
}
const addedvalue = addingtwo(7, 13)
console.log(addedvalue)

function loginmessage(username) {
    return `${username} just looged in`
}
console.log(loginmessage())
console.log(loginmessage("badal"))

// to remove the undefined statement we can use if else conditional statements

function usermessage(username){
    if(username == undefined){ //we can also write this conditional statement as if(!username) and to avoid this undefined statement comepletely we can use usermessage(username = "badal")
        console.log("Please enter a username")
        return
    }
    return `${username} just looged in`
}
console.log(usermessage())
console.log(usermessage("badal"))
//how to pass objects in the function
const user = {
    username : "badal",
    age : 21

}
function handleobject(newobj){
    console.log(`username is ${newobj.username} and the age is ${newobj.age}`)
}
handleobject(user)

// we can also do the printing part of the object without making an actual object as

handleobject({
    username : "ram",
    age : 30
})


// we can also pass the arrays in the function

const arr = [100, 200, 300, 400, 500]
function secondelement(tharr){
    return tharr[1]
}
console.log(secondelement(arr))
