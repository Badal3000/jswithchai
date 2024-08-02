//object constructors
const user = new Object()
console.log(user)

// or  we can define it as
const tinderuser = {}
console.log(tinderuser)

//to insert values in the objects
tinderuser.id = "123abc"
tinderuser.name = "badal"
tinderuser.isloggedin = true;
tinderuser.age = 21

//accesing these objects data 
console.log(tinderuser.name)

//lets see what we will do if we want to insert object inside an object and how to access it
//object inside object {nesting of objects}
const regular_user = {
    email:"abc2gmail.com",
    fullname : {
        userfullname : {
            fname : "badal",
            lname : "chaurasia"
        }
    }
}
console.log(regular_user.fullname)
console.log(regular_user.fullname.userfullname)
console.log(regular_user.fullname.userfullname.fname)
console.log(regular_user.fullname.userfullname.lname)

// combining objects

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}
//const obj3 = {obj1, obj2}
//console.log(obj3)

//we can also use the assign function for the same
//const obj4 = obj4.assign({},obj1,obj2)
//console.log(obj4) 


// we can also do this with spread operators which is ...
const obj3 = {...obj1, ...obj2}
console.log(obj3)

/*
    when values will come from database it will come as array of objects.
 */
/*const user1 = [
    {
        id:1,
        email : "abc&gmail.com",
        {

        },
        {

        }
    }
]*/