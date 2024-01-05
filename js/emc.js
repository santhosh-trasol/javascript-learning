// var fruit = "Apple";
// var prize = 200;
// var no = 3;
// console.log(fruit);
// var total = prize * 3;
// console.log("Output =", +total);

// fuction excersice

// var a = 10;
// var b = 5;
// function add() {
//   console.log(a + b);
// }
// add();

// var factor = "sk";
// var fplayer = "dhoni";
// var fmovie = "leo";
// function favorites() {
//   console.log(
//     "Fav-Actor:" + factor,
//     "Fav-Player :" + fplayer,
//     "Fav-Movie:" + fmovie
//   );
// }
// favorites();

// function area(length, breath) {
//   console.log("Area of Lenght is =" + length);
//   console.log("Area of Breath is=" + breath);
// }
// area(200, 250);

// function addition(a, b) {
//   return a + b;
// }
// var total = addition(20, 30);
// console.log(total);

// if else exc

// var homework = false;
// if (homework) {
//   console.log("Great Job");
// } else {
//   console.log("Finish your homework before playing");
// }

// var season = "winter";
// if (season == "spring") {
//   console.log("Enjoy Blooming flowers");
// }
// if (season == "summer") {
//   console.log("have fun in the sun");
// }
// if (season == "autumn") {
//   console.log("adire the color of leaves");
// }
// if (season == "winter") {
//   console.log("bundle up and stay warm");
// }

// var score = 71;
// if (score < 50) {
//   console.log("You need to improve your game");
// }
// if (score >= 50 && score <= 70) {
//   console.log("good job");
// }
// if (score > 70) {
//   console.log("excellant performance");
// }

// for looop

// for (count = 1; count <= 15; count = count + 1) {
//   console.log(count + " x 2 = " + count * 2);
// }

// for (count = 2; count <= 10; count += 2) {
//   console.log(count);
// }

// DOM MANIPUATION

// var para = document.getElementById("one");
// console.log(para.textContent);

// function changeBtn() {
//   para.textContent = "bye world";
// }

// var value1 = document.getElementById("num1");
// var value2 = document.getElementById("num2");
// var result = document.getElementById("result");
// function add() {
//   var box1 = Number(value1.value);
//   var box2 = Number(value2.value);
//   var total = box1 + box2;
//   result.textContent = total;
// }

// var a = Math.random();
// console.log(a);

// GUSSS NUMBER GAME

// var gnumber = document.getElementById("gnumber");
// var gresult = document.getElementById("gresult");
// var score = document.getElementById("score");
// var rnumber = Math.floor(Math.random() * 10) + 1;
// function check() {
//   var enternum = gnumber.value;
//   if (rnumber == enternum) {
//     gresult.textContent = "Right";
//     gresult.style.color = "green";
//   } else {
//     gresult.textContent = "Wrong";
//     gresult.style.color = "red";
//   }
// }

// var input = document.getElementById("input");
// var result = document.getElementById("result");

// function copy() {
//   result.textContent = input.value;
// }

// var div = document.getElementById("div");
// var color = document.getElementById("color");
// function add() {
//   var h1 = document.createElement("h1");
//   h1.textContent = "Added";
//   div.append(h1);
//   color.style.backgroundColor = "red";
//   color.style.color = "white";
// }

// var tname = document.getElementById("tname");
// function btn(event) {
//   tname.textContent = event.target.textContent;
// }

// function ditem(event) {
//   event.target.remove();
// }

// var div = document.querySelectorAll(".one");
// console.log(div);
// for (count = 0; count < div.length; count = count + 1) {
//   console.log(div[count].textContent);
// }

// var div = document.querySelector(".z");
// var h1 = document.createElement("h1");
// h1.textContent = "Sandy";
// div.insertAdjacentElement("afterend", h1);

// todo list

// var input = document.getElementById("input");
// var ul = document.getElementById("addlist");
// function add() {
//   var listitem = document.createElement("li");
//   listitem.innerHTML =
//     input.value + "<button onclick='delitem(event)'>Delete</Button>";
//   ul.append(listitem);
// }
// function delitem(event) {
//   event.target.parentElement.remove();
// }

// guess number

// var input = document.getElementById("input");
// var result = document.getElementById("result");
// var computeNum = Math.floor(Math.random() * 10) + 1;
// var score = document.getElementById("score");
// var cscore = 10;
// function check() {
//   var yournum = input.value;
//   if (computeNum == yournum) {
//     result.textContent = "Correct";
//     result.style.color = "green";
//   } else {
//     result.textContent = "Wrong";
//     result.style.color = "red";
//     cscore = cscore - 1;
//     score.textContent = cscore;
//   }
// }

// name pick

// var tname = document.getElementById("tname");
// var btn = document.getElementById("one");
// function add(event) {
//   tname.textContent = event.target.textContent;
//   tname.style.textTransform = "capitalize";
// }
// function add() {
//   tname.textContent = btn.textContent;
// }

// todo

var input = document.querySelector("#input");
var todoContainer = document.querySelector(".todo-section");
var addbtn = document.querySelector("#addtodo");
var selectTodo = document.querySelector("#select-todo");
var delSelect = document.querySelector("#del-select");

addbtn.addEventListener("click", function () {
  var listitem = document.createElement("li");
  listitem.setAttribute("class", "todo-list");
  listitem.innerHTML = `<input type="checkbox" class="checkbox" style="display: none" />${input.value}<button onclick="del(event)">Delete</button>`;
  todoContainer.append(listitem);
});

selectTodo.addEventListener("click", function () {
  var checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach(function (checkbox) {
    checkbox.style.display = "block";
  });
});

delSelect.addEventListener("click", function () {
  var checkboxes = document.querySelectorAll(".checkbox:checked");
  checkboxes.forEach(function (checkbox) {
    checkbox.parentElement.remove();
  });
});

function del(event) {
  event.target.parentElement.remove();
}
