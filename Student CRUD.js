
/**
 * import cross-fetch for testing fetch funktions 
 */
const { default: fetch } = require("cross-fetch");

/**
 * This function is for Fetching Data
 * @returns Data (myObjects) from Json file via  URL "http://localhost:2000/students".
 */

async function getStudentData() {
 
    // waiting for students response from the URL 
    let response = await fetch("http://localhost:2000/students");
    
    // waiting for data and convert it to Js object ??????????????????
    myObjects = await response.json();

    // return the JS object
    return myObjects;
      
}

////////////////////////////////////////////////////////////////////////////
/**
 * 
 * @param {
 * 
 * } number it is a parameter that takes the value 
 * @returns invert (the result of mutiplication)
 */

function numberInvert(number) {
  // Multiply any number by 0
let invert = number * 0;
  return invert;
}

/////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {string} name  it is a parameter that takes a name
 * @returns output ( welcome message)
 */

function justAddText(name) { 

  // welcome message to the indicated name
        let output = `Welcome ${name}`;

        return output;
}

////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {number} degree1  the first parameter that takes a degree 1
 * @param {number} degree2  the second parameter that takes a degree 2
 * @param {number} degree3  the third parameter that takes a degree 3
 * @returns the avarage
 */

function avarage(degree1, degree2, degree3) {

  // The sum of all the values
  let sum = degree1 + degree2 + degree3;

  // The avarage (the sum of all the values divided by the total number of values)
  let avg = sum / 3;
  
  return avg;
}

/////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {number} grade it is a parameter that takes a grade
 * @returns the evaluate of the grade
 */

function evaluate(grade) {

let  x ="";

//it's a grades interval between 50 and 100. "A" is the highest score you can get and "E" the lowest.
   
//the evalute will be (F) if the grade is less than fifty
if (grade<50 && grade >=0) { x = "F"}

   //the evalute will be (E) if the grade is equal or more than fifty and less than sixty
   else if(grade>=50 && grade<60){ x= "E"}

  //the evalute will be (D) if the grade is equal or more than sixty and less than seventy
   else if (grade>=60 && grade<70) { x= "D"}

//the evalute will be (C) if the grade is equal or more than seventy and less than eighty
   else if (grade>=70 && grade<80) { x= "C"}

//the evalute will be (B) if the grade is equal or more than eighty and less than ninety
   else if (grade>=80 && grade<90) { x= "B"}

//the evalute will be (A) if the grade is equal or more than ninety and equal or less than  hundered
   else if (grade >= 90 && grade <= 100) { x= "A"}
  
  return x;
}

////////////////////////////////////////////////////////

// Export an array of functions
module.exports = [getStudentData, numberInvert, justAddText, avarage, evaluate];