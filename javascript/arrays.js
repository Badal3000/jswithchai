const myArr = [0,1,2,3,4,5,6] // array of numbers
console.log(myArr)

const myHeroes = ["shaktiman", "naagraaz"]  // array of strings
console.log(myHeroes)

//ARRAY METHODS

//to add an element in the array
myArr.push(7)
console.log(myArr)

// to delete element from the last in the array
myArr.pop()
console.log(myArr)

//to insert element at the starting position
myArr.unshift(9)
console.log(myArr) // but we have to shift all the elements so increasing the space complexity of the program


// to  rempve element from the START

myArr.shift()
console.log(myArr)

//to change the array into a string
const newArr = myArr.join()
console.log(newArr)

//splice and slice
//we will see the differece betwween the after every part with printing th eoriginal array
//slice
const n1 = myArr.slice(1,3)
console.log(n1)
console.log(myArr)//here in slice we can see that it returns a copy of part of the ARRAAY within the given range without any changes done to the oroiginal array
// in slice it doesnt include the last range 

//splice
const n2 = myArr.splice(1,3)
console.log(n2)
console.log(myArr)
//here we can see that it returns the actual value within the range with including the last value and removes that part from the actual array too
