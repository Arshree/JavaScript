//let age = 15;
// let mode = "dark";
// let color;

// if (age > 18){
//     console.log("you are able to vote");
// }
// else{
//     console.log("you cannot vote");
// }

// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color= "white";
// }
//
// console.log(color);

//  let a = 15;
//  let b = 1;

// if (no%2 == 0){
//     console.log(no, "Even no");
// }
// else {
//     console.log(no, "Odd no");
// }

//unary operaters ( increment, decodeURIComponent, post increment, 
// pre increment, post incremnet, pre increment);
// console.log("a = ", a, "b= ", b);
// a++;
// ++a;
// a--;
// --a;
// console.log("a = ", --a);

// console.log( " a =", a);

//console.log(" a = ", a);


// assignmnet operaters
// let a = 12;
// let b = 2;
// let c = 5;

//console.log(" a = ", a++); //4
// console.log(" a = ", a += 1); //6
// console.log(" a = ", a -= 1); //5
// console.log(" a = ", a *= 5); //25
// console.log(" a = ", a /= 5); //5
// console.log(" a = ", a %= 5); //1
// console.log(" a = ", a **= 2); //16
// console.log(" a=b = ", a != b);
// console.log(" a=b = ", a ==b );
// console.log(" a are equal or not with database check c: ", a === c);
// console.log(" a are equal or not with database check c: ", a !== c);

//console.log(" 12 > 2 && 2 < 12 ", a < b || a > c);

// let no = 28767387824;
// if (no%2 == 0){
//     console.log("Even Number");
// }else{
//     console.log("its odd no");
// }

// let mode = "dark";

//let age = 18;

// if(age >= 18){
//     console.log(" Vote");
// }
// else{
//    console.log("not able");
// }

// let mode = "dark white";

// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "white"){
//     color = "white";
// }
// else if(mode === "dark blue"){
//     color = " blue ";
// }
// else{
//     color = "pink";
// }

// console.log(color);

// let age = 25; 
// let result = age >= 18 ? "vote" : "not vote"; // Ternary Operators
// console.log(result);

// age>= 18 ? console.log("vote") : console.log("not vote");

//MDN Docs

//alert("hello"); //one time popup

// let name = prompt("hello");
// console.log(name);

// let no = prompt("Enter no");
// if(no%5 === 0){
//     console.log(no, "is multiply by 5");
// }else{
//     console.log(no, "is not multiply by 5");
// }

// let score = prompt("Enter the score (0-100)");
// let score = 75;

// if(score <= 100 && score >= 90){
//     console.log(score, "Grade is A");
// }
// else if(score <= 89 && score >= 70){
//     console.log(score, "Grade is B");
// }
// else if(score <= 69 && score >= 60){
//     console.log(score, "Grade is C");
// }
// else if (score <= 59 && score >= 50){
//     console.log(score, "Grade is D");
// }
// else if (score <= 49 && score >=0){
//     console.log(score, "Grade is F");
// }
// else 
// {
//     console.log(score, "Not valide grade, please enter correct grade");
// }

// Loops
// for loops while
// for(let i = 1;    i<=5;    i++)
//    initialization stopping updation

// for(let count = 1; count <= 5; count++){
//     console.log("Apna collage");
// }

// let n=0;
// for (let i=1; i>=0; i++){
//     n = n+i;
// }
// console.log(n);

//loop never ends

//while (condition){}
// let i=1;
// while(i<=15){
//     console.log("i =", i);
//     i++;
// }

//do-while loop
// let i=1;
// do{
//     console.log("i = ", i);
//     i++;
// }while(i<=10);

// let str = "JavaScript";
// let size = 0;

// for (let val of str) // iterator = characters
// {
//     console.log(" val :", val);
//     size++;
// }
// console.log(size);

// let stu = {
//     name: "rahul",
//     code: "Javascript",
//     company: "carnera",
// };
// for(let key in stu){
//     console.log("key =", key, "Value =", stu[key] );
// }

//assignment
//Q1. Print all even no's from 0 to 100;

// for(i=0; i<=100; i++){
//     if(i%2 === 0){
//         console.log("even no:", i);
//     }
// }

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the 
// game number untile user enteers corrrect number. 

// let gameNum = 25;

// let userNum = prompt("Guess the no:");
// if(userNum === gameNum){
//     console.log("You are guess correxct num");
// }
// else {
//     console.log("Please guess correct num");
// }

// while(userNum != gameNum){
//     userNum = prompt("Please guess correct num");
// }

// console.log("congratulations you enter the right number");

// let str = "Arun";
// console.log(str[0]);

// let obj = {
//     name: "Arun",
//     org: "Carnera",
//     role: "Tester",
//     salary: 10000,
// }

// console.log("name of the person", obj.name, 
//     "organazation is", obj.org, 
//     "and salary is", obj.salary);

//String interpolation is below written - To create string by doing subtution of placeholders
//`string text ${expression} string text` 
// let output = `name is ${obj.name} and company is ${obj.org} and salary is ${obj.salary}`;
// console.log(output);

// let str = "rahul";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(1,2));

// let str1 = "good";
// let str2 = "morning";
// let res = str1.concat(str2); //str1 +str2; concat
// console.log(res);

// let str3 = "Carnera";
// let str4 = (str3.replace("C", "getC"));
// console.log(str4);
// console.log(str4[2]);

// let userName = prompt("Enter the full name without space");
// let u_length= userName.length;
// console.log("The user name is : " + "@" + userName + u_length);


// let arr = [12, 34 , 556, 78, 89];

// console.log(arr);
// console.log(arr.length);
// arr[3] = 23;
// console.log(arr);

//let heroes = ["spiderman", "ironman", "shaktiman", "thor", "hulk", "spiderman", "antman" ];
// console.log(heroes[0]);
// console.log(heroes[1]);
// console.log(heroes[2]);

// for(let i=0; i<heroes.length; i++)
// {
//     console.log(heroes[i]);
// }

//for off
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["delhi", "pune", "hydrabad", "mumbai", "chenai"];

// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let totalmarks = 0;

//let totalmarks = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];

// for(let val of marks){
//     totalmarks = totalmarks + val;
    //totalmarks += val;
// }

// for (let i=0; i<marks.length; i++){
//     totalmarks = ;
//     console.log("totalmarks", totalmarks);
// }

// console.log("totalmarks", totalmarks);
// let avg = totalmarks/marks.length;
// console.log(avg);

// console.log(`total marks of class is = ${totalmarks} and avrg of the class is = ${avg}`);


// let item = [250, 645, 300, 900, 50];
//let max = Math.max(item);
// let max = item[0];

// for (let val of item){
//      offer = val/10;
//      val = val - offer;
//      console.log(val);
// }
//console.log(val);

// for (i=0; i<item.length; i++){
//     let offer = item[i]/10;
//     item[i] = item[i] - offer; //item[i] -= offer;
//     //console.log(`after the 10% off to item items = ${item[i]}`);
// }
// console.log(item);

// for (i=0; i<item.length; i++){ //maximum no of array
//     if(item[i]>max){
//     max = item[i];
// }
// }
// console.log("Maximun number is:", max);

// let i=0;
// for(let val of item){
//     console.log(val);
//     val = val>i;
//     i++;
//     // console.log(val[i]);
// }
//console.log(Math.min(...item));
//console.log(Math.max(...item));

// let arr = [12, 13, 14, 15];
// arr.push(16); 
// console.log(arr);
// let deleteArr = arr.pop();
// console.log("after detele", deleteArr);
// console.log(arr);

// console.log(arr.toString());

// let arr2 = ["a", "e", "i", "o", "u"];
// let arr3 = [16, 17, 18, 19];
// let newArr = arr.concat(arr2, arr3);

// newArr.unshift(11);
// console.log(newArr);

// newArr.shift(11);
// console.log(newArr);

// //let cut = newArr.slice(1, 3);
// console.log(newArr.slice(4, 6));

//splice() method - replace
//arr.splice(2,1,90);

//add through splice()
//arr.splice(2, 0, 101);

// delete through splics
//arr.splice(3,1);


//let compnies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//removing first company from array
//let removeFirst =  compnies.shift(1);
// console.log(removeFirst);
// compnies.shift(1);
// console.log(compnies);

//replace uber to ola
// compnies.splice(2, 1, "Ola");
// console.log(compnies);

//Add Amazon on edd
// compnies.push("Amazon");
// console.log(compnies);

//Functions
// function sum(x, y){
//     s = x + y;
//     return s;
// }

// console.log(sum(23, 34));

// const mulNo = (x, y)=>{
//     return x * y;
// }

// mulNo(23, 10);

// function vowelsCount(str){
//     let count = 0;
// for(i=0; i<=str.length; i++){
//     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//         count++;
//     }
//     //console.log(str[i]);
//     //console.log(count);
// }
// console.log(count);
// return count;
// }

// vowelsCount("my Name is arun");


// function countVowel(s){
// let count = 0;
// for (i=0; i<s.length; i++){
//     if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
//         count++;
//     }
// }
// console.log(count);
// }

// countVowel ("aioue");

// const countofconsonants = (s) =>{ //arrow function
//     let count = 0;
//     for (i=0; i<s.length; i++){
//         if (!(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u")){
//             count++;
//         }
//     }
//     return count;
// }

// countVowel("shrimanrayan");

const countVowel = (word) =>{
let count =0;
for(let char of word){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
}
return count;
}

