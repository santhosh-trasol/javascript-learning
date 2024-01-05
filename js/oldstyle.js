alert("Hi, I'm Santhosh Lakshmanan");
console.log("hi i'm santhosh lakshmanan");
console.log(13456);
console.log(18.256);
console.log(false);
console.log([1, 2, 3, 4, 5]);
console.log({ fname: "sandy", age: 25 });
console.table({ fname: "sandy", age: 22 });
console.error("Sample Error");
console.warn("Sample Error");
console.time("timer");
for (i = 0; i < 10; i++) {
  console.log(i);
}

console.timeEnd("timer");
// console.clear();

console.log("hello world, this is santhosh lakshmanan");
console.log(typeof "sandy");
console.log(typeof 40);

myVar = "Santhosh lakshmanan";
console.log(myVar);
console.log(myVar.length);

// like button
// Get the like button element and the like count element
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

// Set the initial count
let count = 0;

// Attach a click event listener to the like button
likeButton.addEventListener("click", function () {
  // Increment the count
  count++;

  // Update the like count element with the new count
  likeCount.textContent = count;
});
