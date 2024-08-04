const juser = {
    name : "hitesh",
    age : 21,
    location : "Mumbai",
    email : "abc@gamil.com",
    isloggedin : false,
    lastlogindays : ["monday", "saturday"]
}

const arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
for(let i = 0; i < juser.length; i++){
    console.log(juser[i])
}
//for in loop -~= foreign loop where we access objects through keys
let text = ""
for(let key in juser){
    text = text + juser[key];
}
console.log(text)


