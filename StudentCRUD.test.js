
/**
 * Import the array of functions from Student CRUD.js and save it in a variable (getData)
 */
const getData = require("./Student CRUD");

/** Description of the functions */
describe("Testing of Fetch functions", () => {

   /** 
    * Test the first function 
    * Test if the atributes values are strings, numbers or empty values
    */
   
    it("Test data from Json Server to check if responses correspond to Students Data types", async() => {

        let myObject = await getData[0]();
        
        myObject.forEach((data) => {
            expect(typeof data.firstName).toMatch("string");
            expect(typeof data.lastName).toMatch("string");
            expect(typeof data.age).toMatch("number");
           
            expect(data.firstName).not.toBe("");
            expect(data.lastName).not.toBe("");
            expect(data.age).not.toBe("");
        });
    })   
     
    ///////////////////////////////////////////////////////////////

    /**
     * Test the secon function
     * Test to check if the response of the function is going to be equal to the input parameter
     */

    it("Test if the response is going to be 0", () => {
        
        expect(getData[1](5)).toBe(0);
        expect(getData[1](15.7)).toBe(0);
        
        expect(getData[1](15.7)).not.toBe(1);
        expect(getData[1](15.7)).not.toBe("");
    })

    ///////////////////////////////////////////////////

    /*
    * Test the third function
    * Returning a welcome greetings to every input string
    */ 

    it("Adding Welcome to every string", () => {
        expect(getData[2] ("Marija")).toMatch("Welcome Marija");
    })


    ////////////////////////////////////////////////

    /*
    * Test the fourth function
    * Calculating the average of the sum of all the given values
    */

    it("Test the response to equal the expected average",() => {

        expect(getData[3](5,10,6)).toBe(7);

    })

    ////////////////////////////////////////////////

    /**
     * Test the fifth function
     * Checking if the grade corresponds to a certain condition in the function statements, to correspond to expected evaluation
     */

    it("Checking where the grade fits in the function statements and comparing it to the expected parameter",() => {

        expect(getData[4](45)).toBe("F");
        expect(getData[4](55)).toBe("E");
        expect(getData[4](69)).toBe("D");
        expect(getData[4](75)).toBe("C");
        expect(getData[4](88)).toBe("B");
        expect(getData[4](98)).toBe("A");
        expect(getData[4](90)).toBe("A");
        expect(getData[4](60)).toBe("D");
        expect(getData[4](100)).toBe("A");
    })
});    