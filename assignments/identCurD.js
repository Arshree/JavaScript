// const itemName = 'Software';
// let stockCount = 25;
// 3.
// for(let i=0; i<5; i++){
//     console.log(i);
// }

// var price = 100; //its will logged 200 because var is function scoped and we tried with let and const it will give 100 value
// if (true) {
//   var price = 200;
// }
// console.log(price); 
// 1. it will be logged with 200
// 2. because var declaration with 100 before the if loop and var can re-declare and re-assign the value. so it can't use.
// 3. 
// let price = 100;
// if(true){
//     let price = 200;
// }
// console.log(price);


// {
// var env = "QA";
// let region = "US";
// const browser = "Chrome";
// }
// console.log(env); 
// console.log(region); 
// console.log(browser);
// 1. it will log 10 because var is function scoped 
// 2. it will give error because let is blocked scoped
// 3. it will give error because const is blocked scoped (identCurD.js:21 Uncaught ReferenceError: region is not defined)

// console.log(a); // it will give error beacuse a intialized after the console.log statement
// let a = 10;
// 1. No. 
// 2. Yes, because a intialize after the console.log statement.
// 3. no. its initialization
// 4. its also give the error(same error).

// console.log(testStatus);
// var testStatus = "PASSED";
// console.log(testResult);
// let testResult = "FAILED";
// console.log(testURL);
// const testURL = "google.com";

// 1. const URL = "url.com";
// 2. let username = "username";
// 3. let inside the for loop

// 1. always const will be = base URL
// 2. const should be = browser type
// 3. var should be avoid because it is function scoped not block scoped

// failed test cases

// 1. base url decclare with const so cannot change the value (Assignment to the const variable).
// 2. using the let instead of const declaration
// let baseUrl = "https://qa.app.com";
// baseUrl = "https://staging.app.com";
// console.log(baseUrl);

// let status = "FAILED";
// if (true) {
//   let status = "PASSED";
//   console.log("Inside:", status); //output is PASSED
// }
// console.log("Outside:", status); //OUTPUT IS FAILED

// var testId = 101;
// var testId = 202;
// let userId = 1;
// let userId = 2; //error because let cannot be re-declared
// console.log(testId, userId);

// same const assigment error (Assignment to sonst variable)

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log("Test", i), 100);
// }
// for (let j = 1; j <= 3; j++) {
//   setTimeout(() => console.log("Case", j), 100);
// }

// let testStatus = "PASSED";

// function runTest() {
//   console.log("Before:", testStatus);  
//   let testStatus = "FAILED";  
//   console.log("After:", testStatus);   
// }

// runTest();

// const results = ["PASSED", "FAILED"];
// results.length = 0;
// console.log("Step 1:", results);

// results.push("PASSED");
// console.log("Step 2:", results);