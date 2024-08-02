//object destructuring and json api
const course = {
    coursename: " js",
    courseprice: " 999",
    courseinstructor: "hitesh"
}

const {courseinstructor} = course
console.log(courseinstructor)

//we can also rename it
const {courseinstructor : instructor} = course
console.log(instructor)


//API = Application program interface 
//NOTE : we will see API's further
/*
    what is api?
    = an API is Application Program Interface which is for
    if we want that our work should be done by something else
    


    all the values for api come in the form of the json file 


    how json looks :
    {
        "name" : "badal"
        "coursename" "js"
        "price" : "free"
    }


    in apis json file the key are strings as well as the values


    in api we get input in the form of arrays also

    [
        {},
        {},
        {}
    ]
 */