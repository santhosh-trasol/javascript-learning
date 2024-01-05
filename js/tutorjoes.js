// alert("welcome to the santhosh lakshmanan javasript learning section");
// const a = "santhosh";
// console.log(a);
// console.log(typeof a);
// console.table({ fname: "santhosh", age: "25" });
// console.time("time");
// for (i = 0; i < 100; i++) {
//   console.log(i);
// }
// console.timeEnd("time");

// // #$ math functions

// let c;
// c = Math.PI;
// c = Math.E;
// c = Math.round(2.6);
// c = Math.floor(2.9);
// c = Math.ceil(2.1);
// c = Math.sqrt(2);
// c = Math.pow(2, 4);
// c = Math.min(1, 2, 3, 4, 5);
// c = Math.max(1, 2, 3, 4, 5);
// c = Math.random();
// c = Math.floor(Math.random() * 5 + 1);
// c = Math.abs(-50);
// c = Math.sign(50);
// c = Math.trunc(2.948438445);
// console.log(c);

// // #$ comparision operators

// a = 10;
// b = "10";
// console.log(a == b);
// console.log(a === b);
// c = 11;
// console.log(a != c);

// // #$ Relational operator

// a = 10;
// b = 55;
// console.log("greater: ", a > b);
// console.log("lesser : ", a < b);
// console.log("greater then equal : ", a >= b);
// console.log("lesser :", a <= b);

// // #$ logical operators

// var mark = 35;
// console.log(mark >= 35 && mark <= 100);
// var a = 5;
// console.log(a == 2 || a == 5);
// var a = 5;
// console.log(!a);

// // #$ strictly operator

// a = 5;
// console.log(a);
// b = "5";
// console.log(a == b);
// console.log(a === b);

// // #$ conditional or ternary operator

// const age = 22;
// const result = age >= 18 ? "Elligible" : "not elligible";
// console.log("Sorry Mr Apllier you are not " + result + " for this aplication");

// function welcome(name) {
//   const result = name ? name : "No name";
//   console.log("hello " + result);
// }
// welcome();
// welcome("Santhosh");

// const user = { name: "sandy", age: 23 };
// console.log(user);
// console.table(user);
// console.log(user.name);

// const greetings = (user) => {
//   const result = user.name ? user.name : "no name";
//   return "Hello " + result;
// };
// console.log(greetings(user));

// const mark = parseInt(prompt("Enter your first number:"));
// const average = 50;
// const grade =
//   average >= 90
//     ? "A Grade"
//     : average >= 80
//     ? "b Grade"
//     : average >= 70
//     ? "C Grade"
//     : "No Grade - better luck next time";
// console.log("Grade: ", grade);
// const num1 = parseInt(prompt("Enter your first number:"));
// const num2 = parseInt(prompt("Enter your second number:"));
// var sum = num1 + num2;
// console.log("Total of " + num1 + " and " + num2 + " is: " + sum);

// #$ todo-list

// var input = document.querySelector("#input");
// var addTodo = document.querySelector("#add-btn");
// var todoContainer = document.querySelector("#todo-parent");
// var delbtn = document.querySelector(".remove-btn");

// addTodo.addEventListener("click", function () {
//   var listItem = document.createElement("li");
//   listItem.innerHTML = ` ${input.value} <button class="remove-btn" onclick="del(event)">Remove</button>`;
//   todoContainer.append(listItem);
// });
// function del(event) {
//   event.target.parentElement.remove();
// }

// // #$ conditonal-operator

// var age = 15;
// var result = age >= 18 ? "Elligible" : "Not Elligible";
// console.log(result);

// var info = { name: "santhosh", age: 23 };
// console.log(info);
// console.log(info.name);
// var func = (info) => {
//   var final = info ? info.name : "no name";
//   var fiage = info ? info.age : "No mentioned";
//   return "hello " + final + " and your age is " + fiage;
// };
// console.log(func(info));

// var mark = 79;
// if (mark >= 90) {
//   console.log("A Grade");
// } else if (mark >= 80) {
//   console.log("B Grade");
// } else {
//   console.log("c Grade");
// }
// var grade = mark >= 90 ? "A grade" : mark >= 80 ? "B Grade" : "C Grade";
// console.log(grade);

// // #$ nullish colerating operator

// var a = { name: "Sandy" };
// console.log(a.name);
// a.city ??= "salem";
// console.log(a.city);
// console.log(a);

// // #$ increamnet and decreament

// let a = 5;
// const b = --a;
// console.log("a:" + a, "b:" + b);

// // #$ nested if else

// var english = 85,
//   tamil = 35,
//   maths = 35;
// var total = english + tamil + maths;
// var average = total / 3;
// if (english >= 35 && tamil >= 35 && maths >= 35) {
//   console.log("Result : Passed");
//   if (average > 90 && average <= 100) {
//     console.log("Grade : A");
//   } else if (average > 80 && average <= 90) {
//     console.log("Grade : B");
//   } else if (average > 70 && average <= 80) {
//     console.log("Grade : c");
//   } else {
//     console.log("Grade : D");
//   }
// } else {
//   console.log("Result : Failed");
//   console.log("Grade : No Grade");
// }

// // #$ switch case

// var num = 5;
// switch (num) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

// // #$ compaining case

// var letter = "p";
// switch (letter) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log(letter + " is an vowel");
//     break;
//   default:
//     console.log(letter + " is not an vowel");
//     break;
// }

// // #$ while

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // #$ do while

// let table = 2,
//   limit = 5,
//   i = 1;
// do {
//   console.log(i + " x " + table + " = " + table * i);
//   i++;
// } while (i <= limit);

// // #$ for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var arr = [];
// for (i = 0; i < 100; i += 2) {
//   arr.push(i);
// }
// console.log(arr);
// console.log(arr[48]);

// // #$ nested for loop

// let num = [];
// for (i = 0; i < 3; i++) {
//   num.push([]);
//   for (j = 0; j < 3; j++) {
//     num[i].push(j);
//   }
// }
// console.log(num);
// console.table(num);

// // #$ for of loop

// var names = ["Sandy", "Lakshaman", "Priya", "Gokul", "Dhinesh"];
// for (i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// console.log("for of loop");
// for (let name of names) {
//   console.log(name);
// }

// // #$ for in loop

// let user = {
//   fname: "Santhosh",
//   place: "Chennai",
//   age: 23,
// };
// for (prop in user) {
//   console.log(prop + " : " + user[prop]);
// }

// // #$ looping over objects by converting to an array

// let user = {
//   fname: "Santhosh",
//   lname: "Lakshmanan",
//   age: 23,
// };
// console.log(user);
// var arr_key = Object.keys(user);
// console.table(arr_key);
// var arr_value = Object.values(user);
// console.table(arr_value);

// for (let i = 0; i < arr_key.length; i++) {
//   console.log(arr_key[i]);
//   console.log(arr_value[i]);
//   console.log(arr_key[i] + " : " + arr_value[i]);
// }

// // #$ break in js

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// // #$ continue in js

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // #$ label statement in js

// let user = [
//   ["Santhosh", "Hari", "Dhanush"],
//   ["Dhinesh", "Gokul", "Kavin"],
//   ["Sathish", "Arivu", "Santhosh"],
// ];

// for (let member of user) {
//   inner: for (let group of member) {
//     if (group.startsWith("S")) {
//       console.log("These names are ", group);
//       break inner;
//     }
//   }
// }

// #$ Js string methods

let first_name = "Santhosh";
let last_name = "Lakshmanan";

//  #$ concatanation

let c = first_name + " " + last_name;
console.log("Concatanation :" + c);

// #$ Concat

c = first_name.concat(" ", last_name);
console.log("Concat :" + c);

// #$ Append

c = "Santhosh ";
c += "Lakshmanan";
console.log("Append :" + c);

// #$ Uppercase

c = first_name.toUpperCase();
console.log("Uppercase :" + c);

// #$ escaping
c = "she can't run";
console.log("Escaping :" + c);

// #$ Length

c = first_name.length;
console.log("Length :" + c);

// #$ IndexOf

c = first_name.indexOf("t");
console.log("IndexOf T is : " + c);

// #$ Last Index Of

c = first_name.lastIndexOf("s");
console.log("Last Index Of : " + c);

// #$ CharAt

c = first_name.charAt(3);
console.log("CharAt : " + c);

// #$ Char Code At

c = first_name.charCodeAt(5);
console.log("Char Code at : " + c);

// #$ Substring

c = first_name.substring(2, 6);
console.log("Substring : " + c);

// #$ Substring -without length ending

c = first_name.substring(2);
console.log("Substring : " + c);

// #$ Slice

c = first_name.slice(1, 3);
console.log("Slice : " + c);

c = first_name.slice(-3);
console.log("Slice : " + c);

// #$ Split

c = first_name.split("n");
console.log("Split : " + c);
console.table(c);

// #$ Replace

c = first_name.replace("Santhosh", "Sandy");
console.log("Replace : " + c);

// #$ Includes

console.log(first_name.includes("S"));

// #$ Trim

c = " Hi ";
console.log("Trim : " + c.length);
c = c.trim();
console.log("Trim : " + c.length);

// #% Pad Start - Pad End
c = "4";
c = c.padStart(3, "l");
console.log("Pad Start : " + c);
c = "4";
c = c.padEnd(3, "l");
console.log("Pad End : " + c);

// #$ task
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var addbtn = document.querySelector(".add");
addbtn.addEventListener("click", function () {
  var result = document.querySelector(".result");
  var total = Number(input1.value) + Number(input2.value);
  result.innerHTML = total;
});

// #$ functios
// #$ function with return statement

function add(a, b) {
  return a + b;
}
console.log(add(25, 25));

// #$ function with orbitary arguments

function orbit() {
  let orbit = 0;
  for (let i = 0; i < arguments.length; i++) {
    orbit += arguments[i];
  }
  return orbit;
}
console.log(orbit(2, 2));

// #$ function with spread operator

function total(...arg) {
  let total = 0;
  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  }
  return total;
}
console.log(total(33, 33, 33));

// #$ function expressinon

function expressinon(a, b) {
  return a + b;
}
console.log(expressinon);
console.log(expressinon(50, 50));

// #$ arrow function
// #$ arrow - map()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplyNum = numbers.map((number) => number * 2);
console.log(multiplyNum);

// #$ arrow - filter()

let fruits = ["apple", "grapes", "banana", "Mango", "jackfruit"];
let filterFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filterFruits);

//  #$ arrow - reduce()

console.log(numbers);
let countedNum = numbers.reduce((sum, number) => sum + number, 0);
console.log(countedNum);

// #$ arrow - clousre

let counted = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
let count = counted();
console.log(count);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

// #$ call back function

function callBack() {
  console.log("Hi This Is Call Back Function!");
}

function myCallBack(callBack) {
  callBack();
}
myCallBack(callBack);

// // #$ setTimeOut

// setTimeout(function () {
//   console.log("This is set time out Example");
// }, 3000);

// // #$ setInterval

// setInterval(function () {
//   console.log("This is Set Interval function");
// }, 3000);

// #$ Array
var g = [10, 20, 30, 40, 50];
console.log(g);
console.table(g);

// #$ ForEach methods in Array()
// #$ 1.foreach method to sum of all array

console.log(numbers);
var total = 0;
numbers.forEach((num) => {
  total += num;
});
console.log(total);

// #$ 2.for each method to muliply the array values and push it in new array
var doubleVal = [];
numbers.forEach((num) => {
  doubleVal.push(num * 2);
});
console.log(doubleVal);

// #$ 3.find the max num of element of an array

var max = 0;
numbers.forEach((number) => {
  if (number > max) {
    max = number;
  }
});
console.log(max);

// #$ 4.calculate the average of an array using for each
var total = 0;
numbers.forEach((num) => {
  total += num;
});
var avg = total / numbers.length;
console.log(avg);

// #$ 5. display the even numbers of an array

console.log(numbers);
numbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// #$ 6.update of an array using for each

const names = ["sandy", "rossi", "pecco"];
names.forEach((name, index) => {
  names[index] = name.toUpperCase();
});
console.log(names);

// #$ Map() Method in array

let sqrt = numbers.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.table(sqrt);

const user = [
  { name: "sandy", age: 50, place: "namakkal" },
  { name: "Hari", age: 18, place: "thanjavur" },
  { name: "Ajay", age: 15, place: "Velue" },
  { name: "Naga", age: 19, place: "chennai" },
];
let ok = user.map((users) => ({
  ...users,
  status: users.age >= 18 ? "Elligible" : "Not Elligible",
  birth: users.place.startsWith("n") ? "Place" : "not palce",
}));
console.table(ok);

const dn = numbers.map((number) => number * 2);
console.log(dn);

// #$ modifying array elements - map()

const trans = fruits.map((fruit) => fruit.toUpperCase());
console.log(trans);

// #$ combining arrays - map()

var colors = ["red", "purpple", "yellow", "Green", "gold"];
const combine = fruits.map((combin, index) => combin + "-" + colors[index]);
console.log(combine);
console.table(combine);

// #$ filtering array

var evenNumbers = numbers.map((eve) => eve % 2 === 0);
console.log(evenNumbers);

// #$ extracting properties from an array of objects

const uname = user.map((users) => users.name);
console.log(uname);

// #$ Modifying an array of objects

console.log(user);
const plusAge = user.map((users) => {
  return {
    name: users.name,
    age: users.age + 1,
  };
});
console.log(plusAge);

const wordStats = fruits.map(function (currentValue, index, array) {
  return {
    word: currentValue,
    length: currentValue.length,
    position: index,
    words: array.length,
  };
});
console.table(wordStats);

// #$ filter

let eveNo = numbers.filter((number) => number % 2 == 0);
console.log(eveNo);

// #$ end varrient
