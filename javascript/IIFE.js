// IIFE stands for immediately invoked function expression

   (function chai(){
    console.log(`db connected`)

   })();

//   global scope ke pollution ke wajah se problems hoti hai kayi baar usko prevent karne ke liye IIFE use hoti hai

( (name) => {
    console.log(`db connected ${name}`)
})(`badal`)