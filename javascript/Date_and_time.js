//date is an oject in javascript
let myDate = new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
// we convert the date into strings for the result to be in better format
let myCreatedDate = new Date(2024, 2, 23)
console.log(myCreatedDate.toDateString())
//Time stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp) // gives the values in milliseconds we will use this milliseconds for the comaprisons always but we can convert it into seconds by dividing it by thousands
console.log(myCreatedDate.getTime()); // we can directly fetch timeby using the function get time it also gives the value in milliseconds
// lets convert the timestamp given in milliseconds into the seconds
console.log(Math.floor(Date.now()/1000))

//if we want to  know some specific details about the date we can used the keywords for the same
//eg:
let newDate1 = new Date()
console.log(newDate1.toDateString());
console.log(newDate1.getMonth());
console.log(newDate1.getDay());
newDate1.toLocaleString(`default`,  {
    weekday : "long"    // we can define things here which we want to store in the date;
})