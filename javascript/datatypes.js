//primitive datatypes 
// they are also called as call by value datatypes
//1. string
let as = "absvnovoaonvojdaovfniuafdv"
console.log(as)
//2.number
let a = 1002
let b = 1002.2
console.log(a,b)
//3. boolean
console.log(2>1)
//4.null
let r = null
console.log(r)
//5. undefined
let z;
console.log(z)
//6.symbol
let x = Symbol('121')
let anotherx = Symbol('121')
console.log(x, anotherx)
console.log(x===anotherx)

//non primitive datatypes
//also termeed as call by reference
//1. array
let ans = ["abs", "dfg", "fgrgnfdjobnjisnfv"]
console.log(ans)
//2.objects 
let myobj = {
    name: "badal", age: 22
}
console.log(myobj)
//3.function
const myFunction = function() {
    console.log("Hello World!");
}
console.log(myFunction)