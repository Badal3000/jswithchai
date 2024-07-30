const name = "Badal";
const repocount = 50;
//console.log(name + repocount + "value")
//[``] this is called string interpolation
console.log(`hello my namme is ${name} and my repocount is ${repocount}`);
const gamename = new String('BAdal chaurasia');
console.log(gamename[0]);
console.log(gamename[1]);
console.log(gamename.__proto__);
// using objects in strings basically string manipulation
//.length -> gives the length of the string
console.log(gamename.length);
//.toUppperCase -> converts the string into  uppercase letters
console.log(gamename.toUpperCase())
//.charAt -> gives the position of the character oin the string
console.log(gamename.charAt(2));
//.indexOf -> gives the index of the character in the string
console.log(gamename.indexOf("c"));
//.subsring-> lets store the gamename into a variable and divide into a string
const newstring = gamename.substring(0,10)
console.log(newstring)
//.slice->it will slice from last too as we can give it negative values also
const anotherstring = gamename.slice(-8, 5)
console.log(anotherstring)
//.trim() -> removes the spaces from the string
const nnewstringtrimmed  = "  hello  "
console.log(nnewstringtrimmed.trim());
//.repalce -> replaces a string
const newstringthree = "https://heello"
console.log(newstringthree.replace("//" , "-"))
//.includes-> checks if my string consists of the character or not
console.log(gamename.includes("B"));
