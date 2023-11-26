// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
//Input: create an array that combines two arrays
//output: get the output length from the two variable
//add both .length for both arrays to get 9
//using .concat to combine two arrays
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
//have to use .push to get the new length
console.log.push

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
//input: reverse the letters of a string
//output: string is reversed
//,reverse defines reverses the order of the values in an array
// console.log(currentCohort.reverse())-not a function 
//need to create another console.log without .reverse
// console.log(currentCohort)
//.split to make string to array
// console.log(currentCohort.split())
const stringToArray = currentCohort.split("")
//reverses the string
stringToArray.reverse()
//getting the array into string
// console.log(stringToArray)
//need to use .join 
//need quotation marks and no space between them
console.log(stringToArray.join(""))



// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
//input:create an array to log the numbers
//output:only logs the odd numbers not the even numbers
//use for loop
//use if statement

for (let i = 0; i < stockExchange.length; i++){
    if( stockExchange[i] % 2 !==0){
        console.log(stockExchange[i])
    }
}


    